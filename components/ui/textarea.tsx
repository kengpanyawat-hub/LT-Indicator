import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-xl border border-[#C0C0C0]/40 bg-white/5 px-4 py-3',
          'text-white placeholder:text-gray-400',
          'backdrop-blur-sm transition-all duration-200 resize-none',
          'focus:border-[#C0C0C0] focus:outline-none focus:ring-2 focus:ring-[#C0C0C0]/20',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
