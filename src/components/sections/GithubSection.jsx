import React, { useState, useEffect } from 'react';
import { ExternalLink, GitCommit, Flame, Code, Sparkles, FolderGit2, Star, GitFork, BookOpen } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import { Github } from '../Icons';
import { portfolioData } from '../../data/portfolioData';

export default function GithubSection() {
  const { personal } = portfolioData;
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  // Busca repositórios públicos em tempo real diretamente da API do GitHub
  useEffect(() => {
    fetch('https://api.github.com/users/dgphaney-dev/repos?sort=updated&per_page=6')
      .then((res) => {
        if (!res.ok) throw new Error('Falha ao carregar repositórios');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch((err) => {
        console.warn('GitHub API rate limit ou erro:', err);
      })
      .finally(() => {
        setLoadingRepos(false);
      });
  }, []);

  const calendarTheme = {
    dark: ['#121226', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  const calendarLabels = {
    totalCount: '{{count}} contribuições registradas no último ano',
    legend: {
      less: 'Menos',
      more: 'Mais',
    },
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  };

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
                    Sincronizado ao Vivo
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Perfil oficial: <a href="https://github.com/dgphaney-dev" target="_blank" rel="noopener noreferrer" className="font-mono text-purple-400 hover:text-purple-300 underline underline-offset-2">@dgphaney-dev</a>
                </p>
              </div>
            </div>

            {/* Ações e Contribuições */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-[#080812] border border-white/[0.08] flex items-center gap-2.5">
                <GitCommit className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Dedicação Total</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">724+ contribuições</span>
                </div>
              </div>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/25 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Ver Perfil GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Gráfico de Contribuições Dinâmico Direto do GitHub */}
          <div className="rounded-2xl bg-[#080812]/90 border border-white/[0.08] hover:border-purple-500/40 p-5 sm:p-7 mb-8 overflow-x-auto shadow-inner flex flex-col items-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <div className="min-w-[680px] w-full flex items-center justify-center text-slate-300">
              <GitHubCalendar
                username="dgphaney-dev"
                colorScheme="dark"
                theme={calendarTheme}
                labels={calendarLabels}
                fontSize={12}
                blockSize={13}
                blockMargin={4}
                errorMessage="Conectando aos dados ao vivo do GitHub..."
              />
            </div>
          </div>

          {/* Repositórios Públicos Conectados ao Vivo */}
          {repos.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                Repositórios Públicos Recentes no GitHub
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {repos.slice(0, 6).map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#080812]/80 border border-white/[0.06] hover:border-cyan-400/50 hover:bg-[#111122] hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                          {repo.name}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-2 mb-3">
                        {repo.description || 'Repositório prático de desenvolvimento de software.'}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-2 border-t border-white/[0.04]">
                      {repo.language && (
                        <span className="flex items-center gap-1.5 font-medium text-slate-300 group-hover:text-white transition-colors">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-slate-400 group-hover:text-amber-300 transition-colors">
                        <Star className="w-3 h-3 text-amber-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="text-[10px] text-slate-500 ml-auto font-mono">
                        {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

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
                <div key={idx} className="flex items-center gap-2 p-1 px-2 rounded-lg hover:bg-white/[0.05] transition-colors cursor-default">
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
