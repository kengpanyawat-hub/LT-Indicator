"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TickerItem {
  pair: string;
  price: string;
  change: number;
}

const mockTickers: TickerItem[] = [
  { pair: "BTC/USD", price: "43,250.00", change: 2.34 },
  { pair: "EUR/USD", price: "1.0892", change: 0.15 },
  { pair: "GBP/USD", price: "1.2734", change: -0.23 },
  { pair: "GOLD", price: "2,045.80", change: 1.12 },
  { pair: "ETH/USD", price: "2,287.50", change: 3.45 },
  { pair: "USD/JPY", price: "148.23", change: -0.08 },
];

export default function LiveTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockTickers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentTicker = mockTickers[currentIndex];

  return (
    <div className="glass-panel rounded-full px-6 py-3 inline-flex items-center gap-4">
      {/* Live indicator */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
        </div>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Live Market
        </span>
      </div>

      {/* Ticker content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3"
        >
          <span className="text-sm font-bold text-white">
            {currentTicker.pair}
          </span>
          <span className="text-sm text-gray-300">
            {currentTicker.price}
          </span>
          <span
            className={`text-xs font-semibold ${
              currentTicker.change >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {currentTicker.change >= 0 ? "+" : ""}
            {currentTicker.change}%
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
