import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Campañas', href: '#campanhas' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{ backgroundColor: '#00489c' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
                <circle cx="20" cy="20" r="18" fill="#00489c" />
                {/* Brain icon */}
                <path d="M14 16c0-3 2.5-5 5-4.5C21.5 11 24 13 24 16c0 1.5-.5 2.5-1.5 3.5L20 22l-2.5-2.5C16.5 18.5 14 17.5 14 16z" fill="white" stroke="white" strokeWidth="0.5"/>
                <path d="M20 22v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M17 26h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 20c-1 0-2.5 1-2 3s2 2 3 1.5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                <path d="M26 20c1 0 2.5 1 2 3s-2 2-3 1.5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg leading-none tracking-wide">NEUROMEDIC</span>
              <span className="text-orange-300 font-semibold text-sm block leading-none">JAÉN</span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white text-sm font-medium px-4 py-2 rounded-md transition-all duration-200 hover:text-orange-300 hover:bg-white/10 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="ml-2 bg-accent text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
                style={{ backgroundColor: '#ff5800' }}
              >
                Agendar Cita
              </a>
            </li>
            <li>
              <a
                href="https://neuromedicjaen.com/sistemas/farmacia/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 bg-accent text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
                style={{ backgroundColor: '#ff5800' }}
              >
                Farmacia
              </a>
            </li>
            <li>
              <a
                href="https://neuromedicjaen.com/sistemas/caja/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 bg-accent text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
                style={{ backgroundColor: '#ff5800' }}
              >
                Caja
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#003a7a' }}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-white text-sm font-medium px-4 py-3 rounded-lg hover:bg-white/10 hover:text-orange-300 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="block text-center text-white text-sm font-semibold px-4 py-3 rounded-full mt-2 transition-all duration-200"
            style={{ backgroundColor: '#ff5800' }}
          >
            Agendar Cita
          </a>
          <a
            href="https://neuromedicjaen.com/sistemas/farmacia/login.php"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="block text-center text-white text-sm font-semibold px-4 py-3 rounded-full mt-2 transition-all duration-200"
            style={{ backgroundColor: '#ff5800' }}
          >
            Farmacia
          </a>
          <a
            href="https://neuromedicjaen.com/sistemas/caja/login.php"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="block text-center text-white text-sm font-semibold px-4 py-3 rounded-full mt-2 transition-all duration-200"
            style={{ backgroundColor: '#ff5800' }}
          >
            Caja
          </a>
        </div>
      </div>
    </nav>
  );
}
