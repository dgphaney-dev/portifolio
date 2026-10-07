import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  ArrowUpRight, 
  MessageSquare, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import { portfolioData } from '../../data/portfolioData';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honeypot) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Por favor, insira um e-mail válido.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject?.trim() || `Novo contato do Portfólio: ${formData.name}`,
          message: formData.message,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else if (result.message && result.message.toLowerCase().includes('activation')) {
        setStatus('needs_activation');
      } else {
        throw new Error(result.message || 'Erro ao processar envio.');
      }
    } catch (err) {
      console.error('Erro no envio do formulário:', err);
      setStatus('error');
      setErrorMessage(
        'Não foi possível enviar automaticamente. Você também pode clicar no e-mail ao lado para enviar diretamente.'
      );
    }
  };

  return (
    <section id="contato" className="py-28 relative overflow-hidden bg-transparent">
      {/* Glow Cósmico Vermelho/Laranja de Fundo */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Liquid Gradient Wave */}
        <RevealOnScroll direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Vamos Conversar?
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="contact-text-liquid">Entre em Contato</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400">
              Estou à disposição para oportunidades de estágio, vagas júnior, dúvidas ou networking.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Coluna Esquerda: Informações e Canais Diretos */}
          <RevealOnScroll direction="up" delay={100} className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-ultra">
              <h3 className="text-xl font-bold text-white mb-2">
                Canais Diretos
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fique à vontade para me enviar um e-mail ou conectar-se através das redes sociais profissionais.
              </p>

              {/* Botão de Copiar E-mail com Diamond Tooltip */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0b0f19] border border-white/[0.08] flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">E-mail</span>
                    <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">{personal.email}</span>
                  </div>
                </div>

                <div className="tooltip-diamond shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/[0.05] hover:bg-purple-600/20 text-slate-300 hover:text-purple-300 border border-white/[0.08] transition-all cursor-pointer"
                    aria-label="Copiar endereço de e-mail"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <span>{copiedEmail ? 'Copiado!' : 'Copiar'}</span>
                </div>
              </div>

              {/* Redes Sociais com Diamond Tooltips */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-3.5 rounded-xl bg-[#0b0f19] hover:bg-white/[0.05] border border-white/[0.08] hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 text-xs font-semibold"
                >
                  <Github className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform duration-200" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 ml-auto text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-3.5 rounded-xl bg-[#0b0f19] hover:bg-white/[0.05] border border-white/[0.08] hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] text-slate-300 hover:text-cyan-300 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 text-xs font-semibold"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-200" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 ml-auto text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Elemento de Status de Contratação */}
            <div className="p-5 sm:p-6 rounded-3xl glass-ultra flex items-center gap-3.5 sm:gap-4 cursor-default group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 flex items-center justify-center text-cyan-400 shrink-0 transition-all duration-300">
                <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Disponibilidade</h4>
                <p className="text-xs text-slate-400 mt-0.5 group-hover:text-slate-300 transition-colors">
                  Aberto para propostas de Estágio ou Júnior em desenvolvimento de software.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Coluna Direita: Formulário Moderno Glass-Ultra */}
          <RevealOnScroll direction="up" delay={160} className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl glass-ultra">
              <h3 className="text-xl font-bold text-white mb-1">
                Envie uma Mensagem
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Preencha os dados e receberei seu contato diretamente.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Mensagem Enviada com Sucesso!</h4>
                  <p className="text-xs text-slate-300 mb-4">
                    Sua mensagem foi entregue diretamente na caixa de entrada de <strong>{personal.email}</strong>. Responderei o mais rápido possível!
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold underline cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : status === 'needs_activation' ? (
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">E-mail de Ativação Enviado!</h4>
                  <p className="text-xs text-slate-300 mb-2">
                    Para segurança, o serviço enviou uma confirmação para <strong>{personal.email}</strong>.
                  </p>
                  <p className="text-xs text-slate-400 mb-4">
                    Abra seu Gmail e clique no link de ativação (&quot;Activate Form&quot;). Feito isso uma única vez, todas as mensagens cairão direto na sua caixa!
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold underline cursor-pointer"
                  >
                    Voltar ao formulário
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    aria-hidden="true"
                  />

                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome ou empresa"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                      Assunto
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Oportunidade para Desenvolvedor Júnior / Estágio"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                      Mensagem *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Escreva sua mensagem ou detalhes da vaga..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-star w-full py-3.5 !text-xs cursor-pointer disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>

        </div>

      </div>
    </section>
  );
}
