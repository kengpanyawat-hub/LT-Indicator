'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import {
  Image,
  Video,
  Bot,
  FileText,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Zap,
  LayoutTemplate,
} from 'lucide-react';

const stats = [
  { label: 'ภาพที่สร้าง', value: '0', icon: Image, color: 'from-blue-500 to-cyan-500' },
  { label: 'วิดีโอที่สร้าง', value: '0', icon: Video, color: 'from-purple-500 to-pink-500' },
  { label: 'รายงาน AI', value: '0', icon: FileText, color: 'from-orange-500 to-yellow-500' },
  { label: 'การวิเคราะห์', value: '0', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
];

const quickActions = [
  {
    title: 'สร้างภาพโฆษณา',
    description: 'สร้างภาพโฆษณาคุณภาพสูงด้วย Nano Banana Pro',
    icon: Image,
    href: '/create-image',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'สร้างวิดีโอ',
    description: 'สร้างวิดีโอ TikTok/Animation ด้วย Veo 3.1',
    icon: Video,
    href: '/create-video',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'AI ที่ปรึกษา',
    description: 'วิเคราะห์กลยุทธ์การตลาดด้วย AI',
    icon: Bot,
    href: '/ai-consultant',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    title: 'ดูเทมเพลต',
    description: 'เลือกเทมเพลตสำหรับธุรกิจของคุณ',
    icon: LayoutTemplate,
    href: '/templates',
    color: 'from-green-500/20 to-emerald-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DashboardPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <GlassCard className="relative overflow-hidden p-8">
          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#C0C0C0]/10 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#C0C0C0]/5 blur-[80px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#C0C0C0] to-white">
                <Sparkles className="h-6 w-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white md:text-3xl">
                  ยินดีต้อนรับสู่ AI Marketing Platform
                </h1>
                <p className="text-gray-400">
                  แพลตฟอร์ม All-in-One สำหรับสร้างสื่อการตลาดด้วย AI
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-gray-300">
              สร้างภาพโฆษณา วิดีโอ TikTok รายงานวิเคราะห์ และสไลด์นำเสนอ
              ทั้งหมดในที่เดียว เพื่อธุรกิจไทยโดยเฉพาะ
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/create-image">
                <Button className="bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90">
                  <Zap className="mr-2 h-4 w-4" />
                  เริ่มสร้างภาพ
                </Button>
              </Link>
              <Link href="/create-video">
                <Button variant="outline" className="border-[#C0C0C0]/40 text-white hover:bg-white/5">
                  <Video className="mr-2 h-4 w-4" />
                  สร้างวิดีโอ
                </Button>
              </Link>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="mb-4 text-lg font-semibold text-white">สถิติของคุณ</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <GlassCard key={stat.label} className="p-6">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color}`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <h2 className="mb-4 text-lg font-semibold text-white">เริ่มต้นใช้งาน</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {quickActions.map((action, index) => (
            <Link key={action.title} href={action.href}>
              <GlassCard className="group p-6 transition-all duration-300 hover:border-[#C0C0C0]/60">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${action.color}`}
                  >
                    <action.icon className="h-6 w-6 text-[#C0C0C0]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white group-hover:text-[#C0C0C0] transition-colors">
                      {action.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {action.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Features Preview */}
      <motion.div variants={itemVariants}>
        <GlassCard className="p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">
            ฟีเจอร์เด่น
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Image className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="font-medium text-white">Nano Banana Pro</h3>
              <p className="mt-1 text-sm text-gray-400">
                สร้างภาพโฆษณาคุณภาพสูงระดับมืออาชีพ
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Video className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="font-medium text-white">Veo 3.1</h3>
              <p className="mt-1 text-sm text-gray-400">
                สร้างวิดีโอ TikTok และ Animation อัตโนมัติ
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20">
                <Bot className="h-7 w-7 text-orange-400" />
              </div>
              <h3 className="font-medium text-white">AI ที่ปรึกษา</h3>
              <p className="mt-1 text-sm text-gray-400">
                วิเคราะห์กลยุทธ์และสร้างแผนการตลาด
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
