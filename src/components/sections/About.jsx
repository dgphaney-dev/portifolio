import React from 'react';
import { 
  Code2, 
  Database, 
  Layers, 
  Sparkles, 
  GraduationCap, 
  CheckCircle,
  MapPin
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  const { personal, aboutCards } = portfolioData;

  const iconMap = {
    Code2,
    Database,
    Layers,
    Sparkles,
  };

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#080812]">
      {/* Glow Suave de Fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Conheça Minha Trajetória
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sobre Mim & Paixão por Construir Sistemas
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Estudante de Análise e Desenvolvimento de Sistemas focado em compreender a arquitetura e engenharia de software de ponta a ponta.
          </p>
        </div>

        {/* Grid: Composição Visual + Texto + Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Card Principal: Foto + Bio + Católica */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between shadow-2xl">
            <div>
              {/* Header com Avatar Real do Douglas */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-6 border-b border-white/[0.06]">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-purple-500/40 shadow-xl shadow-purple-500/10 bg-[#080812]">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    ADS na Católica
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {personal.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Estudante de Análise e Desenvolvimento de Sistemas
                  </p>
                </div>
              </div>

              {/* Texto Focado em Curiosidade, Sistemas Completos e Aprendizado */}
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                {personal.bio}
              </p>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                Minha jornada é guiada pelo desejo constante de solucionar problemas reais: desde a concepção de interfaces web ágeis até a automação de processos, conexões desktop seguras e modelagem de bancos de dados consistentes.
              </p>
            </div>

            {/* Badges Rápidas */}
            <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{personal.availability}</span>
              </div>
            </div>
          </div>

          {/* 4 Cards de Destaque Requeridos */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutCards.map((card, idx) => {
              const Icon = iconMap[card.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#0D0D18]/70 border border-white/[0.07] hover:border-purple-500/40 hover:bg-[#11111F] transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-cyan-300 transition-all mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-purple-400 block mb-1">
                      {card.title}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                      {card.subtitle}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
