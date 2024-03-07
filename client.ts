import { PrismaClient } from "@prisma/client";
import { generate } from "./generate";

export const prisma = new PrismaClient().$extends({
  model: {
    user: {
      build: (firstName: string, lastName: string) => {
        return prisma.user.create({
          data: { name: `${firstName} ${lastName}`, code: generate() },
        });
      },
    },
  },
});
