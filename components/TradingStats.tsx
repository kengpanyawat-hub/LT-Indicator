"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Shield, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12,547",
    label: "Active Traders",
    trend: "+23.5%",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    value: "89.3%",
    label: "Win Rate",
    trend: "+5.2%",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    value: "4.9/5",
    label: "Trust Score",
    trend: "★★★★★",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    value: "6+ Years",
    label: "in Market",
    trend: "Since 2018",
    color: "from-purple-500 to-pink-500",
  },
];

export default function TradingStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-xl blur-xl"
            style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
          />

          <div className="relative glass-card rounded-xl p-4 lg:p-6 hover:border-red-500/40 transition-all duration-300">
            {/* Icon */}
            <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 mb-3`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>

            {/* Value */}
            <div className="space-y-1">
              <div className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
              <div className="text-xs text-green-400 font-semibold">{stat.trend}</div>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
