import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function Stats() {
  const { stats } = portfolioData;

  return (
    <section className="py-12 relative z-10 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-7 rounded-3xl glass-ultra text-center flex flex-col justify-center cursor-default group"
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-300 font-mono mb-1 group-hover:scale-110 transition-transform duration-300">
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
