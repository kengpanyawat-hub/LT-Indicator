"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Starter",
    price: "฿4,999",
    period: "เดือน",
    description: "เหมาะสำหรับผู้เริ่มต้น",
    popular: false,
    features: [
      "2 Premium Indicators",
      "Basic Support",
      "1 เดือน Updates",
      "TradingView Support",
      "Email Support",
    ],
    ctaText: "เริ่มต้นใช้งาน",
  },
  {
    name: "Pro",
    price: "฿12,999",
    period: "6 เดือน",
    description: "ยอดนิยม! ครบทุกฟีเจอร์",
    popular: true,
    features: [
      "5+ Premium Indicators",
      "Priority Support 24/7",
      "6 เดือน Updates",
      "MT4/MT5 + TradingView",
      "1-on-1 Training Session",
      "Custom Alert System",
      "Trading Signals Group",
    ],
    ctaText: "สั่งซื้อตอนนี้",
  },
  {
    name: "Elite Bundle",
    price: "฿29,999",
    period: "Lifetime",
    description: "ครบทุกอย่าง ใช้งานตลอดชีพ",
    popular: false,
    features: [
      "20+ Indicators + Bots",
      "VIP Support 24/7",
      "Lifetime Updates",
      "All Platforms",
      "1-on-1 Training + Workshop",
      "Custom Development",
      "VIP Trading Signals",
      "Affiliate Commission 30%",
      "Private Community Access",
    ],
    ctaText: "รับข้อเสนอพิเศษ",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
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
            แพ็กเกจ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              ราคาพิเศษ
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            เลือกแพ็กเกจที่เหมาะกับคุณ พร้อมรับประกันความพึงพอใจ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative ${plan.popular ? 'lg:scale-110 lg:z-10' : ''}`}
            >
              <Card className={`glass-card h-full flex flex-col relative ${
                plan.popular
                  ? 'border-red-500/60 shadow-[0_0_50px_rgba(214,31,42,0.4)]'
                  : 'hover:border-red-500/30'
              } transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <Badge variant="popular" className="px-6 py-2 text-sm font-bold shadow-lg">
                      <Sparkles className="w-4 h-4 mr-1 inline" />
                      ยอดนิยม
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500' : 'text-white'}`}>
                        {plan.price}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">/ {plan.period}</div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-4 px-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full ${plan.popular ? 'bg-gradient-to-br from-red-500 to-pink-500' : 'bg-white/10'} flex items-center justify-center flex-shrink-0`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-gray-400'}`} />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    variant={plan.popular ? "neon" : "outline"}
                    size="lg"
                    className="w-full group"
                    asChild
                  >
                    <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {plan.ctaText}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            ✓ รับประกันความพึงพอใจ 7 วัน | ✓ ชำระเงินปลอดภัย | ✓ Support 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}
