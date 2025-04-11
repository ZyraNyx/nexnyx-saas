// src/app/api/register/route.ts
import { NextResponse } from "next/server";

// Tijdelijke gebruikerslijst (alleen in-memory)
let users: { email: string; password: string }[] = [];

export async function POST(req: Request) {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
        return NextResponse.json({ error: "Email and password required." }, { status: 400 });
    }

    const exists = users.find(user => user.email === email);
    if (exists) {
        return NextResponse.json({ error: "User already exists." }, { status: 409 });
    }

    users.push({ email, password });
    return NextResponse.json({ success: true });
}
