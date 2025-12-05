import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { aiConsultSchema } from '@/lib/validations';

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
    const result = aiConsultSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const { question, keywords, targetAudience, budget } = result.data;

    // Mock AI analysis
    // In production, replace with actual AI provider call (OpenAI/Gemini)
    const mockStrategy = `กลยุทธ์การตลาดแบบบูรณาการสำหรับ "${keywords || 'ธุรกิจของคุณ'}":

1. **Content Marketing**: สร้างเนื้อหาที่มีคุณค่าและตรงกลุ่มเป้าหมาย ${targetAudience || 'ลูกค้าทั่วไป'}
2. **Social Media Strategy**: ใช้แพลตฟอร์มที่เหมาะสม เน้น Engagement และ Community Building
3. **Paid Advertising**: จัดสรรงบ ${budget ? `${budget.toLocaleString()} บาท` : 'ตามความเหมาะสม'} สำหรับ Facebook/Google Ads
4. **Influencer Partnership**: ร่วมมือกับ Micro-influencers ในกลุ่มเป้าหมาย`;

    const mockKpis = [
      {
        name: 'Engagement Rate',
        target: '5-8%',
        description: 'อัตราการมีส่วนร่วมบน Social Media',
      },
      {
        name: 'Conversion Rate',
        target: '2-4%',
        description: 'อัตราการเปลี่ยนเป็นลูกค้า',
      },
      {
        name: 'Brand Awareness',
        target: '+30%',
        description: 'การรับรู้แบรนด์ภายใน 3 เดือน',
      },
      {
        name: 'Customer Acquisition Cost',
        target: budget ? `${Math.round(budget / 100)} บาท/คน` : 'ลด 20%',
        description: 'ต้นทุนการได้มาซึ่งลูกค้า',
      },
    ];

    const mockWarnings = [
      'ควรติดตามผลตอบรับจากกลุ่มเป้าหมายอย่างใกล้ชิดใน 2 สัปดาห์แรก',
      'ระวังการใช้งบประมาณเกินกว่าที่วางแผนไว้ ควรมี buffer 10-15%',
      'ควรทำ A/B Testing ก่อนขยายแคมเปญ',
      'อย่าลืมวัดผล ROI ทุกช่องทางเป็นประจำ',
    ];

    // Save to database
    const analysis = await prisma.aiAnalysis.create({
      data: {
        userId: session.user.id,
        question,
        keywords,
        targetAudience,
        budget,
        resultSummary: mockStrategy,
        kpiSuggestion: mockKpis,
        warningNotes: mockWarnings.join('\n'),
      },
    }) as { id: string } | null;

    const analysisId = analysis?.id || crypto.randomUUID();

    // Optionally create a report asset
    await prisma.generatedAsset.create({
      data: {
        userId: session.user.id,
        type: 'REPORT',
        title: `รายงานการวิเคราะห์: ${keywords || question.substring(0, 30)}`,
        description: question,
        provider: 'Internal AI',
        rawRequest: { question, keywords, targetAudience, budget },
        rawResponse: {
          strategy: mockStrategy,
          kpis: mockKpis,
          warnings: mockWarnings,
          analysisId,
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        analysisId,
        strategy: mockStrategy,
        kpis: mockKpis,
        warnings: mockWarnings,
      },
    });
  } catch (error) {
    console.error('AI consult error:', error);
    return NextResponse.json(
      { success: false, error: 'เกิดข้อผิดพลาดในการวิเคราะห์' },
      { status: 500 }
    );
  }
}
