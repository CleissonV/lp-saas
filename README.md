<h1 align="center">FluxCRM — SaaS Landing Page</h1>

<p align="center">
  Landing page completa para plataforma SaaS de gestão de projetos e clientes, com planos de preços, FAQ accordion e depoimentos em glassmorphism.
  <br /><br />
  <a href="https://lp-saas.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Landing page para SaaS de CRM. Hero com orbs animados em CSS e texto com gradiente dinâmico. Cards de features com glassmorphism e efeito hover. FAQ com accordion animado via AnimatePresence. Marquee duplo de integrações.

## Funcionalidades

- Hero com orbs flutuantes (CSS animations) e gradient-text animado
- 6 feature cards com glassmorphism e hover com glow violet
- Marquee duplo de integrações (marqueeLeft + marqueeRight)
- 3 planos de preços com destaque no Pro
- FAQ com accordion animado (AnimatePresence)
- 3 depoimentos com cartões glass
- Footer 4-colunas completo

## Stack

- **React 18 + TypeScript** — componentes tipados
- **Tailwind CSS 3** — utility-first
- **Framer Motion 11** — accordion, fade-ins, spring
- **Vite 5** — build ultrarrápido
- **react-icons** — ícones consistentes

## Instalação

```bash
git clone https://github.com/CleissonV/lp-saas
cd lp-saas
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts           # features, pricing, testimonials, faq, footer
├── types/
│   └── index.ts          # Feature, PricingPlan, Testimonial, FAQItem
├── components/
│   └── ui/
│       ├── FeatureCard.tsx
│       ├── PricingCard.tsx
│       └── FAQItem.tsx
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Integrations.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTAStrip.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)
