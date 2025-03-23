import { NextResponse } from "next/server";

export async function GET() {
    const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    ];
    return NextResponse.json(users);
}
