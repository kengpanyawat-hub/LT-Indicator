"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-black to-black" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glass panel container */}
          <div className="glass-panel rounded-3xl p-8 md:p-12 text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600/20 to-red-600/20 border border-red-500/30 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                พิเศษ! รับส่วนลดสูงสุด 40%
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                พร้อมเริ่มต้น
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-700 text-glow">
                  เทรดอย่างมืออาชีพ?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                เข้าร่วมกับเทรดเดอร์กว่า 10,000+ คนที่เลือกใช้ Longtrade Academy
                <br />
                รับส่วนลดพิเศษและโปรโมชั่นสุดคุ้มเฉพาะวันนี้!
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 max-w-2xl mx-auto pt-4"
            >
              {/* LINE Button */}
              <Button
                variant="neon"
                size="xl"
                className="w-full h-16 text-lg font-bold group relative overflow-hidden shadow-[0_0_30px_rgba(214,31,42,0.4)]"
                asChild
              >
                <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6 relative z-10" />
                  <span className="relative z-10">สั่งซื้อผ่าน LINE - รับส่วนลดทันที!</span>
                </a>
              </Button>

              {/* Facebook Button */}
              <Button
                variant="outline"
                size="xl"
                className="w-full h-16 text-lg font-bold group border-2"
                asChild
              >
                <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-3 h-6 w-6" />
                  สั่งซื้อผ่าน Facebook
                </a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <span>ชำระเงินปลอดภัย 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <span>รับประกันความพึงพอใจ 7 วัน</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                <span>Support 24/7</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
