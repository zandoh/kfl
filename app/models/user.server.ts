import type { User } from "@prisma/client";

import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createOAuthUser(
  user: Pick<User, "openId" | "email" | "firstName" | "lastName" | "imgSrc">,
) {
  return prisma.user.create({
    data: {
      ...user,
    },
  });
}
