import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl shadow-black/80 z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Header */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Sobre o Projeto
            </h4>
            <p className="text-slate-300 leading-relaxed text-base">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Highlights / Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Destaques & Funcionalidades
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Tecnologias Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-300 bg-slate-800 hover:text-white hover:bg-slate-700 transition-all border border-slate-700/80"
            >
              <Github className="w-4 h-4" />
              <span>Ver Código Fonte</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Acessar Projeto Online</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
