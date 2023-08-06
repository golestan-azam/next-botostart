import { NextResponse } from "next/server";

const data = [
  { name: "azam", lastName: "golestan " },
  { name: "mina", lastName: "salimi" },
  { name: "vida", lastName: "javan" },
];

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const filteredData = data.filter((i) => i.name === name);

  return NextResponse.json(filteredData);
}

// http://localhost:3000/api?name=vida
// or http://localhost:3000/api?name=azam
// or http://localhost:3000/api?name=mina
