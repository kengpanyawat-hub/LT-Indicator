"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "คุณสมชาย ว.",
    role: "Day Trader",
    avatar: "/user-1.svg",
    rating: 5,
    comment: "ใช้ GF30 Pro มา 3 เดือน ทำกำไรได้สม่ำเสมอมาก ทีมงานให้คำปรึกษาดีมากครับ แนะนำเลย!",
  },
  {
    name: "คุณปรียา ส.",
    role: "Swing Trader",
    avatar: "/user-2.svg",
    rating: 5,
    comment: "ตอนแรกลังเลว่าจะซื้อไหม แต่พอได้ใช้จริงคุ้มค่ามากๆ Signal แม่นมาก ทำกำไรคืนทุนใน 2 สัปดาห์",
  },
  {
    name: "คุณอนุชา ก.",
    role: "Professional Trader",
    avatar: "/user-3.svg",
    rating: 5,
    comment: "ใช้ระบบ Bot มา 6 เดือนแล้ว ทำกำไรให้อัตโนมัติตอนนอนหลับได้ด้วย ดีกว่าที่คิด ขอบคุณทีม Longtrade",
  },
];

const stats = [
  { label: "Traders ทั่วโลก", value: "10,000+" },
  { label: "Rating เฉลี่ย", value: "4.8/5" },
  { label: "Success Rate", value: "75%+" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-red-500/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            รีวิวจาก{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              ผู้ใช้งานจริง
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            เทรดเดอร์กว่า 10,000+ คนเชื่อมั่นและใช้งานจริง
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="glass-card hover:border-red-500/40 transition-all duration-300 h-full">
                <CardContent className="p-6 space-y-4">
                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-300 leading-relaxed italic">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-red-500/30">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
