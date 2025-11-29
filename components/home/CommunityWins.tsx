'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonialsRow1 = [
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
];

const testimonialsRow2 = [
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
  '/testimonial-01.png',
];

const Marquee = ({ images, direction }: { images: string[]; direction: number }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <motion.div
      className="flex"
      animate={{
        x: direction === 1 ? ['0%', '-100%'] : ['-100%', '0%'],
      }}
      transition={{
        ease: 'linear',
        duration: 80, // Slower speed
        repeat: Infinity,
      }}
    >
      {duplicatedImages.map((src, index) => (
        <div key={index} className="flex-shrink-0 w-auto h-auto p-3 md:p-4">
          <div className="w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-900/50">
            <Image
              src={src}
              alt={`Testimonial win from community ${index + 1}`}
              width={300}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default function CommunityWins() {
  return (
    <section className="py-16 overflow-hidden bg-black md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">Wins from our community</h2>
      </div>
      <div className="relative">
        <div className="flex flex-col gap-y-6 md:gap-y-8">
          <Marquee images={testimonialsRow1} direction={-1} />
          <Marquee images={testimonialsRow2} direction={1} />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </section>
  );
}
