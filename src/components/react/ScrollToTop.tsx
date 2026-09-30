import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroHeight = document.querySelector('#inicio')?.clientHeight ?? 600;

    const handleScroll = () => {
      setVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Regresar al inicio de la página"
      title="Subir al inicio"
      className={`
        fixed bottom-24 right-5 z-50 w-12 h-12 rounded-full
        bg-primary text-white shadow-lg
        flex items-center justify-center
        hover:bg-primary-dark hover:scale-110
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <ArrowUp size={20} strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
