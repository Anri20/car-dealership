import bcrypt from "bcrypt"
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { username, email, password } = await req.json()

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
        return NextResponse.json({ message: "Email is already in use" }, { status: 409 })
    }

    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: { username, email, password: hashed },
        select: { id: true, username: true, email: true },
    })

    return NextResponse.json(user, { status: 201 })
}