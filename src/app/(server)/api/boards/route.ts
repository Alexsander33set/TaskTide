import { prisma } from "@/utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { NextResponse } from "next/server";

//* 🚀 [GET] - Returns the boards of the authenticated user
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });

  const boards = await prisma.board.findMany({
    where: { owner: { email: session.user.email! } },
    include: { columns: true },
  });

  return NextResponse.json(boards);
}

//* 🚀 [POST] - Creates a new board for the authenticated user
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });

  const { name } = await req.json();
  if (!name) return NextResponse.json({ error: "Board name is required" }, { status: 400 });

  const board = await prisma.board.create({
    data: {
      name,
      owner: { connect: { email: session.user.email! } },
      columns: {
        create: [
          { name: "Backlog" },
          { name: "To Do" },
          { name: "Doing" },
          { name: "Done" },
        ],
      },
    },
  });

  return NextResponse.json(board, { status: 201 });
}
