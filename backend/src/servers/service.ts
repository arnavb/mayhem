import { Server } from "@prisma/client";
import { prisma } from "../db";

export async function findServer(id: number): Promise<Server | null> {
  return prisma.server.findFirst({ where: { id } });
}
