import { AnimatePresence, motion } from 'framer-motion'
import { LuChevronDown } from 'react-icons/lu'
import type { FAQItem as FAQItemType } from '../../types'

interface Props {
  item: FAQItemType
  index: number
  isOpen: boolean
  onToggle: () => void
}

export default function FAQItem({ item, isOpen, onToggle }: Props) {
  return (
    <div
      className="glass rounded-xl overflow-hidden cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <span className="font-medium text-white">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0 }}
        >
          <LuChevronDown size={18} style={{ color: '#8b5cf6' }} />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
