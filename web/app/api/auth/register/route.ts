import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import dbConnect from "@/lib/db"
import User from "@/models/User"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    await dbConnect()

    const existing = await User.findOne({ email })
    if (existing) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      )
    }

    const hashed = await bcrypt.hash(password, 12)
    await User.create({ name, email, password: hashed })

    return NextResponse.json({ message: "Account created" }, { status: 201 })
  } catch (_err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}