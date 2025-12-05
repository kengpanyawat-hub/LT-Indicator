'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  ShoppingBag,
  Utensils,
  Video,
  Building2,
  Gift,
  Sparkles,
  Heart,
  Briefcase,
  Search,
  ArrowRight,
  Star,
} from 'lucide-react';

const templates = [
  {
    id: 'promotion',
    name: 'โปรโมชัน',
    description: 'เทมเพลตสำหรับโปรโมชันลดราคา flash sale',
    icon: ShoppingBag,
    color: 'from-red-500/20 to-orange-500/20',
    iconColor: 'text-red-400',
    category: 'marketing',
    isPremium: false,
  },
  {
    id: 'food-menu',
    name: 'เมนูอาหาร',
    description: 'เทมเพลตสำหรับร้านอาหารและคาเฟ่',
    icon: Utensils,
    color: 'from-orange-500/20 to-yellow-500/20',
    iconColor: 'text-orange-400',
    category: 'food',
    isPremium: false,
  },
  {
    id: 'tiktok-ugc',
    name: 'TikTok / UGC',
    description: 'วิดีโอสไตล์ TikTok และ User Generated Content',
    icon: Video,
    color: 'from-pink-500/20 to-purple-500/20',
    iconColor: 'text-pink-400',
    category: 'video',
    isPremium: true,
  },
  {
    id: 'real-estate',
    name: 'อสังหาริมทรัพย์',
    description: 'เทมเพลตสำหรับขายบ้าน คอนโด ที่ดิน',
    icon: Building2,
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    category: 'property',
    isPremium: false,
  },
  {
    id: 'event',
    name: 'อีเวนท์',
    description: 'โปรโมทงานอีเวนท์ คอนเสิร์ต งานแต่ง',
    icon: Gift,
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    category: 'event',
    isPremium: false,
  },
  {
    id: 'beauty',
    name: 'ความงาม',
    description: 'เทมเพลตสำหรับสินค้าความงามและสุขภาพ',
    icon: Heart,
    color: 'from-pink-500/20 to-red-500/20',
    iconColor: 'text-pink-400',
    category: 'beauty',
    isPremium: false,
  },
  {
    id: 'service',
    name: 'บริการ',
    description: 'โปรโมทบริการต่างๆ ซ่อม ล้าง ดูแล',
    icon: Briefcase,
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
    category: 'service',
    isPremium: false,
  },
  {
    id: 'luxury',
    name: 'สินค้าพรีเมียม',
    description: 'เทมเพลตสำหรับสินค้าหรูหราระดับพรีเมียม',
    icon: Sparkles,
    color: 'from-yellow-500/20 to-amber-500/20',
    iconColor: 'text-yellow-400',
    category: 'luxury',
    isPremium: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = templates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-bold text-white md:text-3xl">เทมเพลต</h1>
        <p className="mt-2 text-gray-400">
          เลือกเทมเพลตที่เหมาะกับธุรกิจของคุณเพื่อเริ่มสร้างสื่อโฆษณา
        </p>
      </motion.div>

      {/* Search */}
      <motion.div variants={itemVariants}>
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="ค้นหาเทมเพลต..."
            className="pl-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Templates Grid */}
      <motion.div
        variants={containerVariants}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filteredTemplates.map((template) => (
          <motion.div key={template.id} variants={itemVariants}>
            <GlassCard className="group relative h-full p-6 transition-all duration-300 hover:border-[#C0C0C0]/60">
              {/* Premium Badge */}
              {template.isPremium && (
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 px-2 py-1 text-xs font-medium text-yellow-400">
                  <Star className="h-3 w-3" />
                  Premium
                </div>
              )}

              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${template.color}`}
              >
                <template.icon className={`h-7 w-7 ${template.iconColor}`} />
              </div>

              <h3 className="text-lg font-semibold text-white group-hover:text-[#C0C0C0] transition-colors">
                {template.name}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{template.description}</p>

              <div className="mt-4 flex gap-2">
                <Link
                  href={`/create-image?template=${template.id}`}
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#C0C0C0]/20 to-white/10 text-white hover:from-[#C0C0C0]/30 hover:to-white/20"
                  >
                    ใช้เทมเพลต
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {filteredTemplates.length === 0 && (
        <motion.div variants={itemVariants} className="text-center py-12">
          <p className="text-gray-400">ไม่พบเทมเพลตที่ค้นหา</p>
        </motion.div>
      )}
    </motion.div>
  );
}
