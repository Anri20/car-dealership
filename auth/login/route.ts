import { signToken } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

const ONE_HOUR = 60 * 60

export async function POST(req: Request) {
    const { email, password } = await req.json()

    const user = await prisma.master_users.findUnique({ where: { email } })
    if (!user) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    const token = await signToken({ id: user.id, username: user.username })

    const response = NextResponse.json({ message: "Login successfull" })

    response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: ONE_HOUR,
        path: '/'
    })

    return response
}