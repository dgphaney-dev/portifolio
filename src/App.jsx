import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/3d/ParticleBackground';
import CustomCursor from './components/ui/CustomCursor';
import SpotlightEffect from './components/ui/SpotlightEffect';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import FeaturedProject from './components/sections/FeaturedProject';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

import { Sparkles, MessageSquare, MapPin, Eye } from 'lucide-react';

import { useVisitorCount } from './hooks/useVisitorCount';

function App() {
  const visitorCount = useVisitorCount();

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Nebula background cósmica */}
      <div className="nebula-bg" />

      {/* Cursor interativo para desktop */}
      <CustomCursor />

      {/* Partículas e iluminação de fundo */}
      <ParticleBackground />
      <SpotlightEffect />

      {/* Estrutura de conteúdo principal */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero visitorCount={visitorCount} />
          <Stats />
          <About />
          <TechStack />
          <FeaturedProject />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer visitorCount={visitorCount} />
      </div>

      {/* Floating Visitor Pill (Bottom-Left Caio Duque style) */}
      <aside aria-label="Status do visitante" className="visitor-counter hidden sm:flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <span className="font-semibold text-xs tracking-wide text-white">Douglas Phaney</span>
        <span className="text-slate-500">•</span>
        <div className="flex items-center" title="Contador de visitantes únicos em tempo real">
          <span className="inline-flex items-center rounded overflow-hidden text-[10px] font-mono leading-none border border-cyan-500/30 shadow-sm">
            <span className="bg-[#0b0f19] text-slate-300 px-1.5 py-0.5 font-semibold">VISITAS</span>
            <span className="bg-[#06b6d4] text-slate-950 font-bold px-1.5 py-0.5">{visitorCount}</span>
          </span>
        </div>
        <span className="text-slate-500">•</span>
        <span className="text-[11px] text-emerald-400 font-mono">Online</span>
      </aside>

      {/* Floating Action Button with Pulsing Aura (Bottom-Right Caio Duque style) */}
      <aside aria-label="Ação rápida" className="floating-action-container">
        <div className="floating-aura" />
        <a
          href="#contato"
          className="relative flex items-center justify-center w-12 h-12 rounded-full glass-ultra text-cyan-300 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl border border-white/20 group"
          title="Fale comigo ou envie uma proposta"
        >
          <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0b0f19] animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0b0f19]" />
        </a>
      </aside>
    </div>
  );
}

export default App;
