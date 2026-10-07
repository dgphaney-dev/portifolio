import React, { useState } from 'react';
import { 
  FileCode, 
  Atom, 
  Database, 
  GitBranch, 
  Cloud, 
  Layers, 
  Terminal, 
  Sparkles,
  Cpu,
  Boxes,
  Server,
  Workflow
} from 'lucide-react';
import { Github } from '../Icons';
import { portfolioData } from '../../data/portfolioData';

export default function TechStack() {
  const { techStack } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const categories = ['Todas', 'Backend', 'Frontend', 'Banco de Dados', 'DevOps & Cloud'];

  const getCategoryGroup = (category) => {
    if (category.includes('Backend') || category.includes('Lógica') || category.includes('Runtime')) return 'Backend';
    if (category.includes('Web') || category.includes('Interfaces') || category.includes('Estilização') || category.includes('Estrutura')) return 'Frontend';
    if (category.includes('Banco')) return 'Banco de Dados';
    if (category.includes('Cloud') || category.includes('Versão') || category.includes('CI')) return 'DevOps & Cloud';
    return 'Geral';
  };

  const getTechIcon = (name) => {
    switch (name) {
      case 'Python':
        return FileCode;
      case 'JavaScript':
        return Terminal;
      case 'React':
        return Atom;
      case 'Node.js':
        return Cpu;
      case 'MySQL':
      case 'SQLite':
        return Database;
      case 'Git':
        return GitBranch;
      case 'GitHub':
        return Github;
      case 'AWS':
        return Cloud;
      default:
        return Layers;
    }
  };

  const filteredTech = techStack.filter((tech) => {
    if (activeFilter === 'Todas') return true;
    return getCategoryGroup(tech.category) === activeFilter;
  });

  return (
    <section id="tecnologias" className="py-28 relative overflow-hidden bg-[#0b0f19]">
      {/* Glow Cósmico de Fundo */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Liquid Gradient Wave */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Skills Constellation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="skills-text-liquid">Habilidades & Tecnologias</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Arquitetura sólida voltada a desenvolvimento full stack, integridade de dados e interfaces modernas.
          </p>
        </div>

        {/* Filtros em Formato de Cápsulas Cósmicas */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grade de Constelação Visual (Caio Duque Glass-Ultra) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {filteredTech.map((tech, index) => {
            const Icon = getTechIcon(tech.name);
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative rounded-2xl p-6 glass-ultra flex flex-col items-center justify-between text-center cursor-pointer select-none transition-all duration-300 ${
                  isHovered ? 'scale-105 shadow-[0_15px_35px_rgba(123,70,255,0.25)] border-purple-500/60' : ''
                }`}
              >
                {/* Glow interno colorido */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${tech.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Ícone com anel neon orbital */}
                <div className="relative mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#0b0f19] border border-white/[0.1] flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] group-hover:border-cyan-500/50 transition-all duration-300 shadow-inner">
                    <Icon className="w-7 h-7 transition-transform" />
                  </div>
                  {/* Ponto orbital cósmico */}
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-purple-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#22d3ee] transition-all" />
                </div>

                {/* Nome */}
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {tech.name}
                </h3>

                {/* Categoria */}
                <span className="text-[11px] text-slate-400 font-mono mt-1 group-hover:text-slate-300 transition-colors">
                  {tech.category}
                </span>

                {/* Linha de Progresso Visual */}
                <div className="mt-4 w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 w-3/4 rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Rodapé da Constelação */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-ultra text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>1 ano e meio de prática focada em código limpo, arquitetura e lógica.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
