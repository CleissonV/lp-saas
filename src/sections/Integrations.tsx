import { motion } from 'framer-motion'
import { integrations } from '../constants/data'

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="glass text-sm font-medium px-5 py-2.5 rounded-xl whitespace-nowrap"
            style={{ color: '#cbd5e1' }}
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: '#8b5cf6' }}>
            Integrações
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Se conecta com suas ferramentas favoritas
          </h2>
          <p className="text-lg" style={{ color: '#94a3b8' }}>
            +50 integrações nativas disponíveis no plano Pro.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={integrations[0]} />
        <MarqueeRow items={integrations[1]} reverse />
      </div>
    </section>
  )
}
