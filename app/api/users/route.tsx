import { NextRequest, NextResponse } from "next/server";
import { schema as userSchema } from "./schema";
import prisma from "@/prisma/client";

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user) {
    return NextResponse.json({ error: "User already exist" }, { status: 400 });
  }

  const Newuser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(Newuser, { status: 201 });
}
