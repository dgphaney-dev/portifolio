import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  Search, 
  Sparkles, 
  Layers, 
  Info,
  ArrowUpRight
} from 'lucide-react';
import { Github } from '../Icons';
import { portfolioData } from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    'Todos',
    'Web',
    'Desktop',
    'Backend',
    'Banco de Dados',
    'Full Stack',
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Todos' ||
        project.category === selectedCategory ||
        (selectedCategory === 'Banco de Dados' &&
          project.tags.some((t) => t.toLowerCase().includes('sql') || t.toLowerCase().includes('mysql') || t.toLowerCase().includes('banco')));

      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-[#0D0D18]/40">
      {/* Glow Suave */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Portfólio em Ação
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projetos
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Aplicações reais desenvolvidas com foco em arquitetura consistente, usabilidade e resolução de problemas.
          </p>
        </div>

        {/* Filtros de Categoria & Busca */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-white/[0.08]">
          {/* Categorias Exigidas */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-[#080812] text-slate-400 hover:text-white hover:bg-[#11111F] border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Campo de Busca */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por React, Python, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#080812] border border-white/[0.08] text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Grade de Cards Premium */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#080812]/60 rounded-3xl border border-white/[0.08] p-8">
            <Layers className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Nenhum projeto encontrado nesta categoria</h3>
            <p className="text-xs text-slate-400 mb-4">
              Tente selecionar a categoria "Todos" ou limpar a busca.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-colors"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#080812]/90 border border-white/[0.08] hover:border-purple-500/40 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/15 flex flex-col justify-between"
              >
                {/* Iluminação de fundo no hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Container da Imagem com Zoom Suave & Overlay */}
                  <div className="relative h-48 w-full overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-[#080812]/30 to-transparent" />

                    {/* Tag de Categoria */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-[#080812]/90 border border-white/20 text-slate-200 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Overlay do Botão "Ver Projeto" no Hover */}
                    <div className="absolute inset-0 bg-[#080812]/70 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-500/30 transition-all scale-95 group-hover:scale-100"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Ver Detalhes</span>
                      </button>
                    </div>
                  </div>

                  {/* Corpo do Card */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Badges de Tecnologias */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#11111F] text-purple-300 border border-purple-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer do Card com Links */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/[0.05]">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors group/btn cursor-pointer"
                  >
                    <span>Informações</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.isPrivate ? (
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="px-2.5 py-1.5 rounded-lg bg-[#11111F] hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 border border-amber-500/30 hover:border-amber-400/60 flex items-center gap-1.5 text-[11px] font-semibold cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                        title="Código Privado (Proprietário)"
                      >
                        <Lock className="w-3 h-3" />
                        <span>Privado</span>
                      </button>
                    ) : (
                      <>
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-[#11111F] hover:bg-purple-600/30 text-slate-300 hover:text-white border border-white/[0.08] hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-200 hover:scale-110 active:scale-90"
                            title="Ver Repositório no GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-lg bg-[#11111F] hover:bg-cyan-500/30 text-slate-300 hover:text-cyan-200 border border-white/[0.08] hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-200 hover:scale-110 active:scale-90"
                            title="Ver Demonstração / Repositório"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal Interativo de Detalhes */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
