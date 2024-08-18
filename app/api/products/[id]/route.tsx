import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  if (id > 10) {
    return NextResponse.json({ error: "Product not found" });
  }

  return NextResponse.json({ id: 10, name: body.name, price: body.price });
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10) {
    return NextResponse.json({ error: "Product not found" });
  }

  return NextResponse.json({});
}
