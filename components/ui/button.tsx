import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0C0C0]/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(192,192,192,0.4)]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-[#C0C0C0]/40 bg-transparent text-white hover:bg-white/5 hover:border-[#C0C0C0]/60',
        secondary:
          'bg-white/10 text-white hover:bg-white/20',
        ghost: 'hover:bg-white/5 hover:text-white text-gray-400',
        link: 'text-[#C0C0C0] underline-offset-4 hover:underline',
        silver:
          'bg-gradient-to-r from-[#C0C0C0]/20 to-white/10 text-white hover:from-[#C0C0C0]/30 hover:to-white/20 border border-[#C0C0C0]/40',
        neon:
          'bg-gradient-to-r from-[#C0C0C0] to-white text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(192,192,192,0.6)]',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
