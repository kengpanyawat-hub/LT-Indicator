'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, animate = true, ...props }, ref) => {
    const baseClassName = cn(
      'rounded-2xl border border-[#C0C0C0]/40 bg-white/5 backdrop-blur-lg',
      'shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
      'transition-all duration-300',
      className
    );

    if (animate) {
      return (
        <motion.div
          ref={ref}
          className={baseClassName}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={baseClassName} {...props}>
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard };
