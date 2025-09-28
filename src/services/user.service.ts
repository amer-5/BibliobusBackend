// src/services/user.service.ts
import { prisma } from "../utils/prisma";

export const getAllUsers = () => prisma.user.findMany();
export const getUserById = (id: string) =>
  prisma.user.findUnique({ where: { id } });
export const updateUser = (id: string, data: any) =>
  prisma.user.update({ where: { id }, data });
export const deleteUser = (id: string) => prisma.user.delete({ where: { id } });
