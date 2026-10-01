import React from 'react';
import { 
  ArrowRight, 
  User, 
  ChevronDown, 
  Sparkles,
  Layers,
  Terminal
} from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import { portfolioData } from '../../data/portfolioData';
import TechOrb3D from '../3d/TechOrb3D';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Glows de Fundo Ambientais */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Esquerda: Apresentação e Botões */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge de Disponibilidade & Foto */}
            <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#0D0D18]/90 border border-white/[0.08] shadow-lg mb-6 backdrop-blur-md">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-500/40">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{personal.availability}</span>
              </div>
            </div>

            {/* Nome */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-3">
              <span className="bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            {/* Título Oficial */}
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-magenta-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              {personal.role}
            </h2>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg font-medium text-slate-200 mb-4 italic">
              “{personal.tagline}”
            </p>

            {/* Descrição Profissional Curta */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {personal.shortBio}
            </p>

            {/* Botões Requeridos com Microinterações */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10">
              {/* Ver Projetos */}
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Sobre Mim */}
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-200 bg-[#0D0D18]/90 hover:bg-[#11111F] border border-white/[0.08] hover:border-purple-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <User className="w-3.5 h-3.5 text-purple-400" />
                <span>Sobre Mim</span>
              </a>

              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs text-slate-300 bg-[#0D0D18]/80 hover:bg-[#11111F] border border-white/[0.08] hover:text-white hover:border-white/20 transition-all"
                title="GitHub Douglas Phaney"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs text-slate-300 bg-[#0D0D18]/80 hover:bg-[#11111F] border border-white/[0.08] hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                title="LinkedIn Douglas Phaney"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Mini Terminal Status */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 bg-[#0D0D18]/60 px-3.5 py-1.5 rounded-lg border border-white/[0.05]">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>ADS @ Católica · Python, MySQL & React</span>
            </div>
          </div>

          {/* Coluna Direita: Elemento 3D Interativo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glow sob o 3D */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-magenta-500/10 to-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              <TechOrb3D />
            </div>
          </div>

        </div>
      </div>

      {/* Indicação Discreta de Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 text-[11px] font-mono tracking-widest uppercase pointer-events-none animate-bounce">
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 text-purple-400/80" />
      </div>
    </section>
  );
}
