"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function p2pTransfer(phone: string, amount: number) {

    const session = await getServerSession(authOptions);

    const sender = session?.user?.id;

    if(!sender) {
        return {
            message: "user not logged in"
        }
    }

    const receiver = await prisma.user.findUnique({
        where: {
            number: phone
        }
    })

    if(!receiver) {
        return {
            message: "receiver not found"
        }
    }

    await prisma.$transaction( async (txn) => {

        // add locking to prevent double spending 
        await txn.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(sender)} FOR UPDATE`;

        const senderBalance = await txn.balance.findUnique({
            where: {
                userId: Number(sender)
            }
        })

        if(!senderBalance ||senderBalance?.amount < amount) {
         throw new Error("insufficient balance")
        }

        await txn.balance.update({
            where:{
                userId: Number(sender)
            },
            data: {
                amount: {
                    decrement: amount
                }
            }
        })

        await txn.balance.update({
            where:{
                userId: Number(receiver.id)
            },
            data: {
                amount: {
                    increment: amount
                }
            }
        })

        await txn.p2pTransfer.create({
            data: {
                amount,
                fromUserId: Number(sender),
                toUserId: Number(receiver.id),
                timestamp: new Date(),

            }
        })

    })
        
    }
    
