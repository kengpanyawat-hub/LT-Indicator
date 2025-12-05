'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import {
  HelpCircle,
  Settings,
  Image,
  Video,
  Target,
  Download,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'สร้างโปรไฟล์ธุรกิจ',
    description:
      'เริ่มต้นด้วยการกรอกข้อมูลธุรกิจของคุณ เช่น ชื่อแบรนด์ ประเภทธุรกิจ และจุดขายหลัก เพื่อให้ AI เข้าใจธุรกิจของคุณ',
    icon: Settings,
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    href: '/my-business',
    tips: [
      'กรอกข้อมูลให้ครบถ้วนเพื่อผลลัพธ์ที่ดีที่สุด',
      'อัปโหลดโลโก้แบรนด์เพื่อใช้ในการสร้างสื่อ',
      'ระบุจุดขายหลักที่ต้องการเน้น',
    ],
  },
  {
    number: 2,
    title: 'ใช้เทมเพลตหรือสร้างเอง',
    description:
      'เลือกเทมเพลตที่เหมาะกับธุรกิจของคุณ หรือสร้างภาพ/วิดีโอใหม่ตามต้องการ โดยระบุรายละเอียดและสไตล์ที่ต้องการ',
    icon: Image,
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    href: '/templates',
    tips: [
      'ดูเทมเพลตยอดนิยมก่อนเริ่มสร้าง',
      'ระบุสไตล์และ mood ที่ต้องการชัดเจน',
      'ลองหลายๆ แบบเพื่อหาที่ถูกใจที่สุด',
    ],
  },
  {
    number: 3,
    title: 'ใช้ AI ที่ปรึกษา',
    description:
      'วิเคราะห์ปัญหาการตลาดและรับคำแนะนำกลยุทธ์จาก AI พร้อมสร้าง Slides Presentation อัตโนมัติ',
    icon: Target,
    color: 'from-orange-500/20 to-yellow-500/20',
    iconColor: 'text-orange-400',
    href: '/ai-consultant',
    tips: [
      'อธิบายปัญหาหรือเป้าหมายให้ละเอียด',
      'ระบุกลุ่มเป้าหมายและงบประมาณ',
      'ใช้ผลวิเคราะห์สร้าง Slides ได้เลย',
    ],
  },
  {
    number: 4,
    title: 'ดาวน์โหลดผลงาน',
    description:
      'ดูประวัติผลงานทั้งหมดที่สร้างไว้ ดาวน์โหลดไฟล์คุณภาพสูง และนำไปใช้งานได้ทันที',
    icon: Download,
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
    href: '/history',
    tips: [
      'ผลงานทั้งหมดถูกบันทึกไว้อัตโนมัติ',
      'ดาวน์โหลดได้ทุกเมื่อ ไม่มีหมดอายุ',
      'แชร์ลิงก์ผลงานได้โดยตรง',
    ],
  },
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

export default function HowToUsePage() {
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
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
            <HelpCircle className="h-6 w-6 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">วิธีใช้งาน</h1>
            <p className="text-gray-400">เริ่มต้นใช้งานแพลตฟอร์มใน 4 ขั้นตอนง่ายๆ</p>
          </div>
        </div>
      </motion.div>

      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div key={step.number} variants={itemVariants}>
            <GlassCard className="overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Step Number & Icon */}
                <div
                  className={`flex items-center justify-center bg-gradient-to-br ${step.color} p-8 lg:w-48`}
                >
                  <div className="text-center">
                    <div className="mb-2 text-5xl font-bold text-white/80">
                      {step.number}
                    </div>
                    <step.icon className={`mx-auto h-8 w-8 ${step.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <h2 className="text-xl font-bold text-white">{step.title}</h2>
                  <p className="mt-2 text-gray-400">{step.description}</p>

                  {/* Tips */}
                  <div className="mt-4 space-y-2">
                    {step.tips.map((tip, tipIndex) => (
                      <div
                        key={tipIndex}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#C0C0C0]" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <Link href={step.href}>
                      <Button className="bg-gradient-to-r from-[#C0C0C0]/20 to-white/10 text-white hover:from-[#C0C0C0]/30 hover:to-white/20">
                        ไปที่หน้า {step.title.replace('สร้าง', '').replace('ใช้', '')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Connection Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -bottom-6 left-24 h-6 w-0.5 bg-[#C0C0C0]/30" />
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Additional Help */}
      <motion.div variants={itemVariants}>
        <GlassCard className="p-6 text-center">
          <h3 className="text-lg font-semibold text-white">ต้องการความช่วยเหลือเพิ่มเติม?</h3>
          <p className="mt-2 text-gray-400">
            ติดต่อทีมงานของเราได้ตลอดเวลาผ่านช่องทางต่างๆ
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Button
              variant="outline"
              className="border-[#C0C0C0]/40 text-white hover:bg-white/5"
            >
              Line @aimarketing
            </Button>
            <Button
              variant="outline"
              className="border-[#C0C0C0]/40 text-white hover:bg-white/5"
            >
              support@aimarketing.co.th
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
