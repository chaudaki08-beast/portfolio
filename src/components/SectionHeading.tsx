import { Reveal } from '@/components/Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
    </Reveal>
  )
}
