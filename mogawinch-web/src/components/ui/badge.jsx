import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-secondary text-secondary-foreground ring-border',
        low: 'bg-rose-50 text-rose-700 ring-rose-200',
        medium: 'bg-amber-50 text-amber-700 ring-amber-200',
        high: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
