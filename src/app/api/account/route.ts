import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const body = await req.json()
  if (!body) {
    return NextResponse.error()
  }
  const account = await prisma.account.create({
    data: {
      image: body.image,
      name: body.name,
      plan: body.plan,
      slug: body.slug
    }
  })
  return NextResponse.json(account, { status: 201 })
}
