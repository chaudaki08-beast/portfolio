/** Subtle fixed background: gradient orbs + a faint grid. Purely decorative. */
export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(99 102 241 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(99 102 241 / 0.12) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      {/* Orbs */}
      <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] animate-float rounded-full bg-brand-500/15 blur-[120px] dark:bg-brand-600/20" />
      <div
        className="absolute top-1/3 -right-40 h-[420px] w-[420px] animate-float rounded-full bg-accent-500/10 blur-[120px] dark:bg-accent-500/15"
        style={{ animationDelay: '-4s' }}
      />
      <div
        className="absolute bottom-0 left-0 h-[360px] w-[360px] animate-float rounded-full bg-fuchsia-500/10 blur-[120px] dark:bg-fuchsia-600/10"
        style={{ animationDelay: '-2s' }}
      />
    </div>
  )
}
