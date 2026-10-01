import React from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Monitor, 
  Globe, 
  Database, 
  Layers, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Github } from '../Icons';
import { portfolioData } from '../../data/portfolioData';

export default function FeaturedProject() {
  const { featuredProject } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden bg-[#080812]">
      {/* Glow de Destaque */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-purple-600/15 via-magenta-600/10 to-cyan-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {featuredProject.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Arquitetura Integrada: Desktop + Web + Cloud DB
          </h2>
        </div>

        {/* Layout Dividido Esquerda / Direita */}
        <div className="rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-purple-500/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ESQUERDA: Imagem / Mockup do Sistema */}
          <div className="lg:col-span-6 relative group">
            {/* Efeito Glow atrás da imagem */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#080812] shadow-2xl">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-transparent to-transparent opacity-80" />

              {/* Badges Flutuantes sobre o Mockup */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#080812]/90 border border-white/20 text-white backdrop-blur-md">
                  <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                  Desktop PDV
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#080812]/90 border border-white/20 text-white backdrop-blur-md">
                  <Globe className="w-3.5 h-3.5 text-purple-400" />
                  Painel Web
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#080812]/90 border border-white/20 text-white backdrop-blur-md">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  MySQL Cloud
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-slate-300 bg-[#080812]/80 px-3.5 py-2 rounded-xl border border-white/[0.08] backdrop-blur-md flex items-center justify-between">
                <span>Comunicação Sincronizada</span>
                <span className="text-emerald-400 font-bold">ONLINE</span>
              </div>
            </div>
          </div>

          {/* DIREITA: Conteúdo & Detalhes */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                {featuredProject.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2">
                {featuredProject.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-cyan-300 italic mb-4">
                {featuredProject.tagline}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {featuredProject.description}
              </p>
            </div>

            {/* Destaques da Arquitetura */}
            <div className="space-y-2.5">
              {featuredProject.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Badges de Tecnologias */}
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Tecnologias Utilizadas
              </span>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Botão "Explorar projeto" */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-200"
              >
                <span>Explorar Projeto</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-[#11111F] hover:bg-slate-800 border border-white/[0.08] transition-all"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>Ver no GitHub</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
