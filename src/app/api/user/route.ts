import { prisma } from "@/prisma";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

//* 🚀 [GET] - Get user profile
export async function GET(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });

  if (!session.user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email ?? undefined },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

//* 🚀 [PUT] - Change username
export async function PUT(req: Request) {
  try {
    const session = await auth();
    if (!session || !session.user?.email) return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });

    const { name } = await req.json();
    const email = session.user.email;

    if (!name || name.trim().length < 3) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (existingUser.name === name.trim()) {
      return NextResponse.json({ success: false, message: "No changes detected" });
    }

    // 🔹 Atualiza apenas se o nome for diferente
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { name: name.trim() },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
