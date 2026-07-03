import { Award, ExternalLink } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { experience } from '@/data/experience'
import { certifications, techTimeline } from '@/data/misc'

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="Career timeline of Ganesh Chaudaki — achievements across enterprise software, AI SaaS, desktop applications, and client web development."
        path="/experience"
      />

      {/* Career timeline */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Experience"
            title="Achievements, not job descriptions"
            description="What actually shipped at each stage."
          />
          <div className="relative mx-auto mt-16 max-w-3xl">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-brand-500 via-brand-400/50 to-transparent sm:left-1/2"
            />
            <ol className="space-y-12">
              {experience.map((item, i) => (
                <li key={item.period} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-2 left-4 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-500 ring-4 ring-brand-500/20 sm:left-1/2"
                  />
                  <Reveal
                    delay={i * 0.06}
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                      i % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
                    }`}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                          {item.period}
                        </p>
                        <h3 className="mt-1 font-display text-lg font-semibold text-zinc-900 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.company}</p>
                        <ul className="mt-4 space-y-2">
                          {item.achievements.map((a) => (
                            <li
                              key={a}
                              className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                              {a}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tech.map((t) => (
                            <Badge key={t} variant="outline">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Tech timeline */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Tech Timeline"
            title="Learning journey"
            description="Each year added a new layer to the stack."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techTimeline.map((entry, i) => (
              <Reveal key={entry.year} delay={(i % 4) * 0.06}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="font-display text-2xl font-bold text-gradient">{entry.year}</p>
                    <h3 className="mt-2 font-display font-semibold text-zinc-900 dark:text-white">
                      {entry.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {entry.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Certifications"
            title="Credentials"
            description="Degrees and certifications backing the hands-on experience."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={`${cert.title}-${cert.year}`} delay={i * 0.08}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/25">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-zinc-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {cert.issuer} · {cert.year}
                    </p>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
                      >
                        View credential <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
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
