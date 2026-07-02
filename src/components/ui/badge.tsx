import { type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300',
        outline:
          'border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300',
        accent:
          'bg-cyan-100 text-cyan-800 dark:bg-accent-500/15 dark:text-accent-400',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
