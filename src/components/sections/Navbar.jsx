import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Tecnologias', href: '#tecnologias' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detectar seção ativa
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080812]/80 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo DOUGLAS.DEV */}
          {/* Logo Douglas Phaney */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none transition-transform hover:scale-105"
          >
            <span className="font-extrabold text-lg sm:text-xl tracking-wide bg-gradient-to-r from-white via-purple-100 to-cyan-300 bg-clip-text text-transparent group-hover:text-cyan-200 transition-colors">
              Douglas Phaney
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse group-hover:scale-150 transition-transform"></span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0D0D18]/80 px-4 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-purple-600/40 to-cyan-500/30 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border hover:border-white/10'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Direct CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/25 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Fale Comigo</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Hamburger Mobile Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0D0D18] border border-white/[0.08] text-slate-300 hover:text-white focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080812]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-[#11111F] transition-all"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 shadow-md shadow-purple-500/25"
            >
              <span>Fale Comigo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
