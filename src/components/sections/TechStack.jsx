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
  Cpu
} from 'lucide-react';
import { Github } from '../Icons';
import { portfolioData } from '../../data/portfolioData';

export default function TechStack() {
  const { techStack } = portfolioData;
  const [hoveredIdx, setHoveredIdx] = useState(null);

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

  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden bg-[#0D0D18]/50">
      {/* Glow de Fundo */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            My Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologias & Ferramentas
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Stack tecnológica sólida voltada a desenvolvimento full stack, lógica de sistemas, interfaces modernas e bancos de dados.
          </p>
        </div>

        {/* Grade 3D / Floating Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {techStack.map((tech, index) => {
            const Icon = getTechIcon(tech.name);
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative group rounded-2xl p-5 bg-[#080812]/90 border border-white/[0.08] backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-between text-center cursor-default ${
                  isHovered
                    ? 'border-purple-500/60 -translate-y-2 shadow-2xl shadow-purple-500/20 scale-[1.03]'
                    : 'hover:border-white/20'
                }`}
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Glow interno no hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Ícone */}
                <div className="w-12 h-12 rounded-xl bg-[#11111F] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300 mb-3 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Nome */}
                <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </h3>

                {/* Categoria / Detalhe */}
                <span className="text-[11px] text-slate-400 font-mono mt-1">
                  {tech.category}
                </span>

                {/* Ponto indicador de status */}
                <div className="mt-3 w-1.5 h-1.5 rounded-full bg-purple-500/60 group-hover:bg-cyan-400 group-hover:scale-150 transition-all" />
              </div>
            );
          })}
        </div>

        {/* Nota de Honestidade e Aprendizado Contínuo */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Prática contínua de 1 ano e meio com foco em código limpo e arquitetura.</span>
        </div>

      </div>
    </section>
  );
}
