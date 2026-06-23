import { motion } from 'framer-motion'
import type { Feature } from '../../types'

interface Props {
  feature: Feature
  index: number
}

export default function FeatureCard({ feature, index }: Props) {
  const Icon = feature.icon

  return (
    <motion.div
      className="feature-card glass rounded-2xl p-6 flex flex-col gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}40` }}
      >
        <Icon size={22} style={{ color: feature.color }} />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-white mb-1">{feature.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{feature.desc}</p>
      </div>
    </motion.div>
  )
}
