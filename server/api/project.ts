import { prisma } from "~~/server/utils/prisma";

export default defineEventHandler(async () => {
  return await prisma.project.findMany({
    orderBy: { id: "desc" },
    take: 50,
  });
});
