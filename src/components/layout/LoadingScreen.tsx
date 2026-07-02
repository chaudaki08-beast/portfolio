import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-white dark:bg-zinc-950"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl font-bold"
        >
          <span className="text-gradient">GC</span>
        </motion.div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </div>
  )
}
