import { remember } from "@epic-web/remember";
import { PrismaClient } from "@prisma-app/client";

export const prisma: PrismaClient = remember(
  "prisma",
  () => new PrismaClient(),
);
