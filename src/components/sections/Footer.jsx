import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Eye } from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import { portfolioData } from '../../data/portfolioData';

export default function Footer({ visitorCount }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080c14] border-t border-white/[0.08] pt-14 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.05]">
          
          {/* Logo / Nome com efeito cósmico */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 mb-2 group">
              <span className="text-xl font-black bg-gradient-to-r from-white via-purple-100 to-cyan-300 bg-clip-text text-transparent tracking-wide group-hover:text-cyan-200 transition-colors">
                Douglas Phaney
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </a>
            <p className="text-xs text-slate-400 italic font-mono">
              “Desenvolvendo, aprendendo e evoluindo.”
            </p>
          </div>

          {/* Links Sociais e Voltar ao Topo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-xl glass-ultra text-slate-400 hover:text-white transition-all duration-200"
                aria-label="GitHub de Douglas Phaney"
              >
                <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-xl glass-ultra text-slate-400 hover:text-cyan-400 transition-all duration-200"
                aria-label="LinkedIn de Douglas Phaney"
              >
                <Linkedin className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="group p-2.5 rounded-xl glass-ultra text-slate-400 hover:text-purple-300 transition-all duration-200"
                aria-label="Enviar E-mail para Douglas Phaney"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-star !py-2 !px-3.5 !text-xs cursor-pointer flex items-center gap-1.5"
              title="Voltar ao início da página"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Topo</span>
            </button>
          </div>

        </div>

        {/* Copyright, Visitor Badge & Stack */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4 font-mono">
          <p>© {new Date().getFullYear()} {personal.name} · Brasília, DF</p>

          {/* Badge Contador Real de Visitantes Únicos */}
          <div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 shadow-sm"
            title="Contador de visitantes únicos sincronizado em nuvem"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-slate-300">Visitantes Globais:</span>
            <span className="inline-flex items-center rounded overflow-hidden text-[10px] font-mono leading-none border border-cyan-500/30">
              <span className="bg-[#0b0f19] text-slate-300 px-1.5 py-0.5 font-semibold">TOTAL</span>
              <span className="bg-[#06b6d4] text-slate-950 font-bold px-1.5 py-0.5">{visitorCount}</span>
            </span>
          </div>

          <p className="flex items-center gap-1">
            <span>Construído com</span>
            <span className="text-purple-400 font-bold">React 19</span>
            <span>&</span>
            <span className="text-cyan-400 font-bold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
