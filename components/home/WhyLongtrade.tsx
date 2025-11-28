"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Activity, Cpu, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "Lifetime Access",
    description: "เข้าถึงอินดิเคเตอร์ระดับพรีเมียมตลอดชีพ พร้อมอัปเดตฟรีทุกเวอร์ชั่น",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Cpu,
    title: "Powerful Bots",
    description: "ระบบเทรดอัตโนมัติที่ทำงานแทนคุณ 24/7 ด้วย AI และอัลกอริทึมขั้นสูง",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Activity,
    title: "30+ Premium Features",
    description: "ฟีเจอร์ระดับมืออาชีพกว่า 30+ รายการ ครอบคลุมทุกสไตล์การเทรด",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: Users,
    title: "10,000+ Traders Trust Us",
    description: "เทรดเดอร์กว่า 10,000+ คนทั่วโลกไว้วางใจและใช้งานจริง",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
];

export default function WhyLongtrade() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ทำไมต้อง{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              Longtrade?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            เครื่องมือเทรดที่ครบครัน ใช้งานง่าย และให้ผลลัพธ์ที่เหนือกว่า
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card hover:border-red-500/40 transition-all duration-300 h-full group hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
