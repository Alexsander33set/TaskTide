import { prisma } from "@/prisma";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

//* 🚀 [POST] - Create a new task in a specific column
export async function POST(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });

  const { content, columnId, color } = await req.json();
  if (!content || !columnId) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const task = await prisma.task.create({
    data: {
      content,
      column: { connect: { id: columnId } },
      color,
    },
  });

  return NextResponse.json(task, { status: 201 });
}

//* 🚀 [PATCH] - Move a task between columns
export async function PATCH(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });

  const { taskId, newColumnId } = await req.json();
  if (!taskId || !newColumnId) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const task = await prisma.task.update({
    where: { id: taskId },
    data: { columnId: newColumnId },
  });

  return NextResponse.json(task);
}

//* 🚀 [DELETE] - Remove a task
export async function DELETE(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });

  const { taskId } = await req.json();
  if (!taskId) return NextResponse.json({ error: "Task ID is required" }, { status: 400 });

  await prisma.task.delete({ where: { id: taskId } });

  return NextResponse.json({ success: true });
}
