import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Stats() {
  const { stats } = portfolioData;

  return (
    <section className="relative z-10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
