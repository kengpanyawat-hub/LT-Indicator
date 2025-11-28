import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    subtitle: 'PRIME AUTOMATION',
    title: 'Prime Automation',
    description: 'Enjoy a full year of automated trading power—choose from built-in proven strategies or set your own, then sit back as your bots grow your portfolio automatically.',
    list: [
      'Launch unlimited bots that never miss a trade',
      'Ready-to-use, backtested strategies',
      'Watch your portfolio grow automatically',
    ],
    image: '/lifetime-1.png',
  },
  {
    subtitle: 'PRIME AUTOMATION',
    title: 'AI-Powered Bots',
    description: 'Harness the power of AI-driven automatic trading, designed to work for you 24/7—exclusive to our top-tier plan, Prime Automation Ultimate.',
    list: [
        'Smart AI that trades for you',
        'Detects patterns faster than humans',
        'Predicts high-probability trade setups',
    ],
    image: '/lifetime-2.png',
    badge: 'Smart AI'
  },
  {
    subtitle: 'PRIME AUTOMATION',
    title: 'Exclusive Strategies',
    description: 'Exclusive high-performance strategies—intensively backtested for consistent results, available only with Lifetime plans.',
    list: [
        'High-performance, backtested strategies',
        'Designed for long-term profitability',
        'Reliable, automated, and ready to run 24/7',
    ],
    image: '/lifetime-3.png',
  },
  {
    subtitle: 'PRIME AUTOMATION',
    title: 'PA Builder',
    description: 'Backtest your trading ideas risk-free. Load strategies, run full simulations, and see exactly how they would’ve performed before risking a single dollar.',
    list: [
        'Backtest any strategy to see how it performs',
        'Track win rate, profit, drawdown and risk',
        'Quickly filter out weak strategies that lose money',
    ],
    image: '/lifetime-4.png',
    badge: '∞ Only in top plan'
  },
  {
    subtitle: 'PRIME AUTOMATION',
    title: 'Smart bots that thrive in any market condition',
    description: 'Prime Automation’s trading bots are designed to handle both bullish and bearish markets, adapting instantly, spotting opportunities, and optimizing every trade to perform at their best in every market condition.',
    list: [
        'Uptrends',
        'Downtrends',
    ],
    image: '/lifetime-5.png',
  },
  {
    subtitle: 'CHARTPRIME SUITE',
    title: 'ChartPrime Suite',
    description: 'Enjoy lifetime access to all ChartPrime indicators and features. The most powerful tools in the market—yours forever.',
    list: [
        'Full ChartPrime Suite, yours for life',
        'Lifetime access to all live trading strategy sessions',
        'All future updates and indicators included',
    ],
    image: '/lifetime-6.png',
    badge: '∞ Lifetime'
  },
];

export default function LifetimeInclusion() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          What's included in Lifetime Plans
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#121212] rounded-2xl p-6 flex flex-col border border-white/10">
              <div className="relative mb-4 h-48 rounded-lg overflow-hidden bg-black">
                <Image src={feature.image} alt={feature.title} layout="fill" objectFit="cover" className="opacity-50" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-white/60 text-sm">{feature.subtitle}</p>
                {feature.badge && <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">{feature.badge}</span>}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80 mb-4 text-sm flex-grow">{feature.description}</p>
              <ul className="space-y-2">
                {feature.list.map((item, i) => (
                  <li key={i} className="flex items-center text-white/80">
                    <CheckCircle className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}