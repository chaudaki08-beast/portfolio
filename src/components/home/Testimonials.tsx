import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/data/misc'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [paused])

  const t = testimonials[index]

  return (
    <section className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Feedback from the people I've built for."
        />
        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass relative overflow-hidden rounded-2xl p-8 sm:p-12">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-brand-500/20" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="relative text-center"
              >
                <p className="text-lg text-zinc-700 italic sm:text-xl dark:text-zinc-300">
                  “{t.quote}”
                </p>
                <footer className="mt-6">
                  <p className="font-semibold text-zinc-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{t.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index ? 'w-6 bg-brand-500' : 'w-2 bg-zinc-300 dark:bg-zinc-700',
                  )}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
