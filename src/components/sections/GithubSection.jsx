import React from 'react';
import { ExternalLink, GitCommit, Flame, Code, Sparkles, FolderGit2 } from 'lucide-react';
import { Github } from '../Icons';
import { portfolioData } from '../../data/portfolioData';

export default function GithubSection() {
  const { personal } = portfolioData;

  const languages = [
    { name: 'Python', percent: '40%', color: 'bg-blue-500' },
    { name: 'JavaScript / React', percent: '35%', color: 'bg-amber-400' },
    { name: 'HTML / CSS', percent: '15%', color: 'bg-orange-500' },
    { name: 'SQL / MySQL', percent: '10%', color: 'bg-sky-500' },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0D0D18]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Principal */}
        <div className="rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[130px] pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#080812] border border-white/[0.1] flex items-center justify-center text-white shadow-xl">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Atividade no GitHub</h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <Flame className="w-3 h-3 fill-emerald-400" />
                    Ativo
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Perfil oficial: <span className="font-mono text-purple-400">@douglasphaney</span>
                </p>
              </div>
            </div>

            {/* Ações e Contribuições */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-[#080812] border border-white/[0.08] flex items-center gap-2.5">
                <GitCommit className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Último ano</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">724 contribuições</span>
                </div>
              </div>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
              >
                <span>Ver GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Gráfico de Contribuições Real */}
          <div className="rounded-2xl bg-[#080812]/90 border border-white/[0.08] p-4 sm:p-6 mb-8 overflow-x-auto shadow-inner flex flex-col items-center">
            <div className="min-w-[680px] w-full flex items-center justify-center">
              <img
                src="/github-contributions.png"
                alt="Gráfico de Contribuições do GitHub de Douglas Phaney"
                className="w-full max-h-56 object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Linguagens Mais Utilizadas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-purple-400" />
              Linguagens & Tecnologias nos Repositórios
            </h4>
            
            {/* Barra de Progresso das Linguagens */}
            <div className="w-full h-2 rounded-full overflow-hidden flex gap-0.5 bg-[#080812] mb-3">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className={`h-full ${lang.color}`}
                  style={{ width: lang.percent }}
                  title={`${lang.name}: ${lang.percent}`}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                  <span className="text-slate-300 font-medium">{lang.name}</span>
                  <span className="text-slate-500 font-mono">{lang.percent}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
