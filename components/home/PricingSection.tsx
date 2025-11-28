'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const pricingPlans = [
  {
    name: 'Lifetime Standard',
    price: '$999',
    description: 'Lifetime access to ChartPrime Pro and 3 months of Prime Automation Basic',
    save: 'Save $414',
    features: [
      {
        title: 'Prime Automation Basic Subscription',
        duration: '3 months free',
        items: [
          'Automate your trades with trading bots',
          'Up to 5 automated crypto strategies',
          'Ready-to-use proven strategies',
          'Create fully custom bots',
        ],
      },
      {
        title: 'ChartPrime Pro',
        duration: '∞ Lifetime',
        items: [
          'Full kit with our four main indicators',
          'Five weekly trading strategy sessions',
          'Daily market insights from experts',
          'Discord community access',
          'Regular updates on new features',
        ],
      },
    ],
  },
  {
    name: 'Lifetime Premium',
    price: '$1,699',
    description: 'Lifetime access to ChartPrime Plus and 1 year of Prime Automation Pro',
    save: 'Save $2,400',
    features: [
      {
        title: 'Prime Automation Pro Subscription',
        duration: '1 year free',
        items: [
          'Everything from Prime Automation Basic',
          'Unlimited automated crypto strategies',
          'Exclusive premium strategies',
          'New proven strategies each week',
        ],
      },
      {
        title: 'ChartPrime Plus',
        duration: '∞ Lifetime',
        items: [
          '2 extra indicators, 12+ new features',
          'Influencer indicators',
          'Weekly TA Plus classes',
          'Create your own custom signals',
        ],
      },
    ],
  },
  {
    name: 'Lifetime Ultimate AI',
    price: '$2,499',
    description: 'Lifetime access to ChartPrime Plus, PA Builder, Screener and 1 year of Prime Automation Ultimate',
    save: 'Save $2,880',
    features: [
      {
        title: 'Prime Automation Ultimate Subscription',
        duration: '1 year free',
        items: [
          'Everything from Prime Automation Pro',
          'Full access to our highest win-rate AI strategies',
          'Grow your portfolio hands-free with AI bots',
          'Smart AI that optimizes every trade',
        ],
        special: 'Smart AI that optimizes every trade',
      },
      {
        title: 'ChartPrime Plus',
        duration: '∞ Lifetime',
        items: [
          '2 extra indicators, 12+ new features',
          'Influencer indicators',
          'Weekly TA Plus classes',
          'Create your own custom signals',
        ],
      },
      {
        title: 'ChartPrime+ Screener',
        duration: '∞ Lifetime',
        description: 'A powerful screener that scans the entire market for every high-probability setup in one clean view',
      },
      {
        title: 'Prime Automation Builder',
        duration: '∞ Lifetime',
        description: 'Simulate your strategies on real market data so you know exactly what\'s profitable and what\'s not',
      },
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={'bg-[#1C1C1C] border border-white/10 rounded-2xl h-full flex flex-col'}>
                <CardHeader className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <InfinityIcon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-5xl font-bold text-white mb-2">{plan.price}</p>
                  <p className="text-sm text-white/60 mb-4">{plan.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="bg-black text-white px-3 py-1 rounded-md text-sm">Black Friday</span>
                    <span className="bg-black text-white px-3 py-1 rounded-md text-sm">11 : 30 : 12</span>
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm">{plan.save}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-4 p-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="bg-black/40 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-purple-500" />
                          {feature.title}
                        </h4>
                        <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">{feature.duration}</span>
                      </div>
                      {feature.items && (
                        <ul className="space-y-2 text-sm text-white/70 pl-6">
                          {feature.items.map((item, j) => (
                            <li
                              key={j}
                              className="relative before:content-['•'] before:absolute before:left-[-1em] before:text-purple-500"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {feature.description && <p className="text-sm text-white/70">{feature.description}</p>}
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="p-6 flex flex-col items-center">
                  <p className="text-sm text-white/60 mb-4">
                    Got lifetime last year?{' '}
                    <a href="#" className="text-purple-400 underline">
                      Upgrade at a prorated price
                    </a>
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg">
                    Get Lifetime Plan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-lg font-semibold text-white mb-4">Safe and Secure Checkout</h3>
          <div className="flex justify-center items-center space-x-4 flex-wrap">
            <span className="text-white/60 text-sm">SSL SECURE</span>
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
