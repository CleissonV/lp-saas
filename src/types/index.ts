import type { IconType } from 'react-icons'

export interface Feature {
  icon: IconType
  title: string
  desc: string
  color: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  desc: string
  features: string[]
  cta: string
  highlighted: boolean
}

export interface Testimonial {
  name: string
  role: string
  company: string
  text: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FooterColumn {
  title: string
  links: string[]
}
