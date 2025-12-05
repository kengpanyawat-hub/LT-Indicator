import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { createImageSchema } from '@/lib/validations';

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
    const result = createImageSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const { productName, promptText, aspectRatio, style, referenceImageUrl, templateId } = result.data;

    // Build prompt for AI
    const fullPrompt = `Create a professional marketing image for: ${productName}.
Style: ${style}.
Aspect ratio: ${aspectRatio}.
Key message: ${promptText}`;

    // Mock API call to Nano Banana Pro
    // In production, replace with actual API call
    const mockImageUrl = `https://placehold.co/${aspectRatio === '1:1' ? '600x600' : aspectRatio === '4:3' ? '800x600' : '1200x675'}/1a1a1a/C0C0C0?text=${encodeURIComponent(productName)}`;

    // Save to database
    const asset = await prisma.generatedAsset.create({
      data: {
        userId: session.user.id,
        type: 'IMAGE',
        title: productName,
        description: promptText,
        dataUrl: mockImageUrl,
        provider: 'Nano Banana Pro',
        rawRequest: {
          productName,
          promptText,
          aspectRatio,
          style,
          referenceImageUrl,
          templateId,
          fullPrompt,
        },
        rawResponse: {
          imageUrl: mockImageUrl,
          status: 'completed',
          mockMode: true,
        },
      },
    }) as { id: string } | null;

    const assetId = asset?.id || crypto.randomUUID();

    return NextResponse.json({
      success: true,
      data: {
        assetId,
        imageUrl: mockImageUrl,
      },
    });
  } catch (error) {
    console.error('Generate image error:', error);
    return NextResponse.json(
      { success: false, error: 'เกิดข้อผิดพลาดในการสร้างภาพ' },
      { status: 500 }
    );
  }
}
