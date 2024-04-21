import prisma from "@repo/db/client";
import { create } from "domain";
import { NextResponse } from "next/server"

const client = prisma;

export const GET = async () => {
    await prisma.user.upsert({
        where :{
            number: '1212121212' 
        },
        update: {},
        create:{
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
