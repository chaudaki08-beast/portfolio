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
      <p className="mb-4 inline-flex items-center rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1 text-xs font-bold tracking-widest uppercase text-brand-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-white/60">{description}</p>}
    </Reveal>
  )
}
