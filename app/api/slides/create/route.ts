import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { createSlidesSchema } from '@/lib/validations';

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
    const result = createSlidesSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const { analysisId, summary, kpi, warning } = result.data;

    // Mock API call to Manus Slides
    // In production, replace with actual API call using MANUS_SLIDES_API_KEY
    const mockSlidesId = `slides_${Date.now()}`;
    const mockDeckUrl = `https://manus-slides.example.com/deck/${mockSlidesId}`;

    // Create slides outline based on input
    const slidesContent = {
      slides: [
        {
          type: 'title',
          title: 'Marketing Strategy Presentation',
          subtitle: 'AI-Generated Analysis',
        },
        {
          type: 'content',
          title: 'Executive Summary',
          content: summary || 'Strategic marketing plan overview',
        },
        {
          type: 'kpi',
          title: 'Key Performance Indicators',
          items: kpi || [],
        },
        {
          type: 'warning',
          title: 'Risk Assessment',
          items: warning || [],
        },
        {
          type: 'closing',
          title: 'Next Steps',
          content: 'Implementation roadmap and timeline',
        },
      ],
    };

    // Save to database
    const asset = await prisma.generatedAsset.create({
      data: {
        userId: session.user.id,
        type: 'SLIDES',
        title: 'Marketing Strategy Presentation',
        description: summary?.substring(0, 200),
        dataUrl: mockDeckUrl,
        provider: 'Manus Slides',
        rawRequest: {
          analysisId,
          summary,
          kpi,
          warning,
        },
        rawResponse: {
          slidesId: mockSlidesId,
          deckUrl: mockDeckUrl,
          slidesContent,
          mockMode: true,
        },
      },
    }) as { id: string } | null;

    const assetId = asset?.id || crypto.randomUUID();

    return NextResponse.json({
      success: true,
      data: {
        slidesId: mockSlidesId,
        deckUrl: mockDeckUrl,
        assetId,
      },
    });
  } catch (error) {
    console.error('Create slides error:', error);
    return NextResponse.json(
      { success: false, error: 'เกิดข้อผิดพลาดในการสร้างสไลด์' },
      { status: 500 }
    );
  }
}
