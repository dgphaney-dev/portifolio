import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, Clock, ExternalLink, FileText, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Experience() {
  const { experience, education, certifications = [] } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="experiencia" className="py-24 relative overflow-hidden bg-[#080812]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Trajetória & Foco
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiência, Formação & Certificações
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Minha caminhada prática na programação, formação superior na Católica e certificações técnicas comprovadas.
          </p>
        </div>

        {/* Tab Switcher com 3 Abas */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-[#0D0D18] border border-white/[0.08] gap-1 sm:gap-0">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Objetivo & Prática</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Formação Superior</span>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certificações</span>
            </button>
          </div>
        </div>

        {/* Conteúdo Dinâmico por Aba */}
        <div className="relative pl-6 sm:pl-8 border-l border-purple-500/30 space-y-10">
          
          {/* ABA 1: OBJETIVO & PRÁTICA */}
          {activeTab === 'experience' && (
            experience.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080812] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_#22d3ee]" />

                <div className="p-7 sm:p-8 rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#11111F] text-cyan-300 border border-white/[0.08]">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-3">
                    {item.company}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {item.technologies && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#11111F] text-slate-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}

          {/* ABA 2: FORMAÇÃO SUPERIOR */}
          {activeTab === 'education' && (
            education.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080812] border-2 border-purple-400 group-hover:scale-125 group-hover:bg-purple-400 transition-all duration-300 shadow-[0_0_10px_#c084fc]" />

                <div className="p-7 sm:p-8 rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.course}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#11111F] text-purple-300 border border-white/[0.08]">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-3">
                    {item.institution}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          )}

          {/* ABA 3: CERTIFICAÇÕES */}
          {activeTab === 'certifications' && (
            certifications.map((cert) => (
              <div key={cert.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080812] border-2 border-emerald-400 group-hover:scale-125 group-hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_10px_#34d399]" />

                <div className="p-7 sm:p-8 rounded-3xl bg-[#0D0D18]/80 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1">
                  
                  {/* Topo do Card de Certificação */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {cert.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" />
                        Autêntico
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#11111F] text-amber-300 border border-white/[0.08]">
                        <Clock className="w-3.5 h-3.5" />
                        {cert.hours}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#11111F] text-slate-300 border border-white/[0.08]">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  {/* Emissor */}
                  <p className="text-xs sm:text-sm font-semibold text-purple-400 mb-3">
                    {cert.issuer}
                  </p>

                  {/* Descrição */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Chave de Validação e Ações */}
                  <div className="p-3.5 rounded-2xl bg-[#080812]/90 border border-white/[0.06] mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 truncate">
                      <span className="text-slate-500">Chave:</span>
                      <span className="text-cyan-300 font-semibold truncate">{cert.validationCode}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleCopy(cert.validationCode)}
                        className="px-3 py-1.5 rounded-lg bg-[#11111F] hover:bg-white/[0.1] text-[11px] font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 border border-white/[0.08]"
                        title="Copiar código de validação"
                      >
                        {copiedCode === cert.validationCode ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copiar Chave</span>
                          </>
                        )}
                      </button>

                      {cert.validationUrl && (
                        <a
                          href={cert.validationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-1.5 border border-emerald-500/30 text-[11px] font-semibold"
                        >
                          <span>Validar</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors flex items-center gap-1.5 shadow-md shadow-purple-500/20 text-[11px] font-semibold"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Ver Certificado</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Tags das Tecnologias Estudadas */}
                  {cert.skills && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#11111F] text-emerald-300 border border-emerald-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </section>
  );
}
