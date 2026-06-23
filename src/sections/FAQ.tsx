import { useState } from 'react'
import { motion } from 'framer-motion'
import FAQItem from '../components/ui/FAQItem'
import { faq } from '../constants/data'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: '#8b5cf6' }}>
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faq.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <FAQItem
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
