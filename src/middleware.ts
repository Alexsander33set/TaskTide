import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default function middleware(req: Request) {
  const session = auth();
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}
