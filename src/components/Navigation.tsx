import { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tours', href: '#tours' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D0A07]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group z-50">
          <Compass className="w-8 h-8 text-primary group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-display text-2xl tracking-[0.15em] text-foreground">SOLITUDE</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <span className="text-sm font-medium text-foreground/90 tracking-wider">+94 741780185</span>
        </div>

        <button
          className="lg:hidden z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0D0A07] pt-24 px-6 z-40 flex flex-col"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display tracking-wide text-foreground hover:text-primary transition-colors py-4 px-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto mb-8">
              <a
                href="#tours"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-primary hover:bg-secondary text-white text-center px-6 py-4 rounded-xl font-bold tracking-widest uppercase text-sm transition-colors mb-6"
              >
                Book Now
              </a>
              <div className="pt-6 border-t border-white/10">
                <span className="block text-xs text-foreground/60 mb-2 uppercase tracking-widest">Call Us</span>
                <span className="text-lg font-medium text-primary">+94 741780185</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
