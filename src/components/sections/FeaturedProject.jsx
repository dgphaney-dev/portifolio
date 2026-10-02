import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Monitor, 
  Globe, 
  Database, 
  Sparkles,
  Lock,
  MessageSquare,
  Info
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';

export default function FeaturedProject() {
  const { featuredProject } = portfolioData;
  const [modalOpen, setModalOpen] = useState(false);

  // Formato compatível com o ProjectModal
  const projectForModal = {
    title: featuredProject.name,
    category: "Full Stack / Desktop & Web",
    description: featuredProject.description,
    longDescription: `${featuredProject.description} Sistema desenvolvido com arquitetura robusta, integrando aplicação desktop para alta velocidade em frente de caixa e painel administrativo web com banco MySQL em nuvem.`,
    tags: featuredProject.technologies,
    image: featuredProject.image,
    highlights: featuredProject.features,
    githubUrl: "#",
    isPrivate: true,
  };

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

              {/* Badge de Repositório Privado no Mockup */}
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-slate-300 bg-[#080812]/90 px-3.5 py-2 rounded-xl border border-white/[0.1] backdrop-blur-md flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Lock className="w-3.5 h-3.5" />
                  Código Proprietário / Privado
                </span>
                <span className="text-emerald-400 font-bold">ONLINE</span>
              </div>
            </div>
          </div>

          {/* DIREITA: Conteúdo & Detalhes */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                  {featuredProject.badge}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                  <Lock className="w-3 h-3" />
                  Repositório Privado
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
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
                    className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/25 hover:border-cyan-400/50 hover:bg-purple-500/20 text-purple-300 hover:text-cyan-200 text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/25 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Info className="w-4 h-4" />
                <span>Explorar Arquitetura</span>
              </button>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-300 hover:text-white bg-[#11111F] hover:bg-[#1a1a2e] border border-white/[0.08] hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Solicitar Demonstração</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Modal de Detalhes do Projeto */}
      {modalOpen && (
        <ProjectModal
          project={projectForModal}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
