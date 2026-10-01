import React from 'react';
import { 
  Code2, 
  Smartphone, 
  TrendingUp, 
  Zap, 
  MapPin, 
  Calendar, 
  Briefcase, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, differentials } = portfolioData;

  const iconMap = {
    Code2: Code2,
    Smartphone: Smartphone,
    TrendingUp: TrendingUp,
    Zap: Zap,
  };

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Conheça Mais
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sobre Mim & O que Posso Agregar à sua Equipe
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Mais do que escrever linhas de código: meu objetivo é construir produtos digitais robustos, intuitivos e orientados a resultados.
          </p>
        </div>

        {/* Bio & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Bio Card */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-500/40 shadow-lg shadow-indigo-500/10 bg-slate-950">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
                    ADS na Católica
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {personal.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {personal.role}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base mb-4">
                {personal.bio}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Estou sempre aprimorando minhas competências técnicas e me aprofundando em arquitetura de software, componentização reutilizável e integração contínua. Tenho facilidade em me comunicar, trabalhar em equipe com metodologia ágil (Scrum/Kanban) e receber feedbacks construtivos para evoluir sempre.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>CLT, PJ ou Estágio</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Disponibilidade Rápida</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                <span>ADS na Católica (Em andamento)</span>
              </div>
            </div>
          </div>

          {/* Differentials / Why Hire Me */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Code2;
              return (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/70 hover:border-indigo-500/40 hover:bg-slate-900/70 transition-all duration-300 group flex flex-col"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
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
