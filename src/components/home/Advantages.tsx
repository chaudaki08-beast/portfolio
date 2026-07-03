import { advantages } from '@/data/skills'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export function Advantages() {
  return (
    <section className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow="My Skills"
          title="My advantages"
          description="More than 25+ technologies powering my software development work."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {advantages.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 6) * 0.06}>
              <div className="group rounded-[22px] border border-white/10 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30">
                <skill.icon
                  aria-hidden="true"
                  className="mx-auto h-8 w-8 text-brand-500 transition-transform group-hover:scale-110"
                />
                <p className="mt-4 font-display text-3xl font-extrabold text-white">
                  <AnimatedCounter value={skill.percent} suffix="%" />
                </p>
                <p className="mt-1 text-xs font-bold text-white/60">{skill.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
