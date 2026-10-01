import React, { useState } from 'react';
import { ExternalLink, GitCommit, Calendar, Flame, Sparkles } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function GithubStats() {
  const { personal } = portfolioData;
  const [imgSrc, setImgSrc] = useState('/github-contributions.png');

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with Glassmorphism */}
        <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl overflow-hidden group">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-white border border-slate-700 shadow-md">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">Atividade no GitHub</h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <Flame className="w-3 h-3 fill-emerald-400" />
                    Ativo
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Consistência de código, commits e evolução contínua
                </p>
              </div>
            </div>

            {/* Metrics pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2">
                <GitCommit className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Último ano</span>
                  <span className="text-sm font-bold text-emerald-400">724 contribuições</span>
                </div>
              </div>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition-all hover:scale-105"
              >
                <span>Visitar @douglasphaney</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contributions Graph Image Container */}
          <div className="relative rounded-2xl bg-slate-950/80 border border-slate-800/90 p-3 sm:p-5 overflow-x-auto shadow-inner flex flex-col items-center justify-center">
            <div className="min-w-[650px] w-full flex items-center justify-center">
              <img
                src={imgSrc}
                alt="Gráfico de Contribuições do GitHub de Douglas Phaney"
                className="w-full max-h-56 object-contain rounded-xl"
                onError={() => {
                  // Fallback to dynamic github chart if available
                  setImgSrc('https://ghchart.rshah.org/216e39/douglasphaney');
                }}
              />
            </div>
            
            <div className="mt-3 flex items-center justify-between w-full text-[11px] text-slate-500 pt-2 border-t border-slate-900">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Foco diário em estudos, projetos e versionamento com Git
              </span>
              <span className="text-emerald-400/80 font-mono">724 contributions in the last year</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
