import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  MapPin, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Linkedin, Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission / mailto fallback
    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject || 'Oportunidade de Trabalho / Contato'
      )}&body=${encodeURIComponent(
        `Olá, meu nome é ${formData.name} (${formData.email}).\n\n${formData.message}`
      )}`;
    }, 1000);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá ${personal.name}! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.`
  );

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Vamos Conversar?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pronto para Agregar Valor ao seu Time
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Tem uma oportunidade, vaga aberta ou projeto freelance? Minha caixa de entrada está sempre aberta!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Canais Diretos</h3>
              <p className="text-sm text-slate-400 mb-6">
                Fique à vontade para me mandar uma mensagem pela rede que preferir. Respondo com rapidez!
              </p>

              {/* Email Copier */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">E-mail</span>
                    <span className="text-sm font-medium text-slate-200 truncate">{personal.email}</span>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shrink-0 cursor-pointer"
                  title="Copiar e-mail"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href={`https://wa.me/${personal.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex items-center justify-between group mb-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">WhatsApp</span>
                    <span className="text-sm font-medium text-slate-200">Conversar em Tempo Real</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950/50 hover:bg-slate-800/60 border border-slate-800/80 text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2.5 text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-950/50 hover:bg-slate-800/60 border border-slate-800/80 text-slate-300 hover:text-white transition-colors flex items-center gap-2.5 text-sm font-medium"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/70 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Localização & Fuso</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {personal.location} · Horário de Brasília (BRT / UTC-3)
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Envie uma Mensagem</h3>
              <p className="text-sm text-slate-400 mb-8">
                Preencha os campos abaixo e entrarei em contato o mais rápido possível.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Mensagem Pronta!</h4>
                  <p className="text-sm text-slate-300">
                    Abrindo seu cliente de e-mail para envio direto... Obrigado pelo contato!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Maria Silva ou Recrutador"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="exemplo@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Proposta de Vaga Desenvolvedor Front-end / Full Stack"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Conte um pouco sobre a vaga, equipe ou projeto..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/40 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem Agora</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
