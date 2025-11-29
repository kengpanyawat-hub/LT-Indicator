"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 16,
    minutes: 31,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Red gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Offer text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-700 text-sm md:text-base tracking-wide"
          >
            🔥 ข้อเสนอสุดพิเศษนี้จะสิ้นสุดใน:
          </motion.div>

          {/* Countdown Timer - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-2 md:gap-4"
          >
            {[
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((unit, index) => (
              <div key={unit.label} className="flex items-center">
                <div className="text-center">
                  <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tabular-nums tracking-tight">
                    {String(unit.value).padStart(2, "0")}
                  </div>
                </div>
                {index < 2 && (
                  <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mx-1 md:mx-2">
                    :
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Preview Box with Red Border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-4xl mt-8"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2.5 bg-gradient-to-r from-red-500 to-purple-700 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-500" />

              {/* Main box */}
              <div className="relative rounded-2xl border-2 border-red-500/60 bg-black/40 backdrop-blur-sm p-1 overflow-hidden">
                <div className="relative rounded-xl overflow-hidden bg-black/60 aspect-video">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/y7DXDf8IQh0?autoplay=1&loop=1&controls=0&mute=1&playlist=y7DXDf8IQh0&showinfo=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8"
          >
            <Button
              variant="neon"
              size="xl"
              className="h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-bold shadow-[0_0_40px_rgba(214,31,42,0.5)] hover:shadow-[0_0_60px_rgba(214,31,42,0.7)] transition-all duration-300"
              asChild
            >
              <a href="https://line.me/ti/p/YOUR_LINE_ID" target="_blank" rel="noopener noreferrer">
                Get Promotion
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
