import type { Metadata } from "next";
import PricingSection from "@/components/home/PricingSection";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - แพ็กเกจราคาพิเศษ | Longtrade Academy",
  description: "เลือกแพ็กเกจที่เหมาะกับคุณ พร้อมรับประกันความพึงพอใจ ราคาเริ่มต้นเพียง 4,999 บาท",
};

const comparisonFeatures = [
  {
    category: "Indicators & Tools",
    features: [
      { name: "จำนวน Premium Indicators", starter: "2 ตัว", pro: "5+ ตัว", elite: "20+ ตัว + Bots" },
      { name: "GF30 Pro", starter: true, pro: true, elite: true },
      { name: "LTG Levels Pro", starter: false, pro: true, elite: true },
      { name: "Signal Bot AI", starter: false, pro: false, elite: true },
      { name: "Trend Cloud AI", starter: false, pro: true, elite: true },
      { name: "Smart Money Tracker", starter: false, pro: false, elite: true },
      { name: "Volatility Master", starter: false, pro: false, elite: true },
    ],
  },
  {
    category: "Platform Support",
    features: [
      { name: "TradingView Support", starter: true, pro: true, elite: true },
      { name: "MT4/MT5 Support", starter: false, pro: true, elite: true },
      { name: "จำนวนเครื่องที่ใช้ได้", starter: "1 เครื่อง", pro: "2 เครื่อง", elite: "5 เครื่อง" },
    ],
  },
  {
    category: "Support & Training",
    features: [
      { name: "Email Support", starter: true, pro: true, elite: true },
      { name: "Priority Support 24/7", starter: false, pro: true, elite: true },
      { name: "1-on-1 Training Session", starter: false, pro: "1 ครั้ง", elite: "Unlimited" },
      { name: "Workshop & Webinar", starter: false, pro: false, elite: true },
      { name: "VIP Support Hotline", starter: false, pro: false, elite: true },
    ],
  },
  {
    category: "Updates & Extras",
    features: [
      { name: "Updates Period", starter: "1 เดือน", pro: "6 เดือน", elite: "Lifetime" },
      { name: "Custom Alert System", starter: false, pro: true, elite: true },
      { name: "Trading Signals Group", starter: false, pro: true, elite: "VIP Group" },
      { name: "Custom Development", starter: false, pro: false, elite: true },
      { name: "Affiliate Commission", starter: "0%", pro: "15%", elite: "30%" },
      { name: "Private Community Access", starter: false, pro: false, elite: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-red-950/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              แพ็กเกจ{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                ราคาพิเศษ
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              เลือกแพ็กเกจที่เหมาะกับคุณ พร้อมรับประกันความพึงพอใจ 7 วัน
              <br />
              ไม่มีค่าใช้จ่ายซ่อนเร้น ชำระครั้งเดียว ใช้งานได้ทันที
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingSection />

      {/* Detailed Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              เปรียบเทียบแพ็กเกจ{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                โดยละเอียด
              </span>
            </h2>

            <div className="space-y-8">
              {comparisonFeatures.map((section) => (
                <Card key={section.category} className="glass-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">
                      {section.category}
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left text-gray-400 font-semibold pb-4 pr-4">Feature</th>
                            <th className="text-center text-gray-400 font-semibold pb-4 px-4">Starter</th>
                            <th className="text-center text-gray-400 font-semibold pb-4 px-4">Pro</th>
                            <th className="text-center text-gray-400 font-semibold pb-4 px-4">Elite</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.features.map((feature, index) => (
                            <tr key={index} className="border-b border-white/5">
                              <td className="py-4 pr-4 text-gray-300">{feature.name}</td>
                              <td className="py-4 px-4 text-center">
                                {typeof feature.starter === 'boolean' ? (
                                  feature.starter ? (
                                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-600 mx-auto" />
                                  )
                                ) : (
                                  <span className="text-gray-300">{feature.starter}</span>
                                )}
                              </td>
                              <td className="py-4 px-4 text-center">
                                {typeof feature.pro === 'boolean' ? (
                                  feature.pro ? (
                                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-600 mx-auto" />
                                  )
                                ) : (
                                  <span className="text-gray-300">{feature.pro}</span>
                                )}
                              </td>
                              <td className="py-4 px-4 text-center">
                                {typeof feature.elite === 'boolean' ? (
                                  feature.elite ? (
                                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                                  ) : (
                                    <X className="w-5 h-5 text-gray-600 mx-auto" />
                                  )
                                ) : (
                                  <span className="text-gray-300">{feature.elite}</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              คำถาม{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                เกี่ยวกับราคา
              </span>
            </h2>
            <div className="glass-panel rounded-2xl p-8 text-left space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">จ่ายครั้งเดียวหรือรายเดือน?</h3>
                <p className="text-gray-400">
                  จ่ายครั้งเดียว ไม่มีค่าต่ออายุรายเดือน แพ็กเกจ Starter และ Pro จะมีระยะเวลาอัปเดต Elite Bundle ให้อัปเดตฟรีตลอดชีพ
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">อัปเกรดแพ็กเกจภายหลังได้ไหม?</h3>
                <p className="text-gray-400">
                  ได้ครับ สามารถอัปเกรดได้ตลอดเวลา โดยจ่ายเพิ่มเฉพาะส่วนต่างของราคา ติดต่อทีมงานทาง LINE เพื่อขออัปเกรด
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">มีส่วนลดสำหรับนักเรียน/นักศึกษาไหม?</h3>
                <p className="text-gray-400">
                  มีครับ แสดงบัตรนักเรียน/นักศึกษาเพื่อรับส่วนลดพิเศษ 10% ติดต่อทีมงานผ่าน LINE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
