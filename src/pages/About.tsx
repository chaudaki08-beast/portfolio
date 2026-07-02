import { GraduationCap, Hammer, MapPin, Rocket } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { profile } from '@/data/profile'
import { experience, education } from '@/data/experience'
import { skillCategories } from '@/data/skills'

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description={`About ${profile.name} — Software Engineer specializing in full-stack development, AI applications, enterprise software, and SaaS products.`}
        path="/about"
      />

      {/* Intro */}
      <section className="section-pad">
        <div className="container-tight grid items-start gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <Reveal>
              <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">
                About Me
              </p>
              <h1 className="font-display text-4xl font-bold text-zinc-900 sm:text-5xl dark:text-white">
                Engineer first, <span className="text-gradient">builder always</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  I'm {profile.name}, a Software Engineer who ships complete products — not just
                  features. My work spans enterprise SaaS platforms that businesses run on, AI
                  systems that watch and understand the real world, desktop tools that talk to
                  hardware, and experiments at the edge of quantum computing.
                </p>
                <p>
                  I started with the LAMP stack, building websites and custom CMS platforms for
                  clients. That foundation — caring about hosting constraints, database
                  performance, and what happens when real users hit real systems — still shapes
                  how I build today, whether the stack is PHP on shared hosting or FastAPI
                  streaming AI analysis of live video.
                </p>
                <p>
                  What sets my work apart is range with depth: I've reverse-engineered mobile
                  database schemas for a .NET desktop app, tuned prompt pipelines for production
                  AI products, and designed billing engines that don't lose money at the edge
                  cases. I like hard problems, and I like shipping.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Card>
              <CardContent className="p-6">
                <div
                  role="img"
                  aria-label="Professional headshot placeholder"
                  className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 shadow-xl shadow-brand-500/25"
                >
                  <span className="font-display text-5xl font-bold text-white">GC</span>
                </div>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-brand-500" />
                    <dd className="text-zinc-700 dark:text-zinc-300">{profile.location}</dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <Rocket className="h-4 w-4 text-brand-500" />
                    <dd className="text-zinc-700 dark:text-zinc-300">
                      Building AI SaaS & enterprise software
                    </dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <Hammer className="h-4 w-4 text-brand-500" />
                    <dd className="text-zinc-700 dark:text-zinc-300">
                      60+ projects delivered end to end
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Career journey */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Career Journey"
            title="Where I've been"
            description="From client websites to AI platforms — each phase built on the last."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {experience.map((item, i) => (
              <Reveal key={item.period} delay={i * 0.08}>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                      {item.period}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-zinc-900 dark:text-white">
                      {item.role} · {item.company}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {item.achievements.map((a) => (
                        <li key={a} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills snapshot */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Skills"
            title="Tools of the trade"
            description="A snapshot — see the Skills page for the full breakdown."
          />
          <Reveal className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
            {skillCategories
              .flatMap((c) => c.skills)
              .filter((s, i, arr) => arr.findIndex((x) => x.name === s.name) === i)
              .map((skill) => (
                <Badge key={skill.name} variant="outline" className="px-4 py-1.5 text-sm">
                  {skill.name}
                </Badge>
              ))}
          </Reveal>
        </div>
      </section>

      {/* Education */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading eyebrow="Education" title="Academic foundation" />
          <div className="mx-auto mt-10 max-w-3xl">
            {education.map((edu) => (
              <Reveal key={edu.period}>
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                        {edu.period}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold text-zinc-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{edu.institution}</p>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{edu.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Currently building */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Right Now"
            title="What I'm currently building"
            description="Active projects on my desk this quarter."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {profile.currentlyBuilding.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        In active development
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
