'use client';

import { useState, useEffect } from 'react';
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
  Briefcase,
  Upload,
  Loader2,
  Save,
  Plus,
  X,
  Building2,
} from 'lucide-react';

const industries = [
  { value: 'food', label: 'อาหารและเครื่องดื่ม' },
  { value: 'fashion', label: 'แฟชั่นและเครื่องแต่งกาย' },
  { value: 'beauty', label: 'ความงามและสุขภาพ' },
  { value: 'tech', label: 'เทคโนโลยีและอิเล็กทรอนิกส์' },
  { value: 'real-estate', label: 'อสังหาริมทรัพย์' },
  { value: 'education', label: 'การศึกษา' },
  { value: 'finance', label: 'การเงินและประกันภัย' },
  { value: 'travel', label: 'ท่องเที่ยวและโรงแรม' },
  { value: 'automotive', label: 'ยานยนต์' },
  { value: 'service', label: 'บริการทั่วไป' },
  { value: 'retail', label: 'ค้าปลีก' },
  { value: 'other', label: 'อื่นๆ' },
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

export default function MyBusinessPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [newSellingPoint, setNewSellingPoint] = useState('');

  const [formData, setFormData] = useState({
    brandName: '',
    description: '',
    industry: '',
    sellingPoints: [] as string[],
    logoUrl: '',
  });

  useEffect(() => {
    fetchBusinessProfile();
  }, []);

  const fetchBusinessProfile = async () => {
    try {
      const response = await fetch('/api/business-profile');
      const data = await response.json();

      if (response.ok && data.data) {
        setFormData({
          brandName: data.data.brandName || '',
          description: data.data.description || '',
          industry: data.data.industry || '',
          sellingPoints: data.data.sellingPoints || [],
          logoUrl: data.data.logoUrl || '',
        });
      }
    } catch (error) {
      console.error('Failed to fetch business profile:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleAddSellingPoint = () => {
    if (newSellingPoint.trim()) {
      setFormData({
        ...formData,
        sellingPoints: [...formData.sellingPoints, newSellingPoint.trim()],
      });
      setNewSellingPoint('');
    }
  };

  const handleRemoveSellingPoint = (index: number) => {
    setFormData({
      ...formData,
      sellingPoints: formData.sellingPoints.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/business-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'เกิดข้อผิดพลาด');
      }

      toast({
        title: 'บันทึกสำเร็จ!',
        description: 'ข้อมูลธุรกิจของคุณถูกบันทึกแล้ว',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'บันทึกไม่สำเร็จ',
        description: error instanceof Error ? error.message : 'กรุณาลองใหม่อีกครั้ง',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#C0C0C0]" />
      </div>
    );
  }

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
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
            <Briefcase className="h-6 w-6 text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">ธุรกิจของฉัน</h1>
            <p className="text-gray-400">จัดการข้อมูลธุรกิจและแบรนด์ของคุณ</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <GlassCard className="max-w-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Logo Upload */}
            <div className="space-y-2">
              <Label>โลโก้แบรนด์</Label>
              <div className="flex items-center gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-dashed border-[#C0C0C0]/40 bg-white/5">
                  {formData.logoUrl ? (
                    <img
                      src={formData.logoUrl}
                      alt="Logo"
                      className="h-full w-full rounded-xl object-contain"
                    />
                  ) : (
                    <Building2 className="h-8 w-8 text-gray-500" />
                  )}
                </div>
                <div className="flex-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[#C0C0C0]/40 text-white hover:bg-white/5"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    อัปโหลดโลโก้
                  </Button>
                  <p className="mt-2 text-xs text-gray-500">
                    รองรับ PNG, JPG ขนาดไม่เกิน 2MB
                  </p>
                </div>
              </div>
            </div>

            {/* Brand Name */}
            <div className="space-y-2">
              <Label htmlFor="brandName">ชื่อแบรนด์</Label>
              <Input
                id="brandName"
                placeholder="เช่น Coffee Journey"
                value={formData.brandName}
                onChange={(e) =>
                  setFormData({ ...formData, brandName: e.target.value })
                }
                required
              />
            </div>

            {/* Industry */}
            <div className="space-y-2">
              <Label>ประเภทธุรกิจ</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) =>
                  setFormData({ ...formData, industry: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="เลือกประเภทธุรกิจ" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">คำอธิบายแบรนด์</Label>
              <Textarea
                id="description"
                placeholder="บอกเล่าเรื่องราวของแบรนด์คุณ..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                className="min-h-[120px]"
              />
            </div>

            {/* Selling Points */}
            <div className="space-y-2">
              <Label>จุดขายหลัก</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="เช่น ส่งฟรีทั่วไทย"
                  value={newSellingPoint}
                  onChange={(e) => setNewSellingPoint(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSellingPoint();
                    }
                  }}
                />
                <Button
                  type="button"
                  onClick={handleAddSellingPoint}
                  variant="outline"
                  className="border-[#C0C0C0]/40 text-white hover:bg-white/5"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {formData.sellingPoints.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {formData.sellingPoints.map((point, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 rounded-full bg-[#C0C0C0]/20 px-3 py-1 text-sm text-white"
                    >
                      {point}
                      <button
                        type="button"
                        onClick={() => handleRemoveSellingPoint(index)}
                        className="ml-1 rounded-full p-0.5 hover:bg-white/20"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  กำลังบันทึก...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  บันทึกข้อมูลธุรกิจ
                </>
              )}
            </Button>
          </form>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
