import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";
const prisma = new PrismaClient()


async function transferAmount( senderId: number, receiverId: number, amount: number ) {
  await prisma.p2pTransfer.create({
    data: {
      amount: amount,
      timestamp: new Date(),
      fromUserId: senderId, 
      toUserId: receiverId, 
    },
  });

  await prisma.balance.update({
    where: {
      userId: senderId
    },
    data: {
      amount: { decrement: amount }
    }
  });

  await prisma.balance.update({
    where: {
      userId: receiverId
    },
    data: {
      amount: { increment: amount }
    }
  });
}



async function main() {
  const alice = await prisma.user.upsert({
    where: { number: '1111111111' },
    update: {},
    create: {
      number: '1111111111',
      password: await bcrypt.hash('alice', 10),
      name: 'alice',
      Balance: {
        create: {
            amount: 20000,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "token__1",
          provider: "HDFC Bank",
        },
      },
    },
  })
  const bob = await prisma.user.upsert({
    where: { number: '2222222222' },
    update: {},
    create: {
      number: '2222222222',
      password: await bcrypt.hash('bob', 10),
      name: 'bob',
      Balance: {
        create: {
            amount: 2000,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "token__2",
          provider: "HDFC Bank",
        },
      },
    },
  })
 
// Transfer from Alice to Bob
await transferAmount( alice.id, bob.id, 2000);

// Transfer from Bob to Alice
await transferAmount( bob.id, alice.id, 1000);
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

