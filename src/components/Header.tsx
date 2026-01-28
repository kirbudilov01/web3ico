import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'How it works', href: '#how' },
    { label: 'Features', href: '#features' },
    { label: 'Decks', href: '#decks' },
    { label: 'Prelaunch', href: '#prelaunch' },
    { label: 'Token', href: '#token' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
          scrolled ? 'shadow-sm' : ''
        }`}
        style={{ borderColor: 'rgba(11, 15, 26, 0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'
          }`}>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200"
              aria-label="Scroll to top"
            >
              <img
                src="/assets/photo_2026-01-15_22.22.00.jpeg"
                alt="FABRICBOT ECOSYSTEM"
                className={`transition-all duration-300 ${scrolled ? 'h-8 lg:h-9' : 'h-9 lg:h-10'}`}
              />
              <span className={`font-bold text-dark transition-all duration-300 ${
                scrolled ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'
              }`}>
                FABRICBOT
              </span>
            </button>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-full transition-all duration-200 text-sm font-medium whitespace-nowrap ${
                      isActive
                        ? 'text-dark bg-accent/15'
                        : 'text-neutral-500 hover:text-dark hover:bg-neutral-100/80'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://t.me/fabricbotbot"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden sm:inline-flex px-5 py-2 bg-dark text-white rounded-full text-sm font-medium hover:bg-dark/90 transition-all duration-200 whitespace-nowrap ${
                  scrolled ? 'text-sm' : 'text-sm'
                }`}
              >
                Open App
              </a>

              <button
                className="lg:hidden text-dark hover:text-accent transition-colors duration-200 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 overflow-y-auto ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'rgba(11, 15, 26, 0.08)' }}>
              <span className="text-lg font-bold text-dark">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={24} className="text-dark" />
              </button>
            </div>

            <nav className="p-4 space-y-1" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                      isActive
                        ? 'text-dark bg-accent/15'
                        : 'text-neutral-500 hover:text-dark hover:bg-neutral-100'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="p-4 border-t space-y-3" style={{ borderColor: 'rgba(11, 15, 26, 0.08)' }}>
              <a
                href="https://t.me/fabricbotbot"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-dark text-white rounded-full font-medium hover:bg-dark/90 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Open App
              </a>
              <a
                href="#prelaunch"
                className="block w-full text-center px-6 py-3 border-2 border-dark text-dark rounded-full font-medium hover:bg-dark hover:text-white transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Prelaunch
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
