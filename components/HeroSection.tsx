"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Infinity, Zap, Sparkles, Star } from "lucide-react";
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
            className="text-gray-400 text-sm md:text-base tracking-wide"
          >
            Black Friday offer ends in
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-500" />

              {/* Main box */}
              <div className="relative rounded-2xl border-2 border-red-500/60 bg-black/40 backdrop-blur-sm p-1 overflow-hidden">
                {/* Dashboard preview */}
                <div className="relative rounded-xl overflow-hidden bg-black/60 aspect-video">
                  <Image
                    src="/hero-dashboard.svg"
                    alt="Professional Trading Dashboard"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover opacity-90"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges - 3 Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-8"
          >
            {[
              { icon: Infinity, text: "Lifetime access to top-tier indicators" },
              { icon: Zap, text: "Powerful bots that trade for you" },
              { icon: Sparkles, text: "50+ premium features" },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-red-500/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-red-400 group-hover:text-red-300 transition-colors" />
                <span className="text-xs md:text-sm text-gray-300 font-medium whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Social Proof - Trusted by traders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center gap-3 mt-6"
          >
            {/* Avatar stack */}
            <div className="flex items-center -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
                >
                  <Image
                    src={`/user-${i > 3 ? 1 : i}.svg`}
                    alt={`Trader ${i}`}
                    width={48}
                    height={48}
                    className="w-full h-full rounded-full"
                  />
                </div>
              ))}
            </div>

            {/* Trust text and rating */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-red-500 text-red-500"
                  />
                ))}
              </div>
              <div className="text-sm md:text-base text-gray-400">
                <span className="text-white font-semibold">Trusted by 100,000+</span> traders
              </div>
              <div className="text-xs text-gray-500">4.8 star user rating</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
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
