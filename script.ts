import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.serverInformation.create({

        data: {
    
          ip: '192.168.0.1',
    
          port: 6553,

          height: 6,

          width: 32,
    
        },
    
      })
    
      console.log(user)
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
