import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle2, Download, Loader2, Mail, Send, XCircle } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SEO } from '@/components/SEO'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input, Textarea } from '@/components/ui/input'
import { profile } from '@/data/profile'

// TODO: create a free EmailJS account (https://www.emailjs.com), add a service +
// template, and put the IDs in a .env file (see .env.example).
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

type Status = 'idle' | 'sending' | 'success' | 'error'

interface FieldErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})

  const validate = (data: FormData): FieldErrors => {
    const next: FieldErrors = {}
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    if (name.length < 2) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email address.'
    if (message.length < 10) next.message = 'Please write a message of at least 10 characters.'
    return next
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    const fieldErrors = validate(new FormData(formRef.current))
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) return

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // EmailJS not configured yet — fall back to a mailto link so the form still works.
      const data = new FormData(formRef.current)
      const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description={`Get in touch with ${profile.name} for full-stack development, AI integration, and SaaS projects.`}
        path="/contact"
      />
      <section className="section-pad">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something"
            description="Tell me about your project — I usually reply within a day."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Form */}
            <Reveal>
              <Card className="hover:translate-y-0">
                <CardContent className="p-6 sm:p-8">
                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          autoComplete="name"
                          placeholder="Your name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-sm text-red-500" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-sm text-red-500" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        Subject <span className="text-zinc-400">(optional)</span>
                      </label>
                      <Input id="subject" name="subject" placeholder="What's this about?" />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, timeline, and goals…"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-sm text-red-500" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" size="lg" disabled={status === 'sending'} className="w-full sm:w-auto">
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>

                    <div aria-live="polite">
                      {status === 'success' && (
                        <p className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="h-4 w-4" /> Message sent! I'll get back to you soon.
                        </p>
                      )}
                      {status === 'error' && (
                        <p className="flex items-center gap-2 text-sm font-medium text-red-500">
                          <XCircle className="h-4 w-4" /> Something went wrong. Please email me
                          directly at {profile.email}.
                        </p>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </Reveal>

            {/* Direct channels */}
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <a href={`mailto:${profile.email}`} className="block">
                  <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-zinc-900 dark:text-white">Email</p>
                        <p className="text-sm break-all text-zinc-600 dark:text-zinc-400">
                          {profile.email}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="block">
                  <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                        <FaLinkedin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-zinc-900 dark:text-white">LinkedIn</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Connect with me</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="block">
                  <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                        <FaGithub className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-zinc-900 dark:text-white">GitHub</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">See my code</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
                <a href={profile.resumeUrl} download className="block">
                  <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                        <Download className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-zinc-900 dark:text-white">Resume</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Download PDF</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
