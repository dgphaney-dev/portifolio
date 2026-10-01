import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  Terminal, 
  CheckCircle2,
  Code2
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-purple-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm shadow-emerald-500/10 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {personal.availability}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Olá, eu sou{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                {personal.name}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 mt-2 block">
                {personal.role}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {personal.tagline}{' '}
              <span className="text-slate-400">
                Especialista na criação de interfaces modernas, código limpo e arquitetura escalável para transformar ideias em produtos reais.
              </span>
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Ver Meus Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Conversar Agora</span>
              </a>

              {personal.resumeUrl && personal.resumeUrl !== '#' && (
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all"
                >
                  <FileDown className="w-4 h-4 text-indigo-400" />
                  <span>Currículo</span>
                </a>
              )}
            </div>

            {/* Social Links & Trust signals */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Conecte-se:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-slate-300" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-300" />
                <span>E-mail</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code & Tech Interactive Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              {/* Terminal Window */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>developer-profile.ts</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                    READY TO HIRE
                  </div>
                </div>

                {/* Window Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                  <p className="text-slate-500">// Perfil profissional pronto para agregar valor</p>
                  
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">developer</span>{' '}
                    <span className="text-purple-400">=</span> {'{'}
                  </div>

                  <div className="pl-4 space-y-1">
                    <p>
                      <span className="text-slate-400">nome:</span>{' '}
                      <span className="text-emerald-300">"{personal.name}"</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">funcao:</span>{' '}
                      <span className="text-emerald-300">"{personal.role}"</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">status:</span>{' '}
                      <span className="text-cyan-300">"Pronto para novos desafios"</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">stackPrincipal:</span> [
                      <span className="text-amber-300">"React"</span>,{' '}
                      <span className="text-amber-300">"TypeScript"</span>,{' '}
                      <span className="text-amber-300">"Node.js"</span>,{' '}
                      <span className="text-amber-300">"Tailwind"</span>
                      ],
                    </p>
                    <p>
                      <span className="text-slate-400">entregas:</span>{' '}
                      <span className="text-emerald-400 font-semibold">"Performance, Clean Code & UX"</span>,
                    </p>
                    <p>
                      <span className="text-slate-400">disponibilidade:</span>{' '}
                      <span className="text-purple-300">true</span>
                    </p>
                  </div>

                  <div>{'}'};</div>

                  {/* Terminal Execution Status */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Build Status: Passed (0 errors)
                    </span>
                    <span className="text-slate-500">React 19 + Vite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
