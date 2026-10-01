import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Experience() {
  const { experience, education } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experiencia" className="py-24 relative overflow-hidden bg-[#080812]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Trajetória & Foco
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiência & Formação Acadêmica
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Minha caminhada prática na programação, projetos desenvolvidos e formação superior na Católica.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0D0D18] border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Objetivo & Prática</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Formação Superior</span>
            </button>
          </div>
        </div>

        {/* Linha do Tempo Vertical */}
        <div className="relative pl-6 sm:pl-8 border-l border-purple-500/30 space-y-10">
          {activeTab === 'experience' ? (
            experience.map((item, index) => (
              <div key={index} className="relative group">
                {/* Marcador da Linha do Tempo com Glow */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080812] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_#22d3ee]" />

                <div className="p-7 sm:p-8 rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#11111F] text-cyan-300 border border-white/[0.08]">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-3">
                    {item.company}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {item.technologies && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#11111F] text-slate-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            education.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080812] border-2 border-purple-400 group-hover:scale-125 group-hover:bg-purple-400 transition-all duration-300 shadow-[0_0_10px_#c084fc]" />

                <div className="p-7 sm:p-8 rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.course}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#11111F] text-purple-300 border border-white/[0.08]">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-3">
                    {item.institution}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
