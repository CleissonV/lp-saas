import { LuKanban, LuZap, LuBarChart2, LuLink2, LuUsers, LuSmartphone } from 'react-icons/lu'
import type { Feature, PricingPlan, Testimonial, FAQItem, FooterColumn } from '../types'

export const features: Feature[] = [
  {
    icon: LuKanban,
    title: 'Pipeline Visual',
    desc: 'Visualize o fluxo de cada projeto com Kanban drag-and-drop intuitivo e personalizável.',
    color: '#8b5cf6',
  },
  {
    icon: LuZap,
    title: 'Automação de Tarefas',
    desc: 'Configure gatilhos e deixe o FluxCRM trabalhar por você, economizando horas toda semana.',
    color: '#06b6d4',
  },
  {
    icon: LuBarChart2,
    title: 'Analytics em Tempo Real',
    desc: 'Dashboards que mostram o que realmente importa para o crescimento do seu negócio.',
    color: '#6366f1',
  },
  {
    icon: LuLink2,
    title: '+50 Integrações',
    desc: 'Conecte com Slack, Google, Notion, Zapier e muito mais em poucos cliques.',
    color: '#8b5cf6',
  },
  {
    icon: LuUsers,
    title: 'Colaboração em Equipe',
    desc: 'Comentários, menções e histórico completo de atividades para todos os membros.',
    color: '#06b6d4',
  },
  {
    icon: LuSmartphone,
    title: 'Acesso Mobile',
    desc: 'App nativo iOS e Android para sua equipe trabalhar de qualquer lugar do mundo.',
    color: '#6366f1',
  },
]

export const pricing: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'R$ 97',
    period: '/mês',
    desc: 'Perfeito para pequenas equipes começando a organizar seus projetos.',
    features: ['5 usuários', '20 projetos', '10GB de storage', 'Suporte por email'],
    cta: 'Começar grátis',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 'R$ 197',
    period: '/mês',
    desc: 'Para equipes que querem escalar com automações e integrações avançadas.',
    features: [
      'Usuários ilimitados',
      'Projetos ilimitados',
      '100GB de storage',
      'Automações avançadas',
      'Suporte prioritário',
    ],
    cta: 'Começar com Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    desc: 'Solução completa para grandes empresas com necessidades customizadas.',
    features: [
      'Tudo do Pro',
      'SSO e SAML',
      'SLA 99.9%',
      'Gerente de conta dedicado',
      'On-premise disponível',
    ],
    cta: 'Falar com vendas',
    highlighted: false,
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Marina Costa',
    role: 'CEO',
    company: 'Vertice Studio',
    text: 'O FluxCRM reduziu nosso tempo de onboarding em 60%. A automação de tarefas é surreal. Nunca imaginei que seria tão simples.',
  },
  {
    name: 'Rafael Oliveira',
    role: 'Head of Ops',
    company: 'GrowLab',
    text: 'Finalmente um CRM que a equipe realmente usa. A integração com Slack foi decisiva para nossa adoção.',
  },
  {
    name: 'Juliana Mendes',
    role: 'Fundadora',
    company: 'Mosaic Digital',
    text: 'Saímos de planilhas caóticas para um sistema que cresce com a gente. A melhor decisão que tomamos esse ano.',
  },
]

export const faq: FAQItem[] = [
  {
    question: 'Posso usar sem cartão de crédito?',
    answer: 'Sim! Oferecemos 14 dias grátis, sem necessidade de cartão de crédito. Você só paga se quiser continuar.',
  },
  {
    question: 'Como funciona a migração de dados?',
    answer: 'Nossa equipe de onboarding migra todos os seus dados de forma gratuita e sem downtime, independente do volume.',
  },
  {
    question: 'O plano Pro inclui todas as integrações?',
    answer: 'Sim, +50 integrações nativas estão disponíveis no plano Pro, incluindo Slack, Google, Notion e Zapier.',
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim, sem multa e sem burocracia. Você pode cancelar com um clique direto no painel.',
  },
  {
    question: 'Tem suporte em português?',
    answer: 'Sim, nosso suporte é 100% em PT-BR via chat, email e telefone, nos planos Pro e Enterprise.',
  },
]

export const footerCols: FooterColumn[] = [
  {
    title: 'Produto',
    links: ['Funcionalidades', 'Preços', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Empresa',
    links: ['Sobre', 'Blog', 'Carreiras', 'Imprensa'],
  },
  {
    title: 'Suporte',
    links: ['Docs', 'Status', 'Contato', 'Comunidade'],
  },
  {
    title: 'Legal',
    links: ['Privacidade', 'Termos', 'Cookies'],
  },
]

export const integrations: [string[], string[]] = [
  ['Slack', 'Google Drive', 'Notion', 'Zapier', 'GitHub', 'Trello', 'HubSpot', 'Salesforce', 'Stripe', 'Jira'],
  ['Figma', 'Dropbox', 'Zoom', 'WhatsApp', 'Calendly', 'Asana', 'Monday', 'Linear', 'Intercom', 'Twilio'],
]

export const stats = [
  { value: '12.000+', label: 'Empresas' },
  { value: '98%', label: 'Satisfação' },
  { value: '40%', label: 'Mais produtividade' },
  { value: '5★', label: 'Avaliação' },
]
