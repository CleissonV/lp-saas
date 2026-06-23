import { motion } from 'framer-motion'
import FeatureCard from '../components/ui/FeatureCard'
import { features } from '../constants/data'

export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: '#8b5cf6' }}>
            Funcionalidades
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tudo que sua equipe precisa
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#94a3b8' }}>
            Ferramentas poderosas reunidas em uma plataforma simples e elegante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
