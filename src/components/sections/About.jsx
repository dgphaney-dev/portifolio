import React from 'react';
import { 
  Code2, 
  Database, 
  Layers, 
  Sparkles, 
  GraduationCap, 
  CheckCircle,
  MapPin,
  Target,
  Activity,
  Users,
  Briefcase,
  ArrowRight
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
    <section id="sobre" className="py-28 relative overflow-hidden bg-transparent">
      {/* Glow Suave de Fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Liquid Gradient Wave */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Conheça Minha Trajetória
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="about-text-liquid">Sobre Mim</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Estudante de Análise e Desenvolvimento de Sistemas focado em compreender a arquitetura e engenharia de software de ponta a ponta.
          </p>
        </div>

        {/* Grid Bento Principal (Caio Duque Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Card 1 (Developer & Creator): Foto + Bio + Católica */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl glass-ultra flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              {/* Header com Avatar Real do Douglas */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-6 border-b border-white/[0.08]">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-purple-500/40 shadow-xl shadow-purple-500/20 bg-[#0b0f19]">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/60 via-transparent to-transparent" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    ADS na Católica (UCB)
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {personal.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">
                    Developer & Creator · Brasília, DF
                  </p>
                </div>
              </div>

              {/* Bio & Texto */}
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base mb-4 font-normal">
                {personal.bio}
              </p>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                Minha jornada é guiada pelo desejo constante de solucionar problemas reais: desde a concepção de interfaces web ágeis até a automação de processos, conexões desktop seguras e modelagem de bancos de dados consistentes.
              </p>
            </div>

            {/* Badges Rápidas & Botão de Ação Estelar */}
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{personal.availability}</span>
                </div>
              </div>

              <a href="#projetos" className="btn-star shrink-0">
                <span>Ver Projetos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 4 Cards de Destaque Requeridos */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutCards.map((card, idx) => {
              const Icon = iconMap[card.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl glass-ultra group flex flex-col justify-between cursor-default transition-all duration-300"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-115 group-hover:rotate-6 group-hover:bg-purple-500/20 group-hover:text-cyan-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 block mb-1 group-hover:text-cyan-400 transition-colors font-mono">
                      {card.title}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                      {card.subtitle}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1 group-hover:text-slate-300 transition-colors">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Card 2 Bento: Além do Código - Atleta de Handebol (UCB) */}
        <div className="rounded-3xl glass-ultra p-7 sm:p-9 relative overflow-hidden group/athlete">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 blur-[130px] pointer-events-none group-hover/athlete:opacity-100 transition-opacity" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Texto & Competências */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                Além do Código · Atleta de Handebol
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Disciplina, Foco & Trabalho em Equipe
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Além do desenvolvimento de software, sou atleta de handebol representando a <span className="text-white font-semibold">Universidade Católica de Brasília (UCB)</span>.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                A rotina intensa de treinos e jogos de alto rendimento desenvolve competências fundamentais que levo diretamente para a engenharia de software: comunicação rápida em equipe, visão tática sob pressão, resiliência e busca incansável por evolução e precisão a cada desafio.
              </p>

              {/* Badges de Destaque no Handebol */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-xs font-medium text-cyan-300 flex items-center gap-1.5 transition-all duration-200 hover:scale-105 cursor-default shadow-sm">
                  <Users className="w-3.5 h-3.5 text-cyan-300" />
                  Handebol · UCB (Católica)
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs font-medium text-amber-300 flex items-center gap-1.5 transition-all duration-200 hover:scale-105 cursor-default shadow-sm">
                  <Target className="w-3.5 h-3.5 text-amber-300" />
                  Visão Tática & Foco
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs font-medium text-emerald-300 flex items-center gap-1.5 transition-all duration-200 hover:scale-105 cursor-default shadow-sm">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />
                  Comunicação & Resiliência
                </span>
              </div>
            </div>

            {/* Foto Real de Handebol em Quadra (UCB) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group/photo rounded-2xl overflow-hidden border border-white/[0.12] hover:border-cyan-400/60 bg-[#080812] shadow-2xl w-full max-w-xs sm:max-w-sm aspect-[3/4] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]">
                <img
                  src={personal.handballPhoto}
                  alt="Douglas Phaney em quadra jogando handebol pela UCB"
                  className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-75" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-[#0b0f19]/85 px-3 py-1 rounded-lg backdrop-blur-md border border-white/10 group-hover/photo:bg-cyan-500/20 group-hover/photo:text-cyan-200 transition-colors font-mono">
                  Atleta UCB · Handebol
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
