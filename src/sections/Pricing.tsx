import { motion } from 'framer-motion'
import PricingCard from '../components/ui/PricingCard'
import { pricing } from '../constants/data'

export default function Pricing() {
  return (
    <section id="preços" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: '#8b5cf6' }}>
            Preços
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Planos que crescem com você
          </h2>
          <p className="text-lg" style={{ color: '#94a3b8' }}>
            14 dias grátis em qualquer plano. Sem cartão de crédito.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricing.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
