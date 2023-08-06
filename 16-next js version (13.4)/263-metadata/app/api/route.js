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

// export async function POST(req) {
//   return NextResponse.json("Hi");
// }

//  in postman send request to http://localhost:3000/api

// export async function POST(req) {
//   const body = await req.json();
//   console.log(body);
//   return NextResponse.json(`Hi, you are ${body.data.name}`);
// }

export async function POST(req) {
  const body = await req.json();
  const filteredData = data.filter((i) => i.name === body.data.name);
  // console.log("***: ", data);
  // console.log(filteredData);
  return NextResponse.json(filteredData);
}
