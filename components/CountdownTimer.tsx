"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "วัน" },
    { value: timeLeft.hours, label: "ชั่วโมง" },
    { value: timeLeft.minutes, label: "นาที" },
    { value: timeLeft.seconds, label: "วินาที" },
  ];

  return (
    <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/30 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
          🔥 Special Offer Ends In
        </span>
      </div>
      <div className="flex items-center gap-2">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center">
            <div className="flex flex-col items-center min-w-[50px]">
              <div className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-400 uppercase">{unit.label}</div>
            </div>
            {index < timeUnits.length - 1 && (
              <div className="text-2xl font-bold text-red-500 mx-1">:</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
