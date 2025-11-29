
'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import CountdownTimer from '@/components/CountdownTimer';

export default function HeroSection() {
  return (
    <section className="bg-black text-white pt-32 pb-20 text-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] z-0" />
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black/80 to-black" />

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4"
            >
                ปลดล็อกศักยภาพการทำกำไรสูงสุด
                <br />
                กับ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700">Longtrade Academy</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-lg md:text-xl max-w-3xl mx-auto mb-4 text-white/80"
            >
                แพลตฟอร์มช่วยเทรดที่เทรดเดอร์มืออาชีพไว้วางใจ
            </motion.p>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
            >
                <span className="text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                    อันดับ 1 ของไทย
                </span>
            </motion.div>

            {/* Countdown Timer */}
            <CountdownTimer />

            {/* Video Player Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-4xl mx-auto mt-12"
            >
                {/* Wrapper for the glowing border effect */}
                <div className="relative group">
                    <div className="absolute -inset-2.5 bg-gradient-to-r from-red-500 to-purple-600 rounded-3xl blur-3xl opacity-80 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                    <div className="relative bg-black rounded-2xl p-1">
                        <div className="aspect-video relative">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-xl"
                                src="https://www.youtube.com/embed/y7DXDf8IQh0?autoplay=1&loop=1&controls=0&mute=1&playlist=y7DXDf8IQh0&showinfo=0&rel=0"
                                title="Longtrade Academy Showcase"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12"
            >
                 <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full text-xl h-auto shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all transform hover:scale-105"
                 >
                  <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                    รับโปรโมชั่นสุดพิเศษ
                  </a>
                </Button>
            </motion.div>
        </div>
    </section>
  );
}
