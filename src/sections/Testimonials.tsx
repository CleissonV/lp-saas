import { motion } from 'framer-motion'
import { testimonials } from '../constants/data'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: '#8b5cf6' }}>
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass rounded-2xl p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} style={{ color: '#f59e0b' }}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#cbd5e1' }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: '#1e293b' }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: '#8b5cf620', color: '#8b5cf6' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs" style={{ color: '#64748b' }}>
                    {t.role} na {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
