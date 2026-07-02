import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface ProjectVisualProps {
  project: Project
  className?: string
  /** Visual variation for gallery tiles */
  variant?: 0 | 1 | 2
}

/**
 * Gradient preview tile standing in for project screenshots.
 * Swap for real screenshots by replacing this component's contents with an <img>.
 */
export function ProjectVisual({ project, className, variant = 0 }: ProjectVisualProps) {
  const Icon = project.icon
  return (
    <div
      role="img"
      aria-label={`${project.title} preview`}
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br',
        project.gradient,
        className,
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
          variant === 0 ? 'h-16 w-16' : 'h-10 w-10',
        )}
        strokeWidth={1.5}
      />
    </div>
  )
}
