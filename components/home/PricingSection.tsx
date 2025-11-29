'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';

// Define a specific type for the billing cycle
type BillingCycle = 'monthly' | 'yearly';

const lifetimePlans = [
  {
    name: 'Standard',
    price: '$999',
    description: 'เข้าถึงฟีเจอร์หลักทั้งหมด เหมาะสำหรับผู้เริ่มต้น',
    features: [
      'ชุดอินดิเคเตอร์หลัก 4 ตัว',
      'กลยุทธ์เทรดรายสัปดาห์ 5 ครั้ง',
      'บทวิเคราะห์ตลาดรายวันจากผู้เชี่ยวชาญ',
      'สิทธิ์ในการเข้าถึงกลุ่ม Discord',
    ],
  },
  {
    name: 'Premium',
    price: '$1,699',
    description: 'เครื่องมือและฟีเจอร์ที่ทรงพลังยิ่งขึ้นสำหรับเทรดเดอร์มืออาชีพ',
    features: [
      'ทุกอย่างที่มีในแพ็กเกจ Standard',
      'อินดิเคเตอร์เสริม 2 ตัว พร้อมฟีเจอร์ใหม่กว่า 12+ รายการ',
      'อินดิเคเตอร์จาก Influencer ชื่อดัง',
      'คลาสเรียน TA Plus รายสัปดาห์',
      'สร้างสัญญาณเทรดของคุณเอง',
    ],
    isPopular: true,
  },
  {
    name: 'Ultimate',
    price: '$2,499',
    description: 'ชุดเครื่องมือที่สมบูรณ์แบบที่สุดสำหรับเทรดเดอร์ระดับโปร',
    features: [
      'ทุกอย่างที่มีในแพ็กเกจ Premium',
      'เครื่องมือสร้างกลยุทธ์อัตโนมัติ (PA Builder)',
      'เครื่องมือสแกนหาหุ้น (ChartPrime+ Screener)',
      'เข้าถึงกลยุทธ์ AI ที่มี Win-rate สูงสุด',
      'AI อัจฉริยะช่วยเพิ่มประสิทธิภาพในทุกการเทรด',
    ],
  },
];

const subscriptionPlans = {
  monthly: [
    {
      name: 'Pro',
      price: '$33.50',
      originalPrice: '$67.00',
      description: 'ChartPrime Pro มีทุกสิ่งที่คุณต้องการเพื่อการเทรดที่ชาญฉลาดและมีประสิทธิภาพ',
      features: [
        'ชุดอินดิเคเตอร์หลัก 4 ตัว',
        'สัญญาณเทรดแบบเรียลไทม์พร้อมระดับ TP/SL',
        'คลาสกลยุทธ์เทรด 5 ครั้งต่อสัปดาห์',
        'บทวิเคราะห์ตลาดรายวันจากเทรดเดอร์ผู้เชี่ยวชาญ',
        'สิทธิ์ในการเข้าถึงกลุ่มเทรดส่วนตัว',
        'อัปเดตฟีเจอร์ใหม่อย่างสม่ำเสมอ',
      ],
    },
    {
      name: 'Pro Plus',
      price: '$58.50',
      originalPrice: '$117.00',
      description: 'ChartPrime Plus เพิ่มฟีเจอร์ที่เหนือกว่าสำหรับผู้ที่ต้องการประสิทธิภาพสูงสุด',
      features: [
        'ทุกอย่างที่มีใน ChartPrime Pro',
        'อินดิเคเตอร์พิเศษ 2 ตัว พร้อมฟีเจอร์ใหม่ 12+ รายการ',
        'อินดิเคเตอร์จาก Influencer ชื่อดังกว่า 10+ ตัว',
        'คลาสเรียน TA Plus รายสัปดาห์',
        'สร้างสัญญาณเทรดเฉพาะตัวของคุณ',
        'สิทธิ์ในการเข้าถึงอินดิเคเตอร์ใหม่ๆ ก่อนใคร',
      ],
      isPopular: true,
    },
  ],
  yearly: [
    {
      name: 'Pro',
      price: '$335',
      originalPrice: '$670',
      description: 'ChartPrime Pro มีทุกสิ่งที่คุณต้องการเพื่อการเทรดที่ชาญฉลาดและมีประสิทธิภาพ',
      features: [
        'ชุดอินดิเคเตอร์หลัก 4 ตัว',
        'สัญญาณเทรดแบบเรียลไทม์พร้อมระดับ TP/SL',
        'คลาสกลยุทธ์เทรด 5 ครั้งต่อสัปดาห์',
        'บทวิเคราะห์ตลาดรายวันจากเทรดเดอร์ผู้เชี่ยวชาญ',
        'สิทธิ์ในการเข้าถึงกลุ่มเทรดส่วนตัว',
        'อัปเดตฟีเจอร์ใหม่อย่างสม่ำเสมอ',
      ],
    },
    {
      name: 'Pro Plus',
      price: '$585',
      originalPrice: '$1170',
      description: 'ChartPrime Plus เพิ่มฟีเจอร์ที่เหนือกว่าสำหรับผู้ที่ต้องการประสิทธิภาพสูงสุด',
      features: [
        'ทุกอย่างที่มีใน ChartPrime Pro',
        'อินดิเคเตอร์พิเศษ 2 ตัว พร้อมฟีเจอร์ใหม่ 12+ รายการ',
        'อินดิเคเตอร์จาก Influencer ชื่อดังกว่า 10+ ตัว',
        'คลาสเรียน TA Plus รายสัปดาห์',
        'สร้างสัญญาณเทรดเฉพาะตัวของคุณ',
        'สิทธิ์ในการเข้าถึงอินดิเคเตอร์ใหม่ๆ ก่อนใคร',
      ],
      isPopular: true,
    },
  ],
};

export default function PricingSection() {
  // Apply the specific type to the state
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Part 1: Lifetime Plans */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">แพ็กเกจตลอดชีพ</h2>
          <p className="text-white/70 mt-4">จ่ายครั้งเดียว เข้าใช้งานได้ตลอดชีพ</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {lifetimePlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`bg-[#1C1C1C] border ${plan.isPopular ? 'border-purple-500' : 'border-white/10'} rounded-2xl h-full flex flex-col`}>
                <CardHeader className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    {plan.isPopular && <span className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm">ยอดนิยม</span>}
                  </div>
                  <p className="text-5xl font-bold text-white mb-2">{plan.price}</p>
                  <p className="text-sm text-white/60 mb-4">{plan.description}</p>
                </CardHeader>

                <CardContent className="flex-1 space-y-4 p-6">
                  {plan.features.map((feature, i) => (
                     <div key={i} className="flex items-start">
                     <CheckCircle className="w-5 h-5 mr-3 text-red-500 mt-1 flex-shrink-0" />
                     <span className="text-white/80">{feature}</span>
                   </div>
                  ))}
                </CardContent>

                <CardFooter className="p-6">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg text-lg">
                    เริ่มต้นใช้งาน
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Part 2: Subscription Plans */}
        <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-2">แพ็กเกจรายเดือน/รายปี <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">ลด 50%</span> สำหรับการชำระเงินครั้งแรก</h2>
            <CountdownTimer />
        </div>

        <div className="flex justify-center my-8">
          <div className="bg-[#1C1C1C] p-1 rounded-full flex items-center space-x-2">
            <Button onClick={() => setBillingCycle('monthly')} className={`${billingCycle === 'monthly' ? 'bg-gradient-to-r from-red-500 to-purple-500' : 'bg-transparent'} text-white rounded-full px-6 py-2`}>รายเดือน</Button>
            <Button onClick={() => setBillingCycle('yearly')} className={`${billingCycle === 'yearly' ? 'bg-gradient-to-r from-red-500 to-purple-500' : 'bg-transparent'} text-white rounded-full px-6 py-2`}>รายปี</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subscriptionPlans[billingCycle].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
               <Card className={`bg-[#1C1C1C] border ${plan.isPopular ? 'border-red-500' : 'border-white/10'} rounded-2xl h-full flex flex-col`}>
                <CardHeader className="p-8">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                        {plan.isPopular && <Image src="/25.png" alt="Popular" width={32} height={32} />}
                    </div>
                    <div className="flex items-baseline space-x-2 mt-4">
                        <p className="text-5xl font-bold text-white">{plan.price}<span className="text-lg font-medium text-white/60">/เดือน</span></p>
                        <p className="text-2xl font-medium text-white/40 line-through">{plan.originalPrice}</p>
                        <span className="bg-gradient-to-r from-red-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-md">ลด 50%</span>
                    </div>
                    <p className="text-sm text-white/60 mt-1">{`ชำระ ${plan.price} ครั้งแรก, หลังจากนั้น ${plan.originalPrice}/เดือน`}</p>
                    <p className="text-white/80 mt-4">{plan.description}</p>
                </CardHeader>

                <CardContent className="flex-1 space-y-4 px-8 pb-8">
                    <p className="font-semibold text-white">สิ่งที่คุณจะได้รับ:</p>
                    <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 mr-3 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-white/80">{feature}</span>
                        </li>
                    ))}
                    </ul>
                     <div className="text-center mt-6 pt-6 border-t border-white/10">
                        <p className="text-6xl font-bold text-white tracking-widest">BF50</p>
                        <p className="text-white/60">โค้ดส่วนลด 50%</p>
                    </div>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                    <Button className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold py-4 rounded-lg text-lg hover:from-red-500 hover:to-purple-700">
                        {`สมัครแพ็กเกจ ${plan.name}`}
                    </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-lg font-semibold text-white mb-4">การชำระเงินที่ปลอดภัย</h3>
          <div className="flex justify-center items-center space-x-4 flex-wrap">
            <Image src="/SSL.svg" alt="SSL" width={40} height={24} />
            <Image src="/amex.svg" alt="Amex" width={40} height={24} />
            <Image src="/visa.svg" alt="Visa" width={50} height={24} />
            <Image src="/mastercard.svg" alt="Mastercard" width={40} height={24} />
            <Image src="/paypal.svg" alt="Paypal" width={60} height={24} />
            <Image src="/stripe.svg" alt="Stripe" width={60} height={24} />
            <Image src="/affirm.svg" alt="Affirm" width={60} height={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
