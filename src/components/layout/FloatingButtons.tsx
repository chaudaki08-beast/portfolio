import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

const WHATSAPP_URL =
  'https://wa.me/919820307256?text=' +
  encodeURIComponent("Hi Ganesh, I found your portfolio and I'd like to discuss a project.")

/** Fixed bottom-right quick actions: WhatsApp chat + back-to-top. */
export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/30 transition-transform hover:scale-110"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={cn(
          'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-surface-2/90 text-white/80 shadow-lg backdrop-blur transition-all hover:border-brand-500/60 hover:text-brand-400',
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  )
}
