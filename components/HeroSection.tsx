"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Play, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import LiveTicker from "./LiveTicker";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Pure black background with subtle grid */}
      <div className="absolute inset-0 bg-[#000000]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Single red gradient - เอาสีอื่นออกหมด */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-red-500/10 rounded-full blur-[120px]" />

      {/* เอา orbs หลายสีออก ใช้แค่สีแดงเดียว */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Live ticker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <LiveTicker />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Premium badge - ใช้สีแดงอย่างเดียว */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center lg:justify-start"
            >
              <Badge variant="neon" className="px-4 py-2 text-sm font-bold">
                <Shield className="w-4 h-4 mr-2" />
                Trusted by 12,000+ Professional Traders
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="block text-white mb-2">
                Trade Smarter.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                Win Consistently.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl font-light"
            >
              อินดิเคเตอร์ระดับสถาบันที่ใช้โดย Professional Traders
              <br />
              <span className="text-gray-500 text-lg">
                พัฒนาด้วย AI • Backtested • Real-time Signals
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <CountdownTimer />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="neon"
                size="xl"
                className="group relative overflow-hidden h-14 px-8"
                asChild
              >
                <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10 font-bold">เริ่มต้นใช้งาน - ฟรี!</span>
                </a>
              </Button>

              <Button
                variant="outline"
                size="xl"
                className="group h-14 px-8 border-2 border-white/10 hover:border-red-500/50 hover:bg-red-500/5"
                asChild
              >
                <a href="#demo" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  <span className="font-semibold">ดูการทำงาน</span>
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators - monochrome */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-red-500 rounded-full" />
                <span>การันตีผลลัพธ์</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-red-500 rounded-full" />
                <span>รับประกัน 7 วัน</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-red-500 rounded-full" />
                <span>Support 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main dashboard container */}
            <div className="relative">
              {/* Subtle red glow - ลดความเข้มลง */}
              <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-3xl" />

              {/* Dashboard frame - ใช้สีเดียว */}
              <div className="relative glass-panel rounded-2xl p-2 border border-red-500/30">
                {/* Image container */}
                <div className="relative rounded-xl overflow-hidden bg-black/80">
                  <Image
                    src="/hero-dashboard.svg"
                    alt="Professional Trading Dashboard"
                    width={1200}
                    height={675}
                    className="relative z-10 w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Floating stats - monochrome เท่านั้น */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Win Rate</div>
                      <div className="text-xl font-bold text-white">89.3%</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -top-6 -right-6 glass-card rounded-xl p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <span className="text-lg font-bold text-red-400">150</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Signals/Day</div>
                      <div className="text-sm font-semibold text-white">Daily Alerts</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-full shadow-[0_0_40px_rgba(214,31,42,0.6)] border border-red-400/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-white">#1 Trading Tools 2024</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trading Stats - Monochrome with red accents only */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Active Traders", value: "12,547", trend: "+23.5%" },
              { label: "Win Rate", value: "89.3%", trend: "+5.2%" },
              { label: "Trust Score", value: "4.9/5", trend: "★★★★★" },
              { label: "Years in Market", value: "6+", trend: "Since 2018" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-red-500/30 transition-all group"
              >
                <div className="text-center space-y-2">
                  {/* ใช้สีขาวล้วนๆ ไม่มีสีอื่น */}
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                  {/* trend ใช้สีแดงเบาๆ */}
                  <div className="text-xs text-red-400/60 font-semibold">{stat.trend}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
