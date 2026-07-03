import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface ProjectVisualProps {
  project: Project
  className?: string
  /** Visual variation for gallery tiles */
  variant?: 0 | 1 | 2
  /** Render inside a laptop mockup frame (reference-site style) */
  laptop?: boolean
}

/**
 * Project preview. With `laptop`, renders a laptop mockup (browser bar, screen,
 * base with notch); otherwise a plain gradient tile. Swap the gradient screen
 * for real screenshots by replacing the inner div with an <img>.
 */
export function ProjectVisual({ project, className, variant = 0, laptop = false }: ProjectVisualProps) {
  const Icon = project.icon

  const screen = (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br',
        project.gradient,
      )}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(255 255 255 / 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.25) 1px, transparent 1px)',
          backgroundSize: variant === 1 ? '28px 28px' : variant === 2 ? '18px 18px' : '40px 40px',
        }}
      />
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
      <Icon
        className={cn(
          'relative text-white/90 drop-shadow-lg',
          variant === 0 ? 'h-14 w-14' : 'h-9 w-9',
        )}
        strokeWidth={1.5}
      />
    </div>
  )

  if (!laptop) {
    return (
      <div
        role="img"
        aria-label={`${project.title} preview`}
        className={cn('relative overflow-hidden rounded-xl', className)}
      >
        {screen}
      </div>
    )
  }

  return (
    <div role="img" aria-label={`${project.title} preview`} className={cn('w-full', className)}>
      {/* Screen */}
      <div className="overflow-hidden rounded-t-[18px] rounded-b-lg border-2 border-white/10 bg-[#151515] shadow-[0_24px_70px_rgba(0,0,0,0.48),0_0_0_1px_rgba(255,24,78,0.12)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-brand-500/40 group-hover:shadow-[0_32px_90px_rgba(0,0,0,0.58),0_0_40px_rgba(255,24,78,0.12)]">
        {/* Browser bar */}
        <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-[#101010] px-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 hidden flex-1 truncate rounded-md bg-white/5 px-3 py-0.5 text-[10px] text-white/40 sm:block">
            {project.slug}.app
          </span>
        </div>
        {/* Display */}
        <div className="aspect-[16/9] w-full">{screen}</div>
      </div>
      {/* Base */}
      <div className="relative h-3.5 w-full rounded-b-xl bg-gradient-to-b from-white/15 to-white/[0.035]">
        <span className="absolute top-0 left-1/2 h-1.5 w-20 -translate-x-1/2 rounded-b-xl bg-black/35" />
      </div>
      <div className="mx-auto h-2 w-[58%] rounded-b-[22px] bg-white/[0.055]" />
    </div>
  )
}
