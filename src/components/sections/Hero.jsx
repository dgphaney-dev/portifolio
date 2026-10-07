import React from 'react';
import { 
  ArrowRight, 
  User, 
  ChevronDown, 
  GraduationCap,
  Code2,
  Trophy,
  Award,
  GitCommit,
  Terminal,
  ExternalLink,
  Eye
} from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import { portfolioData } from '../../data/portfolioData';
import DeveloperAvatar3D from '../3d/DeveloperAvatar3D';

export default function Hero({ visitorCount }) {
  const { personal } = portfolioData;

  const badges = [
    {
      id: 1,
      title: 'ADS @ Católica (UCB)',
      icon: GraduationCap,
      delay: 'animate-float',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: 2,
      title: 'Python & React Dev',
      icon: Code2,
      delay: 'animate-float-delay-1',
      color: 'from-cyan-400 to-blue-600',
    },
    {
      id: 3,
      title: 'Handebol @ UCB',
      icon: Trophy,
      delay: 'animate-float-delay-2',
      color: 'from-amber-400 to-yellow-600',
    },
    {
      id: 4,
      title: 'FIAP & AWS Certificado',
      icon: Award,
      delay: 'animate-float-delay-3',
      color: 'from-emerald-400 to-teal-600',
    },
    {
      id: 5,
      title: '959+ Contribuições Git',
      icon: GitCommit,
      delay: 'animate-float-delay-1',
      color: 'from-fuchsia-500 to-pink-600',
    },
  ];

  return (
    <section id="home" className="relative pt-20 pb-16 overflow-hidden">
      {/* Banner Cósmico Translúcido (Permite que as estrelas do fundo brilhem) */}
      <div className="relative w-full h-[220px] sm:h-[260px] fade-mask overflow-hidden bg-gradient-to-r from-transparent via-purple-900/15 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/15 via-purple-500/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Card de Perfil que Sobrepõe o Banner (-mt-24) */}
        <div className="glass-ultra rounded-3xl p-6 sm:p-9 -mt-24 sm:-mt-28 mb-12 relative shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Esquerda: Avatar + Glitch Name + Bio */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Foto com Anel Luminoso e Float */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full blur-md opacity-40 group-hover:opacity-80 transition duration-700 animate-pulse pointer-events-none" />
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full ring-4 ring-indigo-500/50 object-cover object-center shadow-2xl animate-float bg-slate-900"
                />
              </div>

              {/* Textos */}
              <div className="max-w-xl">
                {/* Nome Douglas Phaney Limpo e Premium */}
                <h2 className="text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-2">
                  <span className="hero-name-premium">
                    {personal.name}
                  </span>
                </h2>

                {/* Subtítulo Tecnológico */}
                <p className="text-xs sm:text-base font-semibold text-purple-300/90 font-mono mb-2">
                  Estudante de Análise e Desenvolvimento de Sistemas (ADS)
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-prose">
                  Graduando na <span className="text-white font-semibold">Universidade Católica de Brasília (UCB)</span>. 
                  Desenvolvedor com foco em <span className="text-cyan-300 font-semibold">Python</span>,{' '}
                  <span className="text-amber-300 font-semibold">MySQL</span> e{' '}
                  <span className="text-purple-300 font-semibold">React</span>, construindo sistemas completos do desktop à nuvem.
                </p>

                {/* Status Pills */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5 mt-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {personal.availability}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-slate-400 bg-white/[0.04] border border-white/[0.08]">
                    Brasília, DF • Remoto & Híbrido
                  </span>
                  <a
                    href="https://hits.sh/douglasphaney-dev.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all cursor-pointer"
                    title="Contador real em nuvem - Clique para abrir o painel de acessos"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Visitas:</span>
                    <img
                      src="https://hits.sh/douglasphaney-dev.github.io.svg?style=flat-square&label=&color=06b6d4&labelColor=0b0f19"
                      alt="Contador Real de Visitas"
                      className="h-3.5 rounded"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Direita: Badges Flutuantes com Diamond Gleam Tooltip (Estilo Caio Duque) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3.5 shrink-0">
              {badges.map((badge) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={badge.id}
                    className={`tooltip-diamond relative group cursor-pointer ${badge.delay}`}
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#131726] border border-white/[0.12] hover:border-cyan-400/60 p-2 sm:p-2.5 flex items-center justify-center text-slate-300 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/40 group-hover:scale-115 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-6" />
                    </div>
                    <span>{badge.title}</span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Linha de Ações Rápidas (Stardust Buttons) */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
            <a href="#projetos" className="btn-star">
              <span>Ver Projetos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a href="#sobre" className="btn-star">
              <User className="w-3.5 h-3.5 text-purple-400" />
              <span>Sobre Mim</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-star"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-star"
            >
              <Linkedin className="w-3.5 h-3.5 text-purple-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Quadro Interativo com o Script Python */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              Terminal Interativo • Execução em Tempo Real
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Código limpo, lógica consistente e aprendizado contínuo.
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
              Passe o mouse sobre o quadro de execução ao lado para assistir à digitação dinâmica em tempo real do script de autodescrição do desenvolvedor.
            </p>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <DeveloperAvatar3D />
          </div>
        </div>

      </div>

      {/* Indicação Discreta de Scroll */}
      <div className="flex flex-col items-center gap-1 mt-12 text-slate-500 text-[10px] font-mono tracking-widest uppercase pointer-events-none animate-bounce">
        <span>Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-purple-400" />
      </div>
    </section>
  );
}
