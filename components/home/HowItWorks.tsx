"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MousePointer, MessageCircle, Settings } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "เลือก Indicator / Package",
    description: "เลือกอินดิเคเตอร์หรือแพ็กเกจที่ตรงกับสไตล์การเทรดของคุณ เราม แพ็กเกจให้เลือกหลากหลาย",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "ติดต่อทีมงานผ่าน LINE",
    description: "แอดไลน์เพื่อสั่งซื้อและรับคำปรึกษาจากทีมงาน พร้อมรับโปรโมชั่นพิเศษ",
  },
  {
    number: "03",
    icon: Settings,
    title: "ติดตั้ง + เข้าอบรมใช้งาน",
    description: "ทีมงานช่วยติดตั้งและสอนใช้งานจนเชี่ยวชาญ พร้อม Support ตลอดการใช้งาน",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            วิธีการ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-700">
              เริ่มต้นใช้งาน
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            เพียง 3 ขั้นตอนง่ายๆ ก็เริ่มเทรดกับเครื่องมือระดับโปรได้ทันที
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-red-500/50 to-transparent" />
              )}

              <Card className="glass-card hover:border-red-500/40 transition-all duration-300 h-full relative group">
                {/* Step number badge */}
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-700 flex items-center justify-center font-bold text-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-red-500" />
                  </div>

                  <h3 className="text-2xl font-semibold text-white group-hover:text-red-500 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline visualization for mobile */}
        <div className="md:hidden flex justify-center mt-12 space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className="w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
