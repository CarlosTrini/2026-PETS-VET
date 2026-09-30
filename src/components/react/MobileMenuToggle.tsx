import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  navLinks: NavLink[];
  whatsappLink: string;
}

export default function MobileMenuToggle({ navLinks, whatsappLink }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);


  return (
    <>
      {/* Burger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-text hover:bg-primary-light transition-colors"
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <nav
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl flex flex-col pt-6 pb-8 px-6 lg:hidden"
            aria-label="Menú de navegación móvil"
          >
            {/* Logo area */}
            <div className="flex items-center justify-between mb-8">
              <span className="font-display font-bold text-xl text-secondary">
                Pets<span className="text-primary">Vet</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar menú"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Nav Links */}
            <ul className="flex flex-col gap-1 flex-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center py-3 px-3 rounded-xl text-text hover:text-primary hover:bg-primary-light font-medium text-base transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2.5 bg-[#25d366] text-white py-3.5 rounded-2xl font-semibold text-base hover:bg-[#20bd5a] transition-colors mt-4"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </nav>
        </>
      )}
    </>
  );
}
