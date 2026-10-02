import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function Stats() {
  const { stats } = portfolioData;

  return (
    <section className="py-12 relative z-10 bg-[#080812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] hover:border-purple-500/60 hover:bg-[#111124] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] text-center flex flex-col justify-center cursor-default group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-300 font-mono mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium group-hover:text-cyan-300 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
