import React from 'react';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-900">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <a href="#inicio" className="inline-flex items-center gap-2 group mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <span className="text-white font-extrabold text-sm tracking-wider">DP</span>
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personal.name}
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Criando aplicações web modernas, interfaces intuitivas e código limpo pronto para produção.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-indigo-400 border border-slate-800 transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Topo</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {personal.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> usando React 19 & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
