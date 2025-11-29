'use client';

import type { Metadata } from 'next';
import PricingSection from '@/components/home/PricingSection';

// Metadata can't be dynamically generated in a client component,
// so we'll handle this at the page level or move it to a layout if needed.
// For now, we'll keep it static here.
// export const metadata: Metadata = {
//   title: "Pricing | Longtrade Academy",
//   description: "Choose the perfect plan for your trading journey. Lifetime and subscription options available.",
// };

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                เลือก<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-600">แพ็กเกจที่ใช่</span>สำหรับคุณ
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                ไม่ว่าคุณจะเป็นเทรดเดอร์มืออาชีพหรือเพิ่งเริ่มต้น เรามีแพ็กเกจที่ตอบโจทย์ทุกความต้องการของคุณ
                </p>
            </div>
        </div>
      <PricingSection />
    </div>
  );
}
