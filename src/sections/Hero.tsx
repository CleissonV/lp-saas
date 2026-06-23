import { motion } from 'framer-motion'
import { stats } from '../constants/data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Orbs */}
      <div
        className="orb1 absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: 500,
          height: 500,
          top: '10%',
          left: '-10%',
          background: '#8b5cf6',
          opacity: 0.18,
        }}
      />
      <div
        className="orb2 absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: '10%',
          right: '-8%',
          background: '#06b6d4',
          opacity: 0.15,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-semibold px-4 py-1.5 rounded-full border"
            style={{ color: '#8b5cf6', borderColor: '#8b5cf620', background: '#8b5cf610' }}
          >
            ✦ Novo: Automações com IA disponíveis
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Gerencie projetos e clientes{' '}
          <span className="gradient-text">em um só lugar</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl leading-relaxed"
          style={{ color: '#94a3b8' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          FluxCRM conecta sua equipe, automatiza tarefas repetitivas e entrega insights em tempo real.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button
            className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: '#8b5cf6', color: '#fff' }}
          >
            Começar grátis — 14 dias
          </button>
          <button
            className="px-8 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200"
            style={{ borderColor: '#334155', color: '#f8fafc' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.borderColor = '#8b5cf6')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.borderColor = '#334155')}
          >
            Ver demonstração →
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold gradient-text">{stat.value}</span>
              <span className="text-xs" style={{ color: '#64748b' }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
