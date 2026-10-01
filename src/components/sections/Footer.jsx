import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import { portfolioData } from '../../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080812] border-t border-white/[0.08] pt-14 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.05]">
          
          {/* Nome e Texto Requerido */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-2">
              <span className="text-lg font-bold text-white tracking-tight">
                {personal.name}
              </span>
            </a>
            <p className="text-xs text-slate-400 italic">
              “Desenvolvendo, aprendendo e evoluindo.”
            </p>
          </div>

          {/* Links: GitHub, LinkedIn, Email + Voltar ao Topo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0D0D18] hover:bg-[#11111F] text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
                aria-label="GitHub de Douglas Phaney"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0D0D18] hover:bg-[#11111F] text-slate-400 hover:text-cyan-400 border border-white/[0.08] transition-colors"
                aria-label="LinkedIn de Douglas Phaney"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-[#0D0D18] hover:bg-[#11111F] text-slate-400 hover:text-purple-400 border border-white/[0.08] transition-colors"
                aria-label="Enviar E-mail para Douglas Phaney"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 border border-purple-500/20 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              title="Voltar ao início da página"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Topo</span>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {personal.name}. Todos os direitos reservados.</p>
          <p className="font-mono">React 19 · Three.js · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
