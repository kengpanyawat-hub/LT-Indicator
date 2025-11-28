import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  DollarSign,
  TrendingUp,
  Gift,
  MessageCircle,
  BarChart3,
  Clock,
  Award,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Program - รับค่าคอมมิชชั่นสูงสุด 30% | Longtrade Academy",
  description: "โปรแกรม Affiliate & IB ของ Longtrade Academy รับค่าคอมมิชชั่นสูงสุด 30% ตลอดชีพ พร้อมระบบติดตามยอดขายแบบเรียลไทม์",
};

const benefits = [
  {
    icon: DollarSign,
    title: "ค่าคอมมิชชั่นสูงสุด 30%",
    description: "รับค่าคอมมิชชั่นสูงสุด 30% จากทุกยอดขาย ตลอดชีพ ไม่มีหมดอายุ",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: Clock,
    title: "Lifetime Commission",
    description: "รับค่าคอมฯ ตลอดชีพ จากลูกค้าที่คุณแนะนำ ทุกครั้งที่เขาซื้อเพิ่ม",
    color: "text-white",
    bgColor: "bg-white/5",
  },
  {
    icon: BarChart3,
    title: "Dashboard เรียลไทม์",
    description: "ระบบติดตามยอดขาย คอมมิชชั่น และสถิติแบบเรียลไทม์",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: Gift,
    title: "โบนัสพิเศษ",
    description: "รับโบนัสเพิ่มเมื่อยอดขายถึงเป้า พร้อมของรางวัลมากมาย",
    color: "text-white",
    bgColor: "bg-white/5",
  },
  {
    icon: Users,
    title: "Marketing Materials",
    description: "รับ Banner, Landing Page, วิดีโอ และเนื้อหาสำเร็จรูปฟรี",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: Award,
    title: "Priority Support",
    description: "ทีมงานเฉพาะดูแล Affiliate พร้อมช่วยปิดการขายให้",
    color: "text-white",
    bgColor: "bg-white/5",
  },
];

const commissionTiers = [
  {
    tier: "Bronze",
    sales: "0-10 Sales/เดือน",
    commission: "15%",
    perks: [
      "ค่าคอมมิชชั่น 15%",
      "Dashboard เบื้องต้น",
      "Marketing Materials",
      "Email Support",
    ],
  },
  {
    tier: "Silver",
    sales: "11-30 Sales/เดือน",
    commission: "20%",
    popular: false,
    perks: [
      "ค่าคอมมิชชั่น 20%",
      "Advanced Dashboard",
      "Premium Marketing Materials",
      "Priority Support",
      "Training & Webinar",
    ],
  },
  {
    tier: "Gold",
    sales: "31-50 Sales/เดือน",
    commission: "25%",
    popular: true,
    perks: [
      "ค่าคอมมิชชั่น 25%",
      "Full Analytics Dashboard",
      "Custom Landing Page",
      "VIP Support 24/7",
      "1-on-1 Strategy Session",
      "โบนัสพิเศษรายเดือน",
    ],
  },
  {
    tier: "Platinum",
    sales: "51+ Sales/เดือน",
    commission: "30%",
    popular: false,
    perks: [
      "ค่าคอมมิชชั่น 30%",
      "Dedicated Account Manager",
      "Custom Development",
      "White Label Option",
      "Revenue Share ถาวร",
      "โบนัสพิเศษ + ของรางวัล",
      "เข้าร่วม Partner Retreat",
    ],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "สมัครเป็น Affiliate",
    description: "กรอกข้อมูลและสมัครผ่านทาง LINE ใช้เวลาไม่เกิน 5 นาที รอ Approve ภายใน 24 ชม.",
  },
  {
    step: "02",
    title: "รับ Affiliate Link & Materials",
    description: "รับ Tracking Link เฉพาะของคุณ พร้อม Banner, Landing Page และเนื้อหาสำเร็จรูป",
  },
  {
    step: "03",
    title: "แชร์และหาลูกค้า",
    description: "แชร์ Link ผ่านช่องทางของคุณ (Facebook, YouTube, Website, กลุ่มเทรด ฯลฯ)",
  },
  {
    step: "04",
    title: "รับค่าคอมมิชชั่น",
    description: "เมื่อลูกค้าซื้อผ่าน Link ของคุณ รับค่าคอมฯ ทันที โอนเงินทุกวันที่ 1 และ 15 ของเดือน",
  },
];

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-red-950/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="neon" className="mb-4">
              💰 Affiliate & IB Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              รับค่าคอมฯ สูงสุด{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                30% ตลอดชีพ
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              โปรแกรม Affiliate & IB ที่จ่ายค่าคอมมิชชั่นสูงที่สุด
              <br />
              พร้อมระบบติดตามยอดขายแบบเรียลไทม์ และ Support เต็มรูปแบบ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button variant="neon" size="xl" asChild>
                <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  สมัครเป็น Affiliate
                </a>
              </Button>
              <Button variant="outline" size="xl">
                ดาวน์โหลด Marketing Kit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ทำไมต้องเป็น{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                Affiliate กับเรา?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="glass-card hover:border-red-500/40 transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-xl ${benefit.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ระดับ{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                ค่าคอมมิชชั่น
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              ยิ่งขายเยอะ ยิ่งได้เยอะ ค่าคอมฯ เพิ่มอัตโนมัติ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {commissionTiers.map((tier) => (
              <Card
                key={tier.tier}
                className={`glass-card relative ${
                  tier.popular ? 'border-yellow-500/60 shadow-[0_0_50px_rgba(234,179,8,0.3)] lg:scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <Badge variant="popular" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <div className={`mx-auto mb-4 w-20 h-20 rounded-full ${tier.popular ? 'bg-gradient-to-br from-red-500 to-pink-500' : 'bg-white/10'} flex items-center justify-center`}>
                    <Award className={`w-10 h-10 ${tier.popular ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">
                    {tier.tier}
                  </CardTitle>
                  <div className="text-sm text-gray-400 mb-4">{tier.sales}</div>
                  <div className={`text-5xl font-bold ${tier.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500' : 'text-white'}`}>
                    {tier.commission}
                  </div>
                  <div className="text-sm text-gray-400">Commission Rate</div>
                </CardHeader>

                <CardContent className="space-y-3">
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 ${tier.popular ? 'text-red-400' : 'text-gray-500'} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-gray-300">{perk}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              วิธี{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                เริ่มต้น
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-red-500/50 to-transparent" />
                )}

                <Card className="glass-card hover:border-red-500/40 transition-all duration-300 h-full">
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center font-bold text-2xl text-white shadow-lg">
                    {item.step}
                  </div>

                  <CardContent className="p-8 pt-12 space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-red-950/30 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              พร้อมเริ่มต้น{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                สร้างรายได้?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              สมัครเป็น Affiliate วันนี้ เริ่มหารายได้เสริมจากการแนะนำเพื่อน
              <br />
              ไม่มีค่าใช้จ่าย สมัครฟรี!
            </p>
            <Button variant="neon" size="xl" className="mt-6" asChild>
              <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                สมัครเลย - ฟรี!
              </a>
            </Button>
            <p className="text-sm text-gray-400 pt-4">
              ✓ สมัครฟรี ไม่มีค่าใช้จ่าย | ✓ Approve ภายใน 24 ชม. | ✓ รับเงินทุกวันที่ 1 และ 15
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
