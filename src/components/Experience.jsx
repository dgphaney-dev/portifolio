import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="trajetoria" className="py-24 relative bg-slate-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Carreira & Conhecimento
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trajetória Profissional & Formação
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Minha evolução contínua, histórico prático e dedicação aos estudos de tecnologia.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Objetivo & Prática</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Educação & Certificações</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative pl-6 sm:pl-8 border-l border-indigo-500/30 space-y-10">
          {activeTab === 'experience' ? (
            experience.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300" />

                <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all shadow-lg hover:shadow-xl hover:shadow-indigo-500/5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-indigo-400 mb-3">
                    {item.company}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.technologies && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/40"
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
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-400 group-hover:scale-125 group-hover:bg-purple-400 transition-all duration-300" />

                <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.course}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-purple-300 border border-slate-700">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-indigo-400 mb-3">
                    {item.institution}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
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
