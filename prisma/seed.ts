// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

import data from "../data/links.json";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      isAdmin: true,
    },
  });

  data.forEach(async (link) => {
    await prisma.link.create({ data: link });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
