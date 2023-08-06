import { NextResponse } from "next/server";

export async function GET() {
  const data = { name: "Azam", lastName: "Golestan " };

  return NextResponse.json({ data });
}

// http://localhost:3000/api