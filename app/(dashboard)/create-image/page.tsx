'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  Image,
  Sparkles,
  Upload,
  Loader2,
  Download,
  RefreshCw,
  Wand2,
} from 'lucide-react';

const aspectRatios = [
  { value: '1:1', label: '1:1 (สี่เหลี่ยมจัตุรัส)' },
  { value: '4:3', label: '4:3 (แนวนอน)' },
  { value: '16:9', label: '16:9 (วิดีโอ/Banner)' },
  { value: '9:16', label: '9:16 (Story/Reels)' },
];

const styles = [
  { value: 'minimal', label: 'Minimal' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'street', label: 'Street Style' },
  { value: 'cute', label: 'Cute & Kawaii' },
  { value: 'professional', label: 'Professional' },
  { value: 'vintage', label: 'Vintage' },
  { value: 'modern', label: 'Modern' },
  { value: 'natural', label: 'Natural' },
];

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

export default function CreateImagePage() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get('template');
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    productName: '',
    promptText: '',
    aspectRatio: '1:1',
    style: 'minimal',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedImage(null);

    try {
      const response = await fetch('/api/generate/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          templateId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'เกิดข้อผิดพลาด');
      }

      setGeneratedImage(data.data?.imageUrl || '/placeholder-image.png');
      toast({
        title: 'สร้างภาพสำเร็จ!',
        description: 'ภาพของคุณพร้อมใช้งานแล้ว',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'สร้างภาพไม่สำเร็จ',
        description: error instanceof Error ? error.message : 'กรุณาลองใหม่อีกครั้ง',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
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
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
            <Image className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">สร้างภาพ</h1>
            <p className="text-gray-400">สร้างภาพโฆษณาคุณภาพสูงด้วย Nano Banana Pro</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form */}
        <motion.div variants={itemVariants}>
          <GlassCard className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="productName">ชื่อสินค้า/บริการ</Label>
                <Input
                  id="productName"
                  placeholder="เช่น กระเป๋า Coach รุ่นใหม่"
                  value={formData.productName}
                  onChange={(e) =>
                    setFormData({ ...formData, productName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="promptText">คำโฆษณา / Key Message</Label>
                <Textarea
                  id="promptText"
                  placeholder="บอกรายละเอียดภาพที่ต้องการ เช่น ภาพสินค้าหรูหรา พื้นหลังสีขาว มีแสงนุ่ม..."
                  value={formData.promptText}
                  onChange={(e) =>
                    setFormData({ ...formData, promptText: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>สัดส่วนภาพ</Label>
                  <Select
                    value={formData.aspectRatio}
                    onValueChange={(value) =>
                      setFormData({ ...formData, aspectRatio: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกสัดส่วน" />
                    </SelectTrigger>
                    <SelectContent>
                      {aspectRatios.map((ratio) => (
                        <SelectItem key={ratio.value} value={ratio.value}>
                          {ratio.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>สไตล์/ธีม</Label>
                  <Select
                    value={formData.style}
                    onValueChange={(value) =>
                      setFormData({ ...formData, style: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกสไตล์" />
                    </SelectTrigger>
                    <SelectContent>
                      {styles.map((style) => (
                        <SelectItem key={style.value} value={style.value}>
                          {style.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>รูปอ้างอิง (ไม่บังคับ)</Label>
                <div className="rounded-xl border border-dashed border-[#C0C0C0]/40 p-8 text-center transition-colors hover:border-[#C0C0C0]/60">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-400">
                    ลากไฟล์มาวางหรือคลิกเพื่ออัปโหลด
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    กำลังสร้างภาพ...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    สร้างภาพ
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-gray-500">
                ใช้ Nano Banana Pro เป็น engine สร้างภาพ
              </p>
            </form>
          </GlassCard>
        </motion.div>

        {/* Preview */}
        <motion.div variants={itemVariants}>
          <GlassCard className="p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">ผลลัพธ์</h2>

            <div className="aspect-square overflow-hidden rounded-xl border border-[#C0C0C0]/20 bg-black/50">
              {isLoading ? (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-[#C0C0C0]" />
                    <p className="mt-4 text-gray-400">กำลังสร้างภาพด้วย AI...</p>
                  </div>
                </div>
              ) : generatedImage ? (
                <div className="relative h-full">
                  <img
                    src={generatedImage}
                    alt="Generated"
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="mx-auto h-12 w-12 text-gray-600" />
                    <p className="mt-4 text-gray-500">
                      ภาพที่สร้างจะแสดงที่นี่
                    </p>
                  </div>
                </div>
              )}
            </div>

            {generatedImage && (
              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-[#C0C0C0]/40 text-white hover:bg-white/5"
                >
                  <Download className="mr-2 h-4 w-4" />
                  ดาวน์โหลด
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setGeneratedImage(null)}
                  className="border-[#C0C0C0]/40 text-white hover:bg-white/5"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
