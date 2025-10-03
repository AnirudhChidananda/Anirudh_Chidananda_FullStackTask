import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<string[]>> {
  const guests: string[] = ["Anirudh", "Alice", "Bob", "Charlie", "David", "John", "Rose"];
  return NextResponse.json(guests, {
    status: 200,
  });
}
