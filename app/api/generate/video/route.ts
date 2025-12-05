import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { createVideoSchema } from '@/lib/validations';

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
    const result = createVideoSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const { mode, productInfo, lengthSec, personaProps, style, moodTone, referenceAsset } = result.data;

    // Build prompt for Veo 3.1
    const videoPrompt = `Create a ${lengthSec} second ${mode} video for: ${productInfo}.
Style: ${style}
Mood: ${moodTone}
Persona: ${personaProps.gender}, ${personaProps.skinTone} skin, ${personaProps.bodyType} body`;

    // Mock API call to Veo 3.1
    // In production, replace with actual API call
    const mockVideoUrl = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';

    // Save to database
    const asset = await prisma.generatedAsset.create({
      data: {
        userId: session.user.id,
        type: 'VIDEO',
        title: `${mode === 'tiktok' ? 'TikTok' : 'Animation'} Video`,
        description: productInfo.substring(0, 200),
        dataUrl: mockVideoUrl,
        provider: 'Veo 3.1',
        rawRequest: {
          mode,
          productInfo,
          lengthSec,
          personaProps,
          style,
          moodTone,
          referenceAsset,
          videoPrompt,
        },
        rawResponse: {
          videoUrl: mockVideoUrl,
          status: 'completed',
          duration: lengthSec,
          mockMode: true,
        },
      },
    }) as { id: string } | null;

    const assetId = asset?.id || crypto.randomUUID();

    return NextResponse.json({
      success: true,
      data: {
        assetId,
        videoUrl: mockVideoUrl,
        status: 'completed',
      },
    });
  } catch (error) {
    console.error('Generate video error:', error);
    return NextResponse.json(
      { success: false, error: 'เกิดข้อผิดพลาดในการสร้างวิดีโอ' },
      { status: 500 }
    );
  }
}
