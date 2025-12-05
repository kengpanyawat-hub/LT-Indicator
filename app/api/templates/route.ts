import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

// GET - Fetch all templates
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'กรุณาเข้าสู่ระบบ' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const type = searchParams.get('type');

    const where: Record<string, unknown> = {};
    if (category) where.category = category;
    if (type) where.type = type;

    const templates = await prisma.template.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    // If no templates in DB, return mock templates
    if (templates.length === 0) {
      const mockTemplates = [
        {
          id: 'promotion',
          name: 'โปรโมชัน',
          category: 'marketing',
          description: 'เทมเพลตสำหรับโปรโมชันลดราคา flash sale',
          type: 'IMAGE',
          config: { style: 'bold', colors: ['red', 'yellow'] },
          isPremium: false,
        },
        {
          id: 'food-menu',
          name: 'เมนูอาหาร',
          category: 'food',
          description: 'เทมเพลตสำหรับร้านอาหารและคาเฟ่',
          type: 'IMAGE',
          config: { style: 'warm', colors: ['orange', 'brown'] },
          isPremium: false,
        },
        {
          id: 'tiktok-ugc',
          name: 'TikTok / UGC',
          category: 'video',
          description: 'วิดีโอสไตล์ TikTok และ User Generated Content',
          type: 'VIDEO',
          config: { duration: 15, style: 'trendy' },
          isPremium: true,
        },
        {
          id: 'real-estate',
          name: 'อสังหาริมทรัพย์',
          category: 'property',
          description: 'เทมเพลตสำหรับขายบ้าน คอนโด ที่ดิน',
          type: 'IMAGE',
          config: { style: 'professional', colors: ['blue', 'white'] },
          isPremium: false,
        },
        {
          id: 'event',
          name: 'อีเวนท์',
          category: 'event',
          description: 'โปรโมทงานอีเวนท์ คอนเสิร์ต งานแต่ง',
          type: 'IMAGE',
          config: { style: 'festive', colors: ['purple', 'gold'] },
          isPremium: false,
        },
        {
          id: 'beauty',
          name: 'ความงาม',
          category: 'beauty',
          description: 'เทมเพลตสำหรับสินค้าความงามและสุขภาพ',
          type: 'IMAGE',
          config: { style: 'elegant', colors: ['pink', 'white'] },
          isPremium: false,
        },
      ];

      return NextResponse.json({
        success: true,
        data: mockTemplates,
      });
    }

    return NextResponse.json({
      success: true,
      data: templates,
    });
  } catch (error) {
    console.error('Get templates error:', error);
    return NextResponse.json(
      { success: false, error: 'เกิดข้อผิดพลาดในการดึงข้อมูล' },
      { status: 500 }
    );
  }
}
