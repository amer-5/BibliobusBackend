import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (!global.prisma) {
  global.prisma = new PrismaClient();
}

export { prisma: global.prisma };
