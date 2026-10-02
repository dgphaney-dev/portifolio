import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Layers, 
  Sparkles, 
  GraduationCap, 
  CheckCircle,
  MapPin,
  Trophy,
  Award,
  Users
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
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
                    ADS na Católica (UCB)
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
                  className="p-6 rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] hover:border-purple-500/60 hover:bg-[#111124] transition-all duration-300 group flex flex-col justify-between shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-2 hover:scale-[1.02] cursor-default"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-125 group-hover:rotate-6 group-hover:bg-purple-500/20 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-purple-400 block mb-1 group-hover:text-cyan-400 transition-colors">
                      {card.title}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                      {card.subtitle}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2 group-hover:text-slate-300 transition-colors">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bloco Especial: Além do Código - Atleta Universitário (UCB / JUDF) */}
        <div className="rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group/athlete">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 blur-[130px] pointer-events-none group-hover/athlete:opacity-100 transition-opacity" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Texto & Conquistas */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                Além do Código · Atleta Universitário
              </div>

              <h3 className="text-2xl font-bold text-white">
                Disciplina, Resiliência & Trabalho em Equipe
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Além do desenvolvimento de software, represento a <span className="text-white font-semibold">Universidade Católica de Brasília (UCB)</span> nos <span className="text-cyan-300 font-semibold">Jogos Universitários do Distrito Federal (JUDF)</span>.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                A rotina de treinos e campeonatos fortaleceu valores essenciais para o mercado de tecnologia: comunicação clara, foco sob pressão, espírito de liderança e busca obstinada por evolução constante a cada partida e a cada projeto.
              </p>

              {/* Badges de Destaque Esportivo */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#11111F] border border-white/[0.08] hover:border-amber-400/50 hover:bg-[#16162a] text-xs font-medium text-amber-300 flex items-center gap-1.5 transition-all duration-200 hover:scale-105 cursor-default">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  Premiado no JUDF
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#11111F] border border-white/[0.08] hover:border-cyan-400/50 hover:bg-[#16162a] text-xs font-medium text-cyan-300 flex items-center gap-1.5 transition-all duration-200 hover:scale-105 cursor-default">
                  <Users className="w-3.5 h-3.5 text-cyan-300" />
                  Atleta UCB (Católica)
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#11111F] border border-white/[0.08] hover:border-emerald-400/50 hover:bg-[#16162a] text-xs font-medium text-emerald-300 flex items-center gap-1.5 transition-all duration-200 hover:scale-105 cursor-default">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />
                  Cooperação & Disciplina
                </span>
              </div>
            </div>

            {/* Duas Fotos Reais da UCB e JUDF */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {/* Foto 1: Troféu JUDF */}
              <div className="relative group/photo rounded-2xl overflow-hidden border border-white/[0.1] hover:border-amber-400/60 bg-[#080812] shadow-xl aspect-[3/4] transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]">
                <img
                  src={personal.trophyPhoto}
                  alt="Douglas Phaney com troféu do JUDF pela UCB"
                  className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-[#080812]/80 px-2 py-0.5 rounded backdrop-blur-sm group-hover/photo:bg-amber-500/20 group-hover/photo:text-amber-200 transition-colors">
                  Premiação JUDF 🏆
                </span>
              </div>

              {/* Foto 2: Em quadra UCB */}
              <div className="relative group/photo rounded-2xl overflow-hidden border border-white/[0.1] hover:border-cyan-400/60 bg-[#080812] shadow-xl aspect-[3/4] transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                <img
                  src={personal.sportsPhoto}
                  alt="Douglas Phaney em quadra representando a UCB"
                  className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-[#080812]/80 px-2 py-0.5 rounded backdrop-blur-sm group-hover/photo:bg-cyan-500/20 group-hover/photo:text-cyan-200 transition-colors">
                  Em Quadra · UCB
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
