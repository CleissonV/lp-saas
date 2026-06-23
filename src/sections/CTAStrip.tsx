import { motion } from 'framer-motion'

export default function CTAStrip() {
  return (
    <section className="py-24 px-6">
      <motion.div
        className="max-w-4xl mx-auto rounded-3xl p-16 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3b1f6e 0%, #1e1b4b 50%, #0c4a6e 100%)' }}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Subtle orb inside strip */}
        <div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: 300,
            height: 300,
            top: '-20%',
            right: '-5%',
            background: '#8b5cf6',
            opacity: 0.2,
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Pronto para transformar
            <br />
            <span className="gradient-text">sua gestão?</span>
          </h2>
          <p className="text-lg" style={{ color: '#c4b5fd' }}>
            Junte-se a mais de 12.000 empresas que já confiam no FluxCRM.
          </p>
          <button
            className="px-10 py-4 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: '#8b5cf6', color: '#fff' }}
          >
            Começar grátis agora →
          </button>
        </div>
      </motion.div>
    </section>
  )
}
