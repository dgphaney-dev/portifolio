import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  Search, 
  Sparkles, 
  Layers, 
  Info, 
  ArrowUpRight, 
  Lock,
  Star,
  Cpu,
  Database,
  Flame,
  ShieldAlert,
  Zap
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

  const getNeonTagDetails = (project) => {
    if (project.id === 'nextgen-pdv-erp' || project.id === 'nextgen-erp') {
      return {
        className: 'tag-featured',
        icon: Star,
        tooltip: 'Arquitetura Integrada Desktop + Web'
      };
    }
    if (project.id === 'sistema-barbearia') {
      return {
        className: 'tag-fullstack',
        icon: Zap,
        tooltip: 'Web & Responsivo'
      };
    }
    if (project.id === 'sistema-de-registro') {
      return {
        className: 'tag-security',
        icon: ShieldAlert,
        tooltip: 'Validação & Segurança'
      };
    }
    return {
      className: 'tag-new',
      icon: Flame,
      tooltip: 'Novo Projeto'
    };
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Todos' ||
        project.category === selectedCategory ||
        (selectedCategory === 'Banco de Dados' &&
          project.tags.some((t) => /sql|mysql|banco/i.test(t))) ||
        (selectedCategory === 'Desktop' &&
          (project.category === 'Desktop' || project.tags.some((t) => /desktop|pdv/i.test(t)))) ||
        (selectedCategory === 'Web' &&
          (project.category === 'Web' || project.tags.some((t) => /web|react/i.test(t)))) ||
        (selectedCategory === 'Full Stack' &&
          (project.category === 'Full Stack' || project.tags.some((t) => /full stack/i.test(t))));

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
    <section id="projetos" className="py-28 relative overflow-hidden bg-transparent">
      {/* Glow Suave Cósmico */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Liquid Gradient Wave */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Portfólio em Ação
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="projects-text-liquid">Projetos em Destaque</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Aplicações reais desenvolvidas com foco em arquitetura consistente, usabilidade e resolução de problemas.
          </p>
        </div>

        {/* Filtros de Categoria & Busca */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-white/[0.08]">
          {/* Categorias em estilo Caio Duque */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                    : 'glass-ultra text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Campo de Busca Glass */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por React, Python, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0b0f19] border border-white/[0.1] text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
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

        {/* Grade de Cards Bento Glass-Ultra */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 glass-ultra rounded-3xl p-8">
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
              className="btn-star"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => {
              const tagInfo = getNeonTagDetails(project);
              const TagIcon = tagInfo.icon;

              return (
                <div
                  key={project.id}
                  className="group relative rounded-3xl glass-ultra overflow-hidden flex flex-col justify-between"
                >
                  {/* Top-Right Neon Tag Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`neon-tag ${tagInfo.className}`}>
                      <TagIcon />
                      <div className="neon-tooltip">{tagInfo.tooltip}</div>
                    </div>
                  </div>

                  <div>
                    {/* Imagem com Zoom e Overlay */}
                    <div className="relative h-48 w-full overflow-hidden bg-black/40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/30 to-transparent" />

                      {/* Tag de Categoria */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-[#0b0f19]/90 border border-white/20 text-slate-200 backdrop-blur-md font-mono">
                          {project.category}
                        </span>
                      </div>

                      {/* Overlay com Botão no Hover */}
                      <div className="absolute inset-0 bg-[#0b0f19]/75 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center gap-3">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="btn-star"
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
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-purple-300 border border-purple-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer do Card com Links & Modais */}
                  <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-white/[0.05]">
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
                          className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 text-[11px] font-semibold cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
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
                              className="p-2.5 rounded-lg bg-white/[0.05] hover:bg-purple-600/30 text-slate-300 hover:text-white border border-white/[0.1] hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-200 hover:scale-110 active:scale-90"
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
                              className="p-2.5 rounded-lg bg-white/[0.05] hover:bg-cyan-500/30 text-slate-300 hover:text-cyan-200 border border-white/[0.1] hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-200 hover:scale-110 active:scale-90"
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
              );
            })}
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
