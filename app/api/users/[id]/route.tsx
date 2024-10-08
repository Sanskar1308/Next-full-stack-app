import { NextRequest, NextResponse } from "next/server";
import { schema as userSchema } from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "UserId not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const user = await prisma.user.delete({ where: { id: id } });
  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json({
    message: `User (${user.name}) has been deleted with having id- ${user.id}`,
  });
}
