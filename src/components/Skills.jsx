import React, { useState } from 'react';
import { 
  Atom, 
  Code, 
  FileCode, 
  Palette, 
  Globe, 
  Layout, 
  Server, 
  Cpu, 
  Network, 
  Database, 
  Layers, 
  ShieldCheck, 
  GitBranch, 
  Zap, 
  Box, 
  Cloud, 
  Send,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const iconComponents = {
    Atom,
    Code,
    FileCode,
    Palette,
    Globe,
    Layout,
    Server,
    Cpu,
    Network,
    Database,
    Layers,
    ShieldCheck,
    GitBranch,
    Zap,
    Box,
    Cloud,
    Send,
  };

  const categories = [
    { id: 'all', name: 'Todas as Habilidades' },
    { id: 'frontend', name: 'Front-end' },
    { id: 'backend', name: 'Back-end' },
    { id: 'tools', name: 'DevOps & Ferramentas' },
  ];

  const getSkillsToDisplay = () => {
    if (activeTab === 'frontend') return [{ category: 'Front-end', list: skills.frontend, color: 'from-cyan-500 to-blue-500' }];
    if (activeTab === 'backend') return [{ category: 'Back-end', list: skills.backend, color: 'from-emerald-500 to-teal-500' }];
    if (activeTab === 'tools') return [{ category: 'DevOps & Ferramentas', list: skills.tools, color: 'from-purple-500 to-indigo-500' }];
    return [
      { category: 'Front-end & Interfaces', list: skills.frontend, color: 'from-cyan-500 to-blue-500' },
      { category: 'Back-end & Arquitetura', list: skills.backend, color: 'from-emerald-500 to-teal-500' },
      { category: 'DevOps, Ferramentas & Cloud', list: skills.tools, color: 'from-purple-500 to-indigo-500' },
    ];
  };

  return (
    <section id="habilidades" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Conhecimento Técnico
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologias & Ferramentas que Domino
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Stack moderna e orientada às demandas reais do mercado de tecnologia atual.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {getSkillsToDisplay().map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${group.color}`}></span>
                {group.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {group.list.map((skill, index) => {
                  const Icon = iconComponents[skill.icon] || Sparkles;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 flex flex-col items-center text-center"
                    >
                      <div className="w-12 h-12 rounded-xl bg-slate-800/70 flex items-center justify-center text-indigo-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform mb-3">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 mt-1 px-2 py-0.5 rounded bg-slate-800/50">
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
