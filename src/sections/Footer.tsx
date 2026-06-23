import { footerCols } from '../constants/data'

export default function Footer() {
  return (
    <footer
      className="border-t px-6 pt-16 pb-8"
      style={{ borderColor: '#1e293b' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <span className="text-xl font-bold gradient-text">FluxCRM</span>
            <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
              A plataforma de CRM que conecta sua equipe e acelera o crescimento.
            </p>
          </div>

          {/* Link cols */}
          {footerCols.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: '#64748b' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#f8fafc')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#64748b')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t text-sm"
          style={{ borderColor: '#1e293b', color: '#475569' }}
        >
          <p>© 2024 FluxCRM. Todos os direitos reservados.</p>
          <p>Feito com ♥ no Brasil</p>
        </div>
      </div>
    </footer>
  )
}
