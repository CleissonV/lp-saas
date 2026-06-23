import { motion } from 'framer-motion'
import { LuCheck } from 'react-icons/lu'
import type { PricingPlan } from '../../types'

interface Props {
  plan: PricingPlan
  index: number
}

export default function PricingCard({ plan, index }: Props) {
  return (
    <motion.div
      className={`glass rounded-2xl p-8 flex flex-col gap-6 relative ${
        plan.highlighted ? 'border-[#8b5cf6]' : ''
      }`}
      style={
        plan.highlighted
          ? { border: '1px solid #8b5cf6', boxShadow: '0 0 40px rgba(139,92,246,0.15)' }
          : {}
      }
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {plan.highlighted && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full"
          style={{ background: '#8b5cf6', color: '#fff' }}
        >
          Mais popular
        </span>
      )}

      <div>
        <p className="text-sm font-semibold mb-2" style={{ color: '#8b5cf6' }}>{plan.name}</p>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          {plan.period && <span className="text-sm mb-1" style={{ color: '#64748b' }}>{plan.period}</span>}
        </div>
        <p className="text-sm mt-2" style={{ color: '#94a3b8' }}>{plan.desc}</p>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-center gap-3 text-sm" style={{ color: '#cbd5e1' }}>
            <LuCheck size={16} style={{ color: '#8b5cf6', flexShrink: 0 }} />
            {feat}
          </li>
        ))}
      </ul>

      <button
        className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200"
        style={
          plan.highlighted
            ? { background: '#8b5cf6', color: '#fff' }
            : { background: 'transparent', border: '1px solid #334155', color: '#f8fafc' }
        }
        onMouseEnter={(e) => {
          if (!plan.highlighted) {
            (e.currentTarget as HTMLButtonElement).style.borderColor = '#8b5cf6'
          }
        }}
        onMouseLeave={(e) => {
          if (!plan.highlighted) {
            (e.currentTarget as HTMLButtonElement).style.borderColor = '#334155'
          }
        }}
      >
        {plan.cta}
      </button>
    </motion.div>
  )
}
