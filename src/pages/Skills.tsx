import { SEO } from '@/components/SEO'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { Card, CardContent } from '@/components/ui/card'
import { skillCategories } from '@/data/skills'

export default function Skills() {
  return (
    <>
      <SEO
        title="Skills"
        description="Technical skills of Ganesh Chaudaki: PHP, JavaScript, TypeScript, Python, C#, React, FastAPI, .NET, PostgreSQL, OpenAI, Gemini, Qiskit, and more."
        path="/skills"
      />
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Skills"
            title="The full toolkit"
            description="Eight domains, one goal: shipping software that works in production."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, i) => (
              <Reveal key={category.title} delay={(i % 3) * 0.08}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h2 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                      {category.title}
                    </h2>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {category.description}
                    </p>
                    <ul className="mt-5 grid grid-cols-2 gap-3">
                      {category.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-center gap-2.5 rounded-lg border border-zinc-200/70 px-3 py-2.5 text-sm text-zinc-700 transition-colors hover:border-brand-400/60 hover:text-brand-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-brand-500/50 dark:hover:text-brand-300"
                        >
                          <skill.icon className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                          {skill.name}
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
    </>
  )
}
