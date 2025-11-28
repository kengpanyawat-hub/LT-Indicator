import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check, TrendingUp, Zap, Target, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Indicators - Premium Trading Tools | Longtrade Academy",
  description: "อินดิเคเตอร์และเครื่องมือเทรดระดับมืออาชีพ รองรับ MT4/MT5 และ TradingView พร้อม Bot Trading อัตโนมัติ",
};

const allIndicators = [
  {
    id: 1,
    name: "GF30 Pro",
    category: "Scalping & Day Trading",
    image: "/indicator-gf30.svg",
    badge: "Most Popular",
    badgeVariant: "popular" as const,
    icon: TrendingUp,
    description: "อินดิเคเตอร์หาจุด Entry/Exit ที่แม่นยำสูง เหมาะสำหรับ Scalping และ Day Trading ทุก Timeframe",
    features: [
      "Smart Entry/Exit Signals with 75%+ Win Rate",
      "Multi-Timeframe Analysis (M1-H4)",
      "Custom Alert System (Sound + Push Notification)",
      "Trend Detection & Reversal Alerts",
      "Support/Resistance Auto-Draw",
      "Support MT4/MT5 + TradingView",
      "Lifetime Updates",
    ],
    platforms: ["MT4", "MT5", "TradingView"],
    price: "฿9,999",
  },
  {
    id: 2,
    name: "LTG Levels Pro",
    category: "Support & Resistance",
    image: "/indicator-ltg-levels.svg",
    badge: "New",
    badgeVariant: "neon" as const,
    icon: Target,
    description: "ระบบหา Support/Resistance อัตโนมัติที่แม่นยำที่สุด พร้อม Price Action Analysis และ Order Block Zones",
    features: [
      "Auto S/R Detection with High Accuracy",
      "Price Action Pattern Recognition",
      "Volume Profile Analysis",
      "Order Block & Supply/Demand Zones",
      "Fibonacci Auto-Draw (Retracement & Extension)",
      "Market Structure Analysis",
      "Compatible with All Assets (Forex, Gold, Crypto)",
    ],
    platforms: ["MT4", "MT5", "TradingView"],
    price: "฿8,999",
  },
  {
    id: 3,
    name: "Signal Bot AI",
    category: "Auto Trading",
    image: "/indicator-bot.svg",
    badge: "Best for Auto Trading",
    badgeVariant: "neon" as const,
    icon: Bot,
    description: "ระบบเทรดอัตโนมัติด้วย AI ที่ทำงาน 24/7 พร้อม Risk Management และ Money Management แบบครบวงจร",
    features: [
      "24/7 Fully Automated Trading",
      "AI-Powered Decision Making",
      "Advanced Risk Management System",
      "Multi-Asset Support (Forex, Gold, Crypto, Stocks)",
      "Real-time Performance Monitoring",
      "Customizable Trading Strategy",
      "Backtesting & Optimization Tools",
    ],
    platforms: ["MT4", "MT5"],
    price: "฿15,999",
  },
  {
    id: 4,
    name: "Trend Cloud AI",
    category: "Trend Following",
    image: "/indicator-gf30.svg",
    badge: null,
    badgeVariant: null,
    icon: Zap,
    description: "อินดิเคเตอร์ตามเทรนด์ที่ใช้ AI วิเคราะห์ทิศทางตลาด พร้อมระบบกรองสัญญาณ False Signal",
    features: [
      "AI Trend Direction Analysis",
      "Cloud-Based Trend Visualization",
      "False Signal Filter",
      "Multi-Timeframe Confirmation",
      "Momentum & Strength Indicator",
      "Suitable for Swing & Position Trading",
      "Email + Mobile Alert",
    ],
    platforms: ["MT4", "MT5", "TradingView"],
    price: "฿7,999",
  },
  {
    id: 5,
    name: "Smart Money Tracker",
    category: "Institutional Flow",
    image: "/indicator-ltg-levels.svg",
    badge: null,
    badgeVariant: null,
    icon: Target,
    description: "ติดตาม Smart Money และ Institutional Order Flow เพื่อเทรดตามสถาบันการเงินใหญ่",
    features: [
      "Smart Money Detection Algorithm",
      "Institutional Order Flow Tracking",
      "Whale Movement Alerts",
      "Accumulation/Distribution Zones",
      "Market Maker Levels",
      "COT (Commitment of Traders) Integration",
      "Real-time Data Feed",
    ],
    platforms: ["MT4", "MT5"],
    price: "฿12,999",
  },
  {
    id: 6,
    name: "Volatility Master",
    category: "Volatility Trading",
    image: "/indicator-bot.svg",
    badge: null,
    badgeVariant: null,
    icon: Zap,
    description: "วิเคราะห์ Volatility และหาโอกาสเทรดในช่วง Breakout พร้อมระบบ Risk/Reward Calculator",
    features: [
      "Advanced Volatility Analysis",
      "Breakout Detection System",
      "ATR-Based Stop Loss/Take Profit",
      "Risk/Reward Auto Calculator",
      "Session Volatility Comparison",
      "News Impact Indicator",
      "Best for Scalping in High Volatility",
    ],
    platforms: ["MT4", "MT5", "TradingView"],
    price: "฿6,999",
  },
];

export default function IndicatorsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-red-950/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              อินดิเคเตอร์{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                ระดับมืออาชีพ
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              เครื่องมือเทรดครบครัน พัฒนาโดยทีมงานมืออาชีพ
              <br />
              รองรับทุกแพลตฟอร์ม MT4, MT5 และ TradingView
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Lifetime Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>รับประกัน 7 วัน</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicators Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allIndicators.map((indicator) => (
              <Card key={indicator.id} className="glass-card group hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(214,31,42,0.3)]">
                <CardHeader className="relative">
                  {indicator.badge && (
                    <Badge variant={indicator.badgeVariant!} className="absolute top-4 right-4 z-10">
                      {indicator.badge}
                    </Badge>
                  )}

                  <div className="flex items-start gap-6">
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-black/40 p-2">
                      <Image
                        src={indicator.image}
                        alt={indicator.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <indicator.icon className="w-6 h-6 text-red-400" />
                        <Badge variant="outline" className="text-xs">
                          {indicator.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-white group-hover:text-red-400 transition-colors">
                        {indicator.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                        {indicator.price}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    {indicator.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-white">ฟีเจอร์หลัก:</div>
                    {indicator.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <span className="text-sm text-gray-400">รองรับ:</span>
                    {indicator.platforms.map((platform) => (
                      <Badge key={platform} variant="secondary" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="neon" className="w-full group" asChild>
                    <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      สั่งซื้อผ่าน LINE
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ซื้อครบทุกอินดิเคเตอร์{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                ในราคาพิเศษ!
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              แพ็กเกจ Elite Bundle รวมอินดิเคเตอร์ทั้งหมด + Bot Trading
              <br />
              <span className="text-2xl font-bold text-red-400">เพียง ฿29,999</span>
              {" "}(ประหยัดกว่า 40%)
            </p>
            <Button variant="neon" size="xl" asChild>
              <a href="/#pricing">
                ดูแพ็กเกจทั้งหมด
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
