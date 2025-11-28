"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">LONGTRADE ACADEMY</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 text-glow">
                Premium Trading Indicators
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              อินดิเคเตอร์และระบบช่วยเทรดระดับมืออาชีพ สำหรับเทรดเดอร์ที่ต้องการความแม่นยำสูงสุด
              <br />
              รองรับ MT4/MT5 และ TradingView พร้อมอัปเดตตลอดชีพ
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
                className="flex-1 sm:flex-none group relative overflow-hidden"
                asChild
              >
                <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  <span className="relative z-10">สั่งซื้อผ่าน LINE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="xl"
                className="flex-1 sm:flex-none group"
                asChild
              >
                <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-5 w-5" />
                  สั่งซื้อผ่าน Facebook
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500">10K+</div>
                <div className="text-sm text-gray-400 mt-1">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500">20+</div>
                <div className="text-sm text-gray-400 mt-1">Premium Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500">4.8★</div>
                <div className="text-sm text-gray-400 mt-1">User Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-panel rounded-2xl p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />
              <Image
                src="/hero-dashboard.svg"
                alt="Trading Dashboard Preview"
                width={1200}
                height={675}
                className="relative z-10 rounded-lg"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
              className="absolute -top-4 -right-4 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-full shadow-[0_0_30px_rgba(214,31,42,0.6)] border border-red-500/50"
            >
              <div className="text-sm font-bold text-white">🔥 Most Popular</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
