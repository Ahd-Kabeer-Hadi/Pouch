import prisma from "@repo/db/client";
import { NextResponse } from "next/server"

const client = prisma;

export const GET = async () => {
    await prisma.user.create({
        data:{
            email: "asd",
            name: "asdasd",
            number: "1212121212",
            password: "12121212"
        }
    })
    
    return NextResponse.json({
        message: "hi there"
    })
}