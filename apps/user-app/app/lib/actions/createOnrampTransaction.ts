"use server";

import  prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import bcrypt from "bcrypt";



export async function createOnrampTransaction(
    {amount, provider}: {amount: number, provider: string}
) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session?.user?.id) {
        return {
            message : "user not logged in"
        }
    }

    const userId = Number(session?.user?.id);
    /// this token should be from the provider itself but for now we are using a random string
    const token = provider+ Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    console.log("token", token);
    await prisma.onRampTransaction.create({
        data: {
            provider,
            startTime: new Date(),
            status: "Processing",
            amount: amount,
            token: token,
            userId: userId
        }
    })
    return {
        message: "Transaction Initiated",
    }
}

/// just trying to over engineer this
const generateToken = async (provider:string, reciever: string) => {
    const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const hashedKey = await bcrypt.hash(reciever + key, 10);
    const token = String(provider + hashedKey);
    console.log("token", token);
    return token;
}