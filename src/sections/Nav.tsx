import { useState, useEffect } from 'react'

const links = ['Funcionalidades', 'Preços', 'Depoimentos', 'FAQ']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold gradient-text">FluxCRM</span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#94a3b8' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#f8fafc')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8')}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-sm font-semibold px-5 py-2 rounded-lg transition-opacity duration-200 hover:opacity-90"
          style={{ background: '#8b5cf6', color: '#fff' }}
        >
          Começar grátis
        </button>
      </div>
    </nav>
  )
}
