'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import {
  Sparkles,
  Image,
  Video,
  Bot,
  Presentation,
  ArrowRight,
  CheckCircle,
  Star,
} from 'lucide-react';

const features = [
  {
    icon: Image,
    title: 'สร้างภาพโฆษณา',
    description: 'สร้างภาพโฆษณาคุณภาพสูงด้วย Nano Banana Pro AI',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Video,
    title: 'สร้างวิดีโอ',
    description: 'สร้างวิดีโอ TikTok และ Animation ด้วย Veo 3.1',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: Bot,
    title: 'AI ที่ปรึกษา',
    description: 'วิเคราะห์กลยุทธ์การตลาดและรับคำแนะนำจาก AI',
    color: 'from-orange-500/20 to-yellow-500/20',
    iconColor: 'text-orange-400',
  },
  {
    icon: Presentation,
    title: 'สร้าง Slides',
    description: 'สร้าง Presentation อัตโนมัติจากผลวิเคราะห์',
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
  },
];

const benefits = [
  'ประหยัดเวลาสร้างสื่อการตลาด 80%',
  'ภาพและวิดีโอคุณภาพระดับมืออาชีพ',
  'AI วิเคราะห์และแนะนำกลยุทธ์ตรงจุด',
  'สร้าง Presentation อัตโนมัติ',
  'ออกแบบมาสำหรับธุรกิจไทยโดยเฉพาะ',
  'รองรับภาษาไทย 100%',
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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C0C0C0]/5 blur-[150px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C0C0C0]/5 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-[#C0C0C0]/20">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C0C0C0] to-white">
              <Sparkles className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-bold text-white">AI Marketing</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button
                variant="outline"
                className="border-[#C0C0C0]/40 text-white hover:bg-white/5"
              >
                เข้าสู่ระบบ
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90">
                สมัครฟรี
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#C0C0C0]/10 px-4 py-2 text-sm text-[#C0C0C0]">
                <Star className="h-4 w-4" />
                แพลตฟอร์ม All-in-One สำหรับธุรกิจไทย
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl"
            >
              สร้างสื่อการตลาดด้วย{' '}
              <span className="bg-gradient-to-r from-[#C0C0C0] to-white bg-clip-text text-transparent">
                AI
              </span>{' '}
              ครบจบในที่เดียว
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-gray-400 md:text-xl"
            >
              ภาพโฆษณา วิดีโอ TikTok รายงานวิเคราะห์ และสไลด์นำเสนอ
              <br />
              สร้างได้ภายในไม่กี่คลิก พร้อมใช้งานทันที
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/auth/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90"
                >
                  เริ่มต้นใช้งานฟรี
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#C0C0C0]/40 text-white hover:bg-white/5"
                >
                  ดูฟีเจอร์ทั้งหมด
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-white md:text-4xl"
            >
              ฟีเจอร์ครบครัน
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-gray-400">
              ทุกสิ่งที่คุณต้องการสำหรับการตลาดยุคใหม่
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <GlassCard className="h-full p-6" animate={false}>
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}
                  >
                    <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                ทำไมต้องเลือกเรา?
              </h2>
              <p className="mt-4 text-gray-400">
                แพลตฟอร์มที่ออกแบบมาเพื่อธุรกิจไทยโดยเฉพาะ
                ช่วยให้คุณสร้างสื่อการตลาดได้อย่างมืออาชีพ
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#C0C0C0]" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              <motion.div variants={itemVariants} className="mt-8">
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90"
                  >
                    เริ่มต้นใช้งานเลย
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard className="p-8" animate={false}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <Image className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Nano Banana Pro</h3>
                      <p className="text-sm text-gray-400">สร้างภาพโฆษณาคุณภาพสูง</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      <Video className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Veo 3.1</h3>
                      <p className="text-sm text-gray-400">สร้างวิดีโอ TikTok อัตโนมัติ</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20">
                      <Bot className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">AI ที่ปรึกษา</h3>
                      <p className="text-sm text-gray-400">วิเคราะห์กลยุทธ์การตลาด</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                      <Presentation className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Manus Slides</h3>
                      <p className="text-sm text-gray-400">สร้าง Presentation อัตโนมัติ</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard className="p-12 text-center" animate={false}>
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  พร้อมเริ่มต้นหรือยัง?
                </h2>
                <p className="mt-4 text-gray-400">
                  สมัครฟรีวันนี้ เริ่มสร้างสื่อการตลาดคุณภาพสูงได้ทันที
                </p>
                <div className="mt-8">
                  <Link href="/auth/register">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90"
                    >
                      สมัครฟรี
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </GlassCard>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#C0C0C0]/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 AI Marketing Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
