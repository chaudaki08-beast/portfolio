import { useMemo } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { profile } from '@/data/profile'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'

const WEEKS = 52
const DAYS = 7
const LEVELS = [
  'bg-zinc-200 dark:bg-zinc-800',
  'bg-brand-200 dark:bg-brand-900',
  'bg-brand-400 dark:bg-brand-700',
  'bg-brand-500 dark:bg-brand-500',
  'bg-brand-600 dark:bg-brand-400',
]

/** Deterministic pseudo-random so the placeholder graph is stable across renders. */
function level(week: number, day: number) {
  const n = Math.sin(week * 12.9898 + day * 78.233) * 43758.5453
  const r = n - Math.floor(n)
  if (r < 0.28) return 0
  if (r < 0.55) return 1
  if (r < 0.78) return 2
  if (r < 0.93) return 3
  return 4
}

/**
 * Decorative placeholder for a GitHub contribution graph.
 * Swap for a live graph via the GitHub GraphQL API or an <img> from ghchart.rshah.org.
 */
export function GithubActivity() {
  const grid = useMemo(
    () =>
      Array.from({ length: WEEKS }, (_, w) => Array.from({ length: DAYS }, (_, d) => level(w, d))),
    [],
  )

  return (
    <section className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub activity"
          description="A year of consistent building. Placeholder graph — connect the GitHub API for live data."
        />
        <Reveal className="mt-12">
          <div className="glass overflow-x-auto rounded-2xl p-6 sm:p-8">
            <div className="flex min-w-[640px] justify-center gap-[3px]" aria-hidden="true">
              {grid.map((week, w) => (
                <div key={w} className="flex flex-col gap-[3px]">
                  {week.map((lvl, d) => (
                    <div key={d} className={`h-2.5 w-2.5 rounded-[3px] ${LEVELS[lvl]}`} />
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <FaGithub className="h-4 w-4" /> View GitHub Profile
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
