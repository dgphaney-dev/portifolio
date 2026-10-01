import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  Info,
  ArrowRight
} from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['Todos', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Todos' || project.category === selectedCategory;

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
    <section id="projetos" className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Portfólio em Ação
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projetos Selecionados & Entregas Reais
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Aplicações desenvolvidas com foco em performance, experiência do usuário e resolução prática de problemas.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por React, API, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/50 transition-all"
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

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800/80 p-8">
            <SlidersHorizontal className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Nenhum projeto encontrado</h3>
            <p className="text-sm text-slate-400 mb-4">
              Tente pesquisar por outros termos ou selecionar a categoria "Todos".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Project Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-950/80 border border-slate-700 text-slate-200 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500/20 border border-amber-500/30 text-amber-300 backdrop-blur-md">
                        ★ Destaque
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-indigo-400 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Detalhes</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/50"
                        title="Ver Código no GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-sm transition-all"
                        title="Ver Projeto Online"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
