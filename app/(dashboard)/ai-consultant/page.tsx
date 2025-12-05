'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Bot,
  Loader2,
  Target,
  TrendingUp,
  AlertTriangle,
  Presentation,
  Save,
  Sparkles,
} from 'lucide-react';

interface AnalysisResult {
  strategy: string;
  kpis: { name: string; target: string; description: string }[];
  warnings: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AiConsultantPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isCreatingSlides, setIsCreatingSlides] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [analysisId, setAnalysisId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    question: '',
    keywords: '',
    targetAudience: '',
    budget: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAnalysisResult(null);

    try {
      const response = await fetch('/api/ai/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          budget: formData.budget ? parseFloat(formData.budget) : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'เกิดข้อผิดพลาด');
      }

      setAnalysisId(data.data?.analysisId);
      setAnalysisResult({
        strategy: data.data?.strategy || 'กลยุทธ์การตลาดแบบบูรณาการ',
        kpis: data.data?.kpis || [
          { name: 'Engagement Rate', target: '5%', description: 'อัตราการมีส่วนร่วมบน Social Media' },
          { name: 'Conversion Rate', target: '3%', description: 'อัตราการเปลี่ยนเป็นลูกค้า' },
          { name: 'Brand Awareness', target: '+30%', description: 'การรับรู้แบรนด์ใน 3 เดือน' },
        ],
        warnings: data.data?.warnings || [
          'ควรระวังการใช้งบประมาณเกินกว่าที่วางแผนไว้',
          'ควรติดตามผลตอบรับจากกลุ่มเป้าหมายอย่างใกล้ชิด',
        ],
      });

      toast({
        title: 'วิเคราะห์เสร็จสิ้น!',
        description: 'กลยุทธ์การตลาดพร้อมแล้ว',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'วิเคราะห์ไม่สำเร็จ',
        description: error instanceof Error ? error.message : 'กรุณาลองใหม่อีกครั้ง',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateSlides = async () => {
    if (!analysisResult) return;

    setIsCreatingSlides(true);
    try {
      const response = await fetch('/api/slides/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          analysisId,
          summary: analysisResult.strategy,
          kpi: analysisResult.kpis,
          warning: analysisResult.warnings,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'เกิดข้อผิดพลาด');
      }

      toast({
        title: 'สร้าง Slides สำเร็จ!',
        description: 'สไลด์พร้อมใช้งานแล้ว',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'สร้าง Slides ไม่สำเร็จ',
        description: error instanceof Error ? error.message : 'กรุณาลองใหม่อีกครั้ง',
        variant: 'destructive',
      });
    } finally {
      setIsCreatingSlides(false);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20">
            <Bot className="h-6 w-6 text-orange-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">AI ที่ปรึกษา</h1>
            <p className="text-gray-400">วิเคราะห์กลยุทธ์การตลาดและสร้างแผนด้วย AI</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form */}
        <motion.div variants={itemVariants}>
          <GlassCard className="p-6">
            <h2 className="mb-6 text-lg font-semibold text-white">
              บอกปัญหาหรือเป้าหมายของคุณ
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="question">ปัญหาหรือคำถามทางการตลาด</Label>
                <Textarea
                  id="question"
                  placeholder="เช่น อยากเพิ่มยอดขายออนไลน์ 30% ใน 3 เดือน..."
                  value={formData.question}
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                  required
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">คีย์เวิร์ด/สินค้า</Label>
                <Input
                  id="keywords"
                  placeholder="เช่น กาแฟ, คาเฟ่, เครื่องดื่ม"
                  value={formData.keywords}
                  onChange={(e) =>
                    setFormData({ ...formData, keywords: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAudience">กลุ่มเป้าหมาย</Label>
                <Input
                  id="targetAudience"
                  placeholder="เช่น คนทำงาน อายุ 25-35 ปี ในกรุงเทพ"
                  value={formData.targetAudience}
                  onChange={(e) =>
                    setFormData({ ...formData, targetAudience: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">งบการตลาด (บาท/เดือน)</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="เช่น 50000"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    กำลังวิเคราะห์...
                  </>
                ) : (
                  <>
                    <Bot className="mr-2 h-4 w-4" />
                    วิเคราะห์
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </motion.div>

        {/* Results */}
        <motion.div variants={itemVariants}>
          <GlassCard className="p-6">
            <h2 className="mb-6 text-lg font-semibold text-white">ผลการวิเคราะห์</h2>

            {isLoading ? (
              <div className="flex h-64 items-center justify-center">
                <div className="text-center">
                  <Loader2 className="mx-auto h-12 w-12 animate-spin text-[#C0C0C0]" />
                  <p className="mt-4 text-gray-400">กำลังวิเคราะห์ด้วย AI...</p>
                </div>
              </div>
            ) : analysisResult ? (
              <div className="space-y-6">
                {/* Strategy */}
                <div className="rounded-xl border border-[#C0C0C0]/20 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="h-5 w-5 text-blue-400" />
                    <h3 className="font-semibold text-white">กลยุทธ์</h3>
                  </div>
                  <p className="text-gray-300">{analysisResult.strategy}</p>
                </div>

                {/* KPIs */}
                <div className="rounded-xl border border-[#C0C0C0]/20 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    <h3 className="font-semibold text-white">KPI แนะนำ</h3>
                  </div>
                  <div className="space-y-3">
                    {analysisResult.kpis.map((kpi, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg bg-black/30 p-3"
                      >
                        <div>
                          <p className="font-medium text-white">{kpi.name}</p>
                          <p className="text-sm text-gray-400">{kpi.description}</p>
                        </div>
                        <span className="text-lg font-bold text-green-400">
                          {kpi.target}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warnings */}
                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    <h3 className="font-semibold text-white">ข้อควรระวัง</h3>
                  </div>
                  <ul className="space-y-2">
                    {analysisResult.warnings.map((warning, index) => (
                      <li key={index} className="flex items-start gap-2 text-yellow-200">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                        {warning}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleCreateSlides}
                    disabled={isCreatingSlides}
                    className="flex-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white hover:from-purple-500/30 hover:to-pink-500/30"
                  >
                    {isCreatingSlides ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Presentation className="mr-2 h-4 w-4" />
                    )}
                    สร้าง Slides
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#C0C0C0]/40 text-white hover:bg-white/5"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    บันทึก
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center">
                <div className="text-center">
                  <Sparkles className="mx-auto h-12 w-12 text-gray-600" />
                  <p className="mt-4 text-gray-500">
                    ผลการวิเคราะห์จะแสดงที่นี่
                  </p>
                </div>
              </div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
