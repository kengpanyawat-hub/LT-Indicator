"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const indicators = [
  {
    name: "GF30 Pro",
    image: "/indicator-gf30.svg",
    badge: "Most Popular",
    badgeVariant: "popular" as const,
    description: "อินดิเคเตอร์หาจุด Entry/Exit ที่แม่นยำสูง เหมาะสำหรับ Scalping และ Day Trading",
    features: [
      "Smart Entry/Exit Signals",
      "Multi-Timeframe Analysis",
      "Custom Alert System",
      "Win Rate 75%+",
      "Support MT4/MT5",
    ],
  },
  {
    name: "LTG Levels Pro",
    image: "/indicator-ltg-levels.svg",
    badge: "New",
    badgeVariant: "neon" as const,
    description: "ระบบหา Support/Resistance อัตโนมัติ พร้อม Price Action Analysis",
    features: [
      "Auto S/R Detection",
      "Price Action Patterns",
      "Volume Profile",
      "Order Block Zones",
      "Fibonacci Auto-Draw",
    ],
  },
  {
    name: "Signal Bot AI",
    image: "/indicator-bot.svg",
    badge: "Best for Auto Trading",
    badgeVariant: "neon" as const,
    description: "ระบบเทรดอัตโนมัติด้วย AI รองรับทั้ง Forex, Gold, Crypto",
    features: [
      "24/7 Auto Trading",
      "AI-Powered Decisions",
      "Risk Management",
      "Multi-Asset Support",
      "Real-time Monitoring",
    ],
  },
];

export default function IndicatorShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            อินดิเคเตอร์{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              ยอดนิยม
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            เครื่องมือเทรดที่ทรงพลัง พัฒนาโดยทีมมืออาชีพ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="glass-card h-full flex flex-col group hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(214,31,42,0.3)]">
                <CardHeader className="relative">
                  <Badge variant={indicator.badgeVariant} className="absolute top-4 right-4 z-10">
                    {indicator.badge}
                  </Badge>
                  <div className="relative rounded-lg overflow-hidden bg-black/40 p-4">
                    <Image
                      src={indicator.image}
                      alt={indicator.name}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <CardTitle className="text-2xl text-white group-hover:text-red-400 transition-colors">
                    {indicator.name}
                  </CardTitle>
                  <p className="text-gray-400 leading-relaxed">
                    {indicator.description}
                  </p>

                  <div className="space-y-2 pt-4">
                    {indicator.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href="/indicators">
                      ดูรายละเอียด
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="neon" className="flex-1" asChild>
                    <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      สั่งซื้อ
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild className="group">
            <Link href="/indicators">
              ดูอินดิเคเตอร์ทั้งหมด
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
