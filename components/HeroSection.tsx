"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Facebook, Play, Shield, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import LiveTicker from "./LiveTicker";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced background with grid */}
      <div className="absolute inset-0 bg-[#000000]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black/50 to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-red-500/20 rounded-full blur-[120px] animate-pulse" />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Premium badge */}
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
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-600 animate-gradient">
                Win Consistently.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light"
            >
              อินดิเคเตอร์ระดับสถาบันที่ใช้โดย Professional Traders
              <br />
              <span className="text-gray-400 text-lg">
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
                className="group relative overflow-hidden h-14 px-8 shadow-[0_0_40px_rgba(214,31,42,0.4)] hover:shadow-[0_0_60px_rgba(214,31,42,0.6)]"
                asChild
              >
                <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10 font-bold">เริ่มต้นใช้งาน - ฟรี!</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="xl"
                className="group h-14 px-8 border-2 border-white/20 hover:border-red-500/50 hover:bg-red-500/5"
                asChild
              >
                <a href="#demo" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  <span className="font-semibold">ดูการทำงาน</span>
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-sm"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>การันตีผลลัพธ์</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span>รับประกัน 7 วัน</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MessageCircle className="w-4 h-4 text-blue-400" />
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
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-2xl blur-3xl" />

              {/* Dashboard frame */}
              <div className="relative glass-panel rounded-2xl p-2 border-2 border-red-500/30 shadow-[0_0_80px_rgba(214,31,42,0.3)]">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-pink-500/5 rounded-2xl" />

                {/* Image container */}
                <div className="relative rounded-xl overflow-hidden bg-black/50">
                  <Image
                    src="/hero-dashboard.svg"
                    alt="Professional Trading Dashboard"
                    width={1200}
                    height={675}
                    className="relative z-10 w-full h-auto"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Floating stats cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-lg border border-green-500/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Win Rate</div>
                      <div className="text-xl font-bold text-green-400">89.3%</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -top-6 -right-6 glass-card rounded-xl p-4 shadow-lg border border-blue-500/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Signals/Day</div>
                      <div className="text-xl font-bold text-blue-400">150+</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-full shadow-[0_0_40px_rgba(214,31,42,0.8)] border border-red-400/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-white">🔥 #1 Trading Tools 2024</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trading Stats - Below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Active Traders", value: "12,547", trend: "+23.5%", color: "blue" },
              { label: "Win Rate", value: "89.3%", trend: "+5.2%", color: "green" },
              { label: "Trust Score", value: "4.9/5", trend: "★★★★★", color: "yellow" },
              { label: "Years in Market", value: "6+", trend: "Since 2018", color: "purple" },
            ].map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover:border-red-500/40 transition-all group">
                <div className="text-center space-y-2">
                  <div className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-400`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="text-xs text-green-400 font-semibold">{stat.trend}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
