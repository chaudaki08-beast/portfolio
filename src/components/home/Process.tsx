import { MessageSquare, PenTool, Rocket } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Discuss & Plan',
    description:
      'We talk through your goals, scope, and timeline. You get a clear proposal with architecture and milestones — no surprises later.',
  },
  {
    num: '02',
    icon: PenTool,
    title: 'Design & Build',
    description:
      'I design the system and build it in fast, reviewable iterations. You see progress continuously, not just at the end.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'Deployed, tested, and handed over with documentation. I stay available for fixes, improvements, and scaling.',
  },
]

export function Process() {
  return (
    <section className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Simple Process"
          title="From idea to live product — 3 steps"
          description="A process that keeps you in the loop and your project on schedule."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <div className="relative h-full rounded-[26px] border border-white/10 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30">
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-7 font-display text-5xl font-extrabold text-white/[0.06]"
                >
                  {step.num}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
