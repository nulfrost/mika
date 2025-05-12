import { remember } from "@epic-web/remember";
import { PrismaClient } from "../generated/prisma";

export const prisma: PrismaClient = remember(
  "prisma",
  () => new PrismaClient(),
);
