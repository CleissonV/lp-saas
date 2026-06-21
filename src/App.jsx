import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaCheck, FaRocket, FaUsers, FaChartLine, FaBolt, FaCog, FaArrowRight, FaStar, FaQuoteLeft, FaPlus, FaMinus, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { MdDashboard, MdAutoAwesome, MdIntegrationInstructions, MdNotifications, MdAnalytics, MdSecurity } from 'react-icons/md'

const features = [
  { icon: MdDashboard, title: 'Pipeline Visual', desc: 'Visualize todo o seu funil de vendas em tempo real. Drag-and-drop intuitivo, sem complicações.' },
  { icon: MdAutoAwesome, title: 'IA Integrada', desc: 'Assistente de vendas com IA que sugere próximas ações, resume conversas e prevê fechamentos.' },
  { icon: MdIntegrationInstructions, title: '200+ Integrações', desc: 'Gmail, Slack, WhatsApp, Zoom, Hubspot e muito mais. Conecte tudo em minutos.' },
  { icon: MdNotifications, title: 'Alertas Inteligentes', desc: 'Nunca perca um follow-up. Lembretes automáticos baseados no comportamento do lead.' },
  { icon: MdAnalytics, title: 'Analytics Avançado', desc: 'Relatórios em tempo real, métricas de desempenho por vendedor e previsão de receita com IA.' },
  { icon: MdSecurity, title: 'Enterprise Security', desc: 'SOC2 Type II, LGPD compliant, SSO, 2FA obrigatório e logs de auditoria completos.' },
]

const steps = [
  { n: '01', title: 'Importe seus leads', desc: 'Conecte seu email, planilha ou CRM anterior. Em minutos, todos os dados migrados automaticamente.' },
  { n: '02', title: 'Configure seu pipeline', desc: 'Crie etapas personalizadas para seu processo de vendas. Templates prontos para começar rápido.' },
  { n: '03', title: 'Venda mais, trabalhe menos', desc: 'IA cuida dos lembretes, análises e relatórios. Você foca no que importa: fechar negócios.' },
]

const plans = [
  {
    name: 'Starter',
    price: 'R$ 49',
    per: '/usuário/mês',
    desc: 'Para times de até 5 pessoas',
    features: ['Pipeline visual', '1.000 contatos', 'Integrações básicas (5)', 'Relatórios básicos', 'Suporte por chat'],
    cta: 'Começar Grátis',
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'R$ 99',
    per: '/usuário/mês',
    desc: 'Para times em crescimento',
    features: ['Tudo do Starter', 'Contatos ilimitados', 'Todas as integrações', 'IA Assistant', 'Analytics avançado', 'API completa', 'Suporte prioritário'],
    cta: 'Começar Grátis',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: '',
    desc: 'Para grandes organizações',
    features: ['Tudo do Growth', 'SSO + SAML', 'SLA 99.99%', 'CSM dedicado', 'Treinamento incluso', 'On-premise disponível', 'Compliance personalizado'],
    cta: 'Falar com Vendas',
    highlight: false,
  },
]

const testimonials = [
  { name: 'Marina Costa', role: 'Head of Sales, Conta Azul', text: 'Aumentamos nossa taxa de conversão em 40% em 3 meses. O Pipeline visual mudou completamente nossa operação.', stars: 5 },
  { name: 'Thiago Lopes', role: 'Fundador, StartupBR', text: 'Saímos do Excel pro FluxCRM em 2 dias. Setup simples, resultado imediato. Hoje gerenciamos 5k leads sem estresse.', stars: 5 },
  { name: 'Fernanda Reis', role: 'VP de Vendas, TechCo', text: 'A IA de previsão de receita é incrível. Agora apresento projeções ao board com 90% de precisão.', stars: 5 },
]

const avatarPhotos = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&faceindex=1',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80&auto=format&fit=crop',
]

const faqs = [
  { q: 'Posso migrar do meu CRM atual?', a: 'Sim! Migramos seus dados do Salesforce, HubSpot, Pipedrive ou qualquer planilha Excel/Google Sheets em menos de 24h. Processo guiado e sem perda de dados.' },
  { q: 'Funciona com WhatsApp Business?', a: 'Sim, integração nativa com WhatsApp Business API. Envie mensagens, automatize respostas e registre todas as conversas direto no CRM.' },
  { q: 'Tem contrato de fidelidade?', a: 'Não. Planos mensais sem fidelidade. Cancele quando quiser, sem multas ou burocracia. Acreditamos que você fica porque quer, não porque é obrigado.' },
  { q: 'Como funciona o período de teste?', a: '14 dias grátis em qualquer plano, com todas as funcionalidades liberadas. Sem cartão de crédito para começar.' },
]

const logos = ['Contabilizei', 'RD Station', 'Omie', 'Zendesk', 'Totvs', 'Pipedrive']

const dashMetrics = [
  { label: 'Leads', v: '1.247', icon: FaUsers, c: '#8b5cf6' },
  { label: 'Em Andamento', v: '89', icon: FaChartLine, c: '#06b6d4' },
  { label: 'Fechamentos', v: 'R$ 847k', icon: FaBolt, c: '#10b981' },
  { label: 'Taxa Conv.', v: '34.2%', icon: FaCog, c: '#f59e0b' },
]

const pipelineStages = [
  { stage: 'Prospecção', count: 12, color: '#8b5cf6', leads: [{ v: 85 }, { v: 120 }, { v: 200 }] },
  { stage: 'Qualificação', count: 8, color: '#6366f1', leads: [{ v: 85 }, { v: 120 }] },
  { stage: 'Proposta', count: 5, color: '#06b6d4', leads: [{ v: 200 }, { v: 85 }, { v: 120 }] },
]

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="feature-card bg-[#1e293b] rounded-2xl p-7 cursor-default"
    >
      <div
        className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.1))' }}
      >
        <feature.icon className="text-[#8b5cf6]" size={22} />
      </div>
      <h3 className="font-bold text-lg text-white mb-2">{feature.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
    </motion.div>
  )
}

const PlanCard = ({ plan, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-2 duration-300 ${
        plan.highlight
          ? 'border-[#8b5cf6] shadow-2xl shadow-purple-500/20 bg-gradient-to-b from-[#1e1335] to-[#1e293b]'
          : 'border-[#334155] bg-[#1e293b]'
      }`}
    >
      {plan.highlight && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}
        >
          MAIS POPULAR
        </div>
      )}
      <div className="mb-6">
        <h3 className="font-bold text-2xl text-white mb-1">{plan.name}</h3>
        <p className="text-slate-500 text-sm">{plan.desc}</p>
      </div>
      <div className="mb-6">
        <span className="font-extrabold text-4xl text-white">{plan.price}</span>
        {plan.per && <span className="text-slate-500 text-sm">{plan.per}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((f, j) => (
          <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
            <FaCheck
              size={11}
              className={plan.highlight ? 'text-[#8b5cf6]' : 'text-[#06b6d4]'}
              style={{ flexShrink: 0 }}
            />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`block text-center py-3.5 rounded-xl text-sm font-semibold transition-all ${
          plan.highlight
            ? 'text-white hover:opacity-90'
            : 'border border-[#334155] text-slate-300 hover:border-[#8b5cf6] hover:text-white'
        }`}
        style={plan.highlight ? { background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' } : {}}
      >
        {plan.cta}
      </a>
    </motion.div>
  )
}

const TestimonialCard = ({ t, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="glass rounded-2xl p-8 relative"
    >
      <FaQuoteLeft className="text-[#8b5cf6]/20 absolute top-6 right-6" size={32} />
      <div className="flex gap-1 mb-4">
        {Array(t.stars).fill(0).map((_, j) => (
          <FaStar key={j} className="text-yellow-400" size={13} />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <img
          src={avatarPhotos[index % 3]}
          alt={t.name}
          className="w-12 h-12 rounded-full object-cover object-top"
        />
        <div>
          <div className="font-semibold text-white text-sm">{t.name}</div>
          <div className="text-slate-500 text-xs">{t.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-[#334155] rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1e293b] transition-colors"
      >
        <span className="font-medium text-white text-sm pr-4">{faq.q}</span>
        {open
          ? <FaMinus className="text-[#8b5cf6] flex-shrink-0" size={14} />
          : <FaPlus className="text-slate-400 flex-shrink-0" size={14} />
        }
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const DashboardMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 0.8 }}
    className="glass rounded-2xl border border-[#334155] overflow-hidden shadow-2xl shadow-purple-900/20 max-w-5xl mx-auto"
  >
    {/* Window chrome */}
    <div className="flex items-center gap-2 px-5 py-3 bg-[#1e293b] border-b border-[#334155]">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="text-slate-500 text-xs ml-3">FluxCRM · Pipeline de Vendas</span>
    </div>
    <div className="p-6 bg-[#0f172a]">
      {/* Metric cards */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {dashMetrics.map((m, i) => (
          <div key={i} className="bg-[#1e293b] rounded-xl p-4 border border-[#334155]">
            <m.icon size={16} style={{ color: m.c, marginBottom: 8 }} />
            <div className="font-bold text-xl text-white">{m.v}</div>
            <div className="text-slate-500 text-xs">{m.label}</div>
          </div>
        ))}
      </div>
      {/* Pipeline columns */}
      <div className="grid grid-cols-3 gap-3">
        {pipelineStages.map((col, i) => (
          <div key={i} className="bg-[#1e293b] rounded-xl p-4 border border-[#334155]">
            <div className="flex justify-between items-center mb-3">
              <span className="text-slate-300 text-xs font-medium">{col.stage}</span>
              <span className="text-xs text-slate-500">{col.count} leads</span>
            </div>
            {col.leads.map((lead, j) => (
              <div
                key={j}
                className="rounded-lg p-3 mb-2 border border-[#334155]"
                style={{ background: `${col.color}10` }}
              >
                <div className="text-xs text-white font-medium mb-1">Lead {j + 1}</div>
                <div className="text-xs text-slate-500">R$ {lead.v}k</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
)

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-50"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
        }}
      />

      {/* Nav */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#0f172a]/95 backdrop-blur-xl border-b border-[#1e293b] py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold text-xl">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}
            >
              <FaBolt className="text-white" size={14} />
            </div>
            <span className="gradient-text">FluxCRM</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['Produto', 'Preços', 'FAQ', 'Blog'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Login
            </a>
            <a
              href="#"
              className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}
            >
              Começar Grátis
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#8b5cf6]">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#1e293b] border-t border-[#334155] overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {['Produto', 'Preços', 'FAQ'].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-slate-400 hover:text-white font-medium"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#"
                  className="px-5 py-3 rounded-lg text-white text-sm font-semibold text-center"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}
                >
                  Começar Grátis
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated orbs */}
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full orb1 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full orb2 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
              <span className="text-xs text-slate-400">+500 times já usam o FluxCRM</span>
              <span className="text-xs text-[#8b5cf6] font-medium">Ver cases →</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-extrabold text-5xl md:text-7xl leading-none text-white mb-6"
            >
              O CRM que seu<br />time <span className="gradient-text">vai amar</span><br />usar todo dia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Pipeline visual, IA integrada e 200+ integrações. Feche mais negócios em menos tempo. Setup em 10 minutos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a
                href="#precos"
                className="group px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-purple-500/25"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}
              >
                <FaRocket size={14} />
                Começar Grátis por 14 dias
                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#produto"
                className="px-8 py-4 glass rounded-xl text-slate-300 font-medium hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Ver demo ao vivo
              </a>
            </motion.div>

            <p className="text-slate-600 text-sm">
              Sem cartão de crédito · Cancele quando quiser · Setup em 10 min
            </p>
          </div>

          <DashboardMockup />

          {/* Hero product screenshot with floating metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-16 mx-auto max-w-4xl"
            style={{ perspective: '1000px' }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.3)] border border-[#8b5cf6]/20">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop"
                alt="FluxCRM dashboard"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-[#8b5cf6]/10 blur-3xl -z-10 rounded-3xl" />

            {/* Floating metric card — top right */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -right-8 bg-[#1e1b4b] border border-[#8b5cf6]/30 rounded-xl p-3 shadow-xl"
            >
              <div className="text-xs text-[#8b5cf6]">Receita Mensal</div>
              <div className="text-white font-bold text-lg">R$ 128.4k</div>
              <div className="text-green-400 text-xs">↑ 23% vs mês anterior</div>
            </motion.div>

            {/* Floating metric card — bottom left */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-8 bg-[#1e1b4b] border border-[#06b6d4]/30 rounded-xl p-3 shadow-xl"
            >
              <div className="text-xs text-[#06b6d4]">Leads Ativos</div>
              <div className="text-white font-bold text-lg">1.247</div>
              <div className="text-green-400 text-xs">↑ 12% essa semana</div>
            </motion.div>

            {/* Floating metric card — top left */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/3 -left-10 bg-[#1e1b4b] border border-[#10b981]/30 rounded-xl p-3 shadow-xl"
            >
              <div className="text-xs text-[#10b981]">Taxa de Conv.</div>
              <div className="text-white font-bold text-lg">34.2%</div>
              <div className="text-green-400 text-xs">↑ melhor do setor</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social proof logos */}
      <section className="py-16 border-y border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-600 text-sm mb-8">
            Confiado por times de vendas das maiores empresas do Brasil
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {logos.map((logo, i) => (
              <span
                key={i}
                className="text-slate-600 font-bold text-lg hover:text-slate-400 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="produto" className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#8b5cf6] text-xs tracking-[0.3em] uppercase mb-3"
          >
            Funcionalidades
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-4xl md:text-5xl text-white"
          >
            Tudo que você precisa
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

        {/* Analytics screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-2xl overflow-hidden border border-[#8b5cf6]/20 shadow-[0_0_60px_rgba(139,92,246,0.15)]"
        >
          <img
            src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80&auto=format&fit=crop"
            alt="analytics"
            className="w-full rounded-lg border border-[#8b5cf6]/20"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#1e293b]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#8b5cf6] text-xs tracking-[0.3em] uppercase mb-3">Como Funciona</p>
            <h2 className="font-extrabold text-4xl text-white">Setup em 3 passos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center relative"
              >
                <div
                  className="w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center font-extrabold text-xl text-white"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}
                >
                  {step.n}
                </div>
                {i < 2 && (
                  <div className="absolute top-7 left-[calc(50%+28px)] right-0 h-px bg-gradient-to-r from-[#8b5cf6] to-transparent hidden md:block" />
                )}
                <h3 className="font-bold text-xl text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precos" className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#8b5cf6] text-xs tracking-[0.3em] uppercase mb-3">Planos</p>
          <h2 className="font-extrabold text-4xl md:text-5xl text-white mb-2">
            Simples, justo, transparente
          </h2>
          <p className="text-slate-400">14 dias grátis em qualquer plano. Sem cartão de crédito.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} index={i} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#8b5cf6] text-xs tracking-[0.3em] uppercase mb-3">Depoimentos</p>
          <h2 className="font-extrabold text-4xl text-white">Times que amam o FluxCRM</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#8b5cf6] text-xs tracking-[0.3em] uppercase mb-3">FAQ</p>
          <h2 className="font-extrabold text-4xl text-white">Dúvidas frequentes</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(99,102,241,0.1), rgba(6,182,212,0.05))' }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-extrabold text-4xl md:text-6xl text-white mb-6"
          >
            Pronto para vender<br />
            <span className="gradient-text">mais e melhor?</span>
          </motion.h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Junte-se a 500+ times de vendas que já escolheram o FluxCRM. 14 dias grátis, sem compromisso.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-purple-500/30"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}
          >
            <FaRocket size={18} /> Criar Conta Gratuita
          </a>
          <p className="text-slate-600 text-sm mt-4">
            14 dias grátis · Sem cartão de crédito · Setup em 10 minutos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 font-extrabold text-lg mb-3">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}
                >
                  <FaBolt className="text-white" size={10} />
                </div>
                <span className="gradient-text">FluxCRM</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                O CRM que times de vendas modernos realmente usam. Pipeline visual, IA integrada, resultados reais.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              {[
                { title: 'Produto', links: ['Funcionalidades', 'Preços', 'Segurança', 'Roadmap'] },
                { title: 'Empresa', links: ['Sobre', 'Blog', 'Carreiras', 'Imprensa'] },
                { title: 'Suporte', links: ['Documentação', 'API', 'Status', 'Contato'] },
              ].map((col, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-white mb-3">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#1e293b] pt-6">
            <p className="text-slate-600 text-xs">© 2024 FluxCRM Tecnologia. CNPJ 00.000.000/0001-00.</p>
            <div className="flex gap-4">
              {[FaGithub, FaTwitter, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-600 hover:text-[#8b5cf6] transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
