import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    {
      data: [
        {
          name: "Wasi",
          class: "Btech",
        },
      ],
    },
    { status: 200 }
  );
}
