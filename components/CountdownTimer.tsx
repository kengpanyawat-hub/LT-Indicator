'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// =====================
// Types
// =====================
type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

type NumberBoxProps = {
  label: string;
  value: number;
};

// =====================
// Single number box
// =====================
const NumberBox = ({ label, value }: NumberBoxProps) => {
  const display = value.toString().padStart(2, '0');

  return (
    <motion.div
      className="flex flex-col items-center mx-1 md:mx-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3, scale: 1.03 }}
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-white/15 bg-black/40 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.8)] flex items-center justify-center">
        {/* glow layer */}
        <span className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-red-500/10 opacity-80" />
        {/* bottom glow */}
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-12 bg-red-500/40 blur-2xl" />
        {/* number */}
        <span className="relative z-10 text-3xl md:text-4xl font-extrabold tracking-widest text-white">
          {display}
        </span>
      </div>
      <span className="mt-2 text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/60">
        {label}
      </span>
    </motion.div>
  );
};

// =====================
// Helper function
// =====================
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const getTimeLeft = (deadline: number): TimeLeft => {
  const diff = deadline - Date.now();

  if (diff <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds };
};

// =====================
// Countdown component
// =====================
export default function CountdownTimer() {
  // กำหนดเวลาเป้าหมาย 24 ชม. จากตอนที่เปิดหน้า (หนึ่งครั้งต่อการโหลด)
  const [deadline] = useState<number>(() => Date.now() + ONE_DAY_MS);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(deadline));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const next = getTimeLeft(deadline);

      setTimeLeft(next);

      // ถ้านับถึง 0 แล้วหยุด interval
      if (next.hours === 0 && next.minutes === 0 && next.seconds === 0) {
        window.clearInterval(intervalId);
      }
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [deadline]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center my-6"
    >
      <p className="text-sm md:text-base text-white/70 mb-3">
        ข้อเสนอสุดพิเศษมีจำนวนจำกัด รีบคว้าโอกาสของคุณตอนนี้เลย
      </p>

      <div className="inline-flex flex-col items-center rounded-3xl bg-gradient-to-b from-white/5 via-red-500/10 to-black/70 px-4 py-4 md:px-6 md:py-5 border border-white/10 shadow-[0_0_45px_rgba(0,0,0,0.8)]">
        <span className="mb-3 text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-red-500/80 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          ข้อเสนอสุดพิเศษนี้จะสิ้นสุดใน
        </span>

        <div className="flex items-center justify-center">
          <NumberBox label="ชั่วโมง" value={timeLeft.hours} />

          <span className="mx-1 md:mx-2 text-3xl md:text-4xl font-bold text-white/80 select-none">
            :
          </span>

          <NumberBox label="นาที" value={timeLeft.minutes} />

          <span className="mx-1 md:mx-2 text-3xl md:text-4xl font-bold text-white/80 select-none">
            :
          </span>

          <NumberBox label="วินาที" value={timeLeft.seconds} />
        </div>
      </div>
    </motion.div>
  );
}
