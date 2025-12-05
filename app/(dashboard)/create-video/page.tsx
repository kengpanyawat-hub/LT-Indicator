'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  Video,
  Loader2,
  Download,
  RefreshCw,
  Play,
  Sparkles,
} from 'lucide-react';

const genders = [
  { value: 'female', label: 'หญิง' },
  { value: 'male', label: 'ชาย' },
  { value: 'neutral', label: 'ไม่ระบุ' },
];

const skinTones = [
  { value: 'light', label: 'ผิวขาว' },
  { value: 'medium', label: 'ผิวสองสี' },
  { value: 'tan', label: 'ผิวแทน' },
  { value: 'dark', label: 'ผิวคล้ำ' },
];

const bodyTypes = [
  { value: 'slim', label: 'ผอม' },
  { value: 'average', label: 'ปานกลาง' },
  { value: 'athletic', label: 'กล้ามเนื้อ' },
  { value: 'curvy', label: 'อวบ' },
];

const moodTones = [
  { value: 'energetic', label: 'กระฉับกระเฉง' },
  { value: 'calm', label: 'สงบ ผ่อนคลาย' },
  { value: 'professional', label: 'มืออาชีพ' },
  { value: 'fun', label: 'สนุกสนาน' },
  { value: 'elegant', label: 'หรูหรา สง่า' },
  { value: 'casual', label: 'เป็นกันเอง' },
];

const videoStyles = [
  { value: 'tiktok', label: 'TikTok Style' },
  { value: 'instagram', label: 'Instagram Reels' },
  { value: 'youtube', label: 'YouTube Shorts' },
  { value: 'professional', label: 'Professional Ad' },
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

export default function CreateVideoPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('tiktok');

  const [formData, setFormData] = useState({
    mode: 'tiktok',
    productInfo: '',
    lengthSec: 15,
    personaProps: {
      gender: 'female',
      skinTone: 'medium',
      bodyType: 'average',
    },
    style: 'tiktok',
    moodTone: 'energetic',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedVideo(null);

    try {
      const response = await fetch('/api/generate/video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'เกิดข้อผิดพลาด');
      }

      setGeneratedVideo(data.data?.videoUrl || '/placeholder-video.mp4');
      toast({
        title: 'สร้างวิดีโอสำเร็จ!',
        description: 'วิดีโอของคุณพร้อมใช้งานแล้ว',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'สร้างวิดีโอไม่สำเร็จ',
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
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
            <Video className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">สร้างวิดีโอ</h1>
            <p className="text-gray-400">สร้างวิดีโอ TikTok และ Animation ด้วย Veo 3.1</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form */}
        <motion.div variants={itemVariants}>
          <GlassCard className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6 w-full">
                <TabsTrigger value="tiktok" className="flex-1">
                  TikTok UGC
                </TabsTrigger>
                <TabsTrigger value="animation" className="flex-1">
                  Animation
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit} className="space-y-6">
                <TabsContent value="tiktok" className="space-y-6 mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="productInfo">ข้อมูลสินค้า/บริการ</Label>
                    <Textarea
                      id="productInfo"
                      placeholder="อธิบายสินค้าหรือบริการที่ต้องการโปรโมท..."
                      value={formData.productInfo}
                      onChange={(e) =>
                        setFormData({ ...formData, productInfo: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label>เพศตัวละคร</Label>
                      <Select
                        value={formData.personaProps.gender}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            personaProps: { ...formData.personaProps, gender: value },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {genders.map((g) => (
                            <SelectItem key={g.value} value={g.value}>
                              {g.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>สีผิว</Label>
                      <Select
                        value={formData.personaProps.skinTone}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            personaProps: { ...formData.personaProps, skinTone: value },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {skinTones.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>รูปร่าง</Label>
                      <Select
                        value={formData.personaProps.bodyType}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            personaProps: { ...formData.personaProps, bodyType: value },
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {bodyTypes.map((b) => (
                            <SelectItem key={b.value} value={b.value}>
                              {b.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="animation" className="space-y-6 mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="productInfoAnim">ข้อมูลสินค้า/บริการ</Label>
                    <Textarea
                      id="productInfoAnim"
                      placeholder="อธิบายสินค้าหรือบริการที่ต้องการโปรโมท..."
                      value={formData.productInfo}
                      onChange={(e) =>
                        setFormData({ ...formData, productInfo: e.target.value })
                      }
                      required
                    />
                  </div>
                </TabsContent>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>ความยาว (วินาที)</Label>
                    <Input
                      type="number"
                      min={5}
                      max={180}
                      value={formData.lengthSec}
                      onChange={(e) =>
                        setFormData({ ...formData, lengthSec: parseInt(e.target.value) })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Mood & Tone</Label>
                    <Select
                      value={formData.moodTone}
                      onValueChange={(value) =>
                        setFormData({ ...formData, moodTone: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {moodTones.map((m) => (
                          <SelectItem key={m.value} value={m.value}>
                            {m.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>สไตล์วิดีโอ</Label>
                  <Select
                    value={formData.style}
                    onValueChange={(value) =>
                      setFormData({ ...formData, style: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {videoStyles.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      กำลังสร้างวิดีโอ...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      สร้างวิดีโอ
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-gray-500">
                  ใช้ Veo 3.1 เป็น engine สร้างวิดีโอ
                </p>
              </form>
            </Tabs>
          </GlassCard>
        </motion.div>

        {/* Preview */}
        <motion.div variants={itemVariants}>
          <GlassCard className="p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">ผลลัพธ์</h2>

            <div className="aspect-[9/16] max-h-[500px] overflow-hidden rounded-xl border border-[#C0C0C0]/20 bg-black/50">
              {isLoading ? (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-[#C0C0C0]" />
                    <p className="mt-4 text-gray-400">กำลังสร้างวิดีโอด้วย AI...</p>
                    <p className="mt-2 text-sm text-gray-500">อาจใช้เวลาสักครู่</p>
                  </div>
                </div>
              ) : generatedVideo ? (
                <div className="relative h-full">
                  <video
                    src={generatedVideo}
                    controls
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="mx-auto h-12 w-12 text-gray-600" />
                    <p className="mt-4 text-gray-500">
                      วิดีโอที่สร้างจะแสดงที่นี่
                    </p>
                  </div>
                </div>
              )}
            </div>

            {generatedVideo && (
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
                  onClick={() => setGeneratedVideo(null)}
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
