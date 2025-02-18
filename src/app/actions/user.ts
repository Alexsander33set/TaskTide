"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function updateUser(name: string) {
  const session = await auth();
  if (!session?.user) throw new Error("Not authenticated");

  await prisma.user.update({
    where: { email: session.user.email! },
    data: { name },
  });

  return { success: true };
}
