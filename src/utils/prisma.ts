// utils/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // da spriječi višestruke instance u developmentu
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"], // možeš izbaciti logove ako ti smeta
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
