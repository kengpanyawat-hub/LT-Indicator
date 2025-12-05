import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { businessProfileSchema } from '@/lib/validations';

// GET - Fetch current user's business profile
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'กรุณาเข้าสู่ระบบ' },
        { status: 401 }
      );
    }

    const profile = await prisma.businessProfile.findUnique({
      where: { userId: session.user.id },
    });

    return NextResponse.json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.error('Get business profile error:', error);
    return NextResponse.json(
      { success: false, error: 'เกิดข้อผิดพลาดในการดึงข้อมูล' },
      { status: 500 }
    );
  }
}

// POST - Create or update business profile
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'กรุณาเข้าสู่ระบบ' },
        { status: 401 }
      );
    }

    const body = await req.json();

    // Validate input
    const result = businessProfileSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const { brandName, description, industry, sellingPoints, logoUrl } = result.data;

    // Mock vector embedding generation
    // In production, use actual embedding model
    const mockEmbedding = Array.from({ length: 10 }, () => Math.random());

    // Upsert profile (create or update)
    const profile = await prisma.businessProfile.upsert({
      where: { userId: session.user.id },
      create: {
        userId: session.user.id,
        brandName,
        description,
        industry,
        sellingPoints,
        logoUrl,
        vectorEmbedding: mockEmbedding,
      },
      update: {
        brandName,
        description,
        industry,
        sellingPoints,
        logoUrl,
        vectorEmbedding: mockEmbedding,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'บันทึกข้อมูลธุรกิจสำเร็จ',
      data: profile,
    });
  } catch (error) {
    console.error('Save business profile error:', error);
    return NextResponse.json(
      { success: false, error: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล' },
      { status: 500 }
    );
  }
}
