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
  Info,
  Flame,
  ShieldCheck,
  Star
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';
import RevealOnScroll from '../ui/RevealOnScroll';

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
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Glow Cósmico Central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-purple-600/15 via-emerald-600/10 to-cyan-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Liquid Gradient Wave */}
        <RevealOnScroll direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {featuredProject.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="projects-text-liquid">Arquitetura Integrada</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400">
              Ponto de Venda de alta performance (Desktop) integrado a Painel Administrativo Web e Cloud Database.
            </p>
          </div>
        </RevealOnScroll>

        {/* Layout Bento Glass-Ultra Dividido Esquerda / Direita */}
        <RevealOnScroll direction="up" delay={120}>
          <div className="rounded-3xl glass-ultra p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
          
          {/* Top-Right Neon Tag Badge (Caio Duque style) */}
          <div className="absolute top-6 right-6 z-20">
            <div className="neon-tag tag-featured">
              <Star />
              <div className="neon-tooltip">Destaque da Arquitetura</div>
            </div>
          </div>

          {/* ESQUERDA: Imagem / Mockup do Sistema com Neon Tags */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0b0f19] shadow-2xl">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />

              {/* Badges Flutuantes sobre o Mockup */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#0b0f19]/90 border border-white/20 text-white backdrop-blur-md">
                  <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                  Desktop PDV
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#0b0f19]/90 border border-white/20 text-white backdrop-blur-md">
                  <Globe className="w-3.5 h-3.5 text-purple-400" />
                  Painel Web
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#0b0f19]/90 border border-white/20 text-white backdrop-blur-md">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  MySQL Cloud
                </span>
              </div>

              {/* Status do Código Proprietário */}
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-slate-300 bg-[#0b0f19]/90 px-3.5 py-2 rounded-xl border border-white/[0.1] backdrop-blur-md flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Lock className="w-3.5 h-3.5" />
                  Código Comercial & Proprietário
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* DIREITA: Conteúdo & Detalhes */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
                  {featuredProject.badge}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                  <Lock className="w-3 h-3" />
                  Privado
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
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
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5 font-mono">
                TECNOLOGIAS UTILIZADAS
              </span>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 hover:border-cyan-400/50 text-emerald-300 hover:text-cyan-200 text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Botões de Ação Stardust */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-star"
              >
                <Info className="w-4 h-4" />
                <span>Explorar Arquitetura</span>
              </button>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-cyan-500/50 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Solicitar Demonstração</span>
              </a>
            </div>

          </div>
        </div>
      </RevealOnScroll>

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
