import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const user = await prisma.user.create({
      data: {
        name: body.name,
        phoneNumber: body.phoneNumber,
        email: body.email,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "登録失敗" },
      { status: 500 }
    );
  }
}