import React, { useState, useRef } from 'react';
import { Terminal, Code2, GraduationCap, CheckCircle2, Play, Sparkles } from 'lucide-react';

export default function DeveloperAvatar3D() {
  const [transform, setTransform] = useState('');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -16;
    const rotateY = ((x - centerX) / centerX) * 16;

    setTransform(`perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`);
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[460px] aspect-[1/1.05] flex items-center justify-center cursor-pointer transition-transform duration-200 ease-out select-none"
      style={{ transform }}
    >
      {/* Glow de Fundo Volumétrico */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-magenta-500/20 to-cyan-500/30 rounded-3xl blur-[90px] pointer-events-none animate-pulse-glow" />

      {/* Anel Orbital 3D 1 */}
      <div className="absolute inset-2 sm:-inset-4 rounded-full border border-purple-500/30 pointer-events-none animate-spin [animation-duration:22s]" />

      {/* Anel Orbital 3D 2 com pontinho de luz */}
      <div className="absolute inset-0 sm:-inset-8 rounded-full border border-cyan-400/20 pointer-events-none animate-spin [animation-duration:16s] [animation-direction:reverse]">
        <div className="absolute top-3 left-1/4 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />
      </div>

      {/* Quadro 3D Futurista com o Script */}
      <div className="relative w-full h-full rounded-3xl p-[2px] bg-gradient-to-tr from-purple-500 via-magenta-500 to-cyan-400 shadow-2xl shadow-purple-500/30 overflow-hidden">
        <div className="relative w-full h-full rounded-[22px] bg-[#090914]/95 border border-white/[0.08] backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
          
          {/* Spotlight que segue o cursor dentro do quadro */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(168, 85, 247, 0.35), transparent 65%)`,
            }}
          />

          {/* Topo da Janela do Script */}
          <div className="relative px-4 py-3 bg-[#0D0D18]/90 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_#f43f5e]" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_#f59e0b]" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_#10b981]" />
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span className="font-semibold text-white">douglas_dev.py</span>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE
            </div>
          </div>

          {/* Código do Script Autodescritivo com Sintaxe Colorida */}
          <div className="relative p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-300 space-y-1 overflow-hidden">
            <p className="text-slate-500 text-[10px]">// Script de Autodescrição Profissional</p>
            
            <p>
              <span className="text-purple-400">class</span>{' '}
              <span className="text-cyan-300 font-bold">DouglasPhaney</span>:
            </p>

            <div className="pl-3.5 space-y-0.5">
              <p>
                <span className="text-purple-400">def</span>{' '}
                <span className="text-amber-300">__init__</span>(
                <span className="text-slate-400">self</span>):
              </p>

              <div className="pl-3.5 space-y-0.5 text-[10.5px] sm:text-[11.5px]">
                <p>
                  <span className="text-slate-400">self.nome</span> ={' '}
                  <span className="text-emerald-300">"Douglas Phaney"</span>
                </p>
                <p>
                  <span className="text-slate-400">self.formacao</span> ={' '}
                  <span className="text-cyan-300">"ADS @ Católica (UCB)"</span>
                </p>
                <p>
                  <span className="text-slate-400">self.experiencia</span> ={' '}
                  <span className="text-amber-300">"1 ano e meio de prática"</span>
                </p>
                <p>
                  <span className="text-slate-400">self.stack</span> = [
                  <span className="text-cyan-300">"Python"</span>,{' '}
                  <span className="text-cyan-300">"MySQL"</span>,{' '}
                  <span className="text-cyan-300">"React"</span>]
                </p>
                <p>
                  <span className="text-slate-400">self.projetos</span> = [
                  <span className="text-emerald-300">"NextGen ERP"</span>,{' '}
                  <span className="text-emerald-300">"PDV Supermercado"</span>]
                </p>
                <p>
                  <span className="text-slate-400">self.atleta</span> ={' '}
                  <span className="text-amber-300">"UCB / Premiado no JUDF 🏆"</span>
                </p>
                <p>
                  <span className="text-slate-400">self.objetivo</span> ={' '}
                  <span className="text-purple-300 font-semibold">"Estágio ou Júnior"</span>
                </p>
              </div>

              <p className="pt-1">
                <span className="text-purple-400">def</span>{' '}
                <span className="text-amber-300">resolver_desafio</span>(
                <span className="text-slate-400">self</span>):
              </p>
              <p className="pl-3.5 text-slate-400">
                <span className="text-purple-400">return</span>{' '}
                <span className="text-emerald-400">"Transformando ideias em código limpo"</span>
              </p>
            </div>
          </div>

          {/* Rodapé Interativo que reage ao Mouse */}
          <div className="relative px-4 py-2.5 bg-[#0D0D18]/90 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Play className={`w-3.5 h-3.5 ${isHovered ? 'text-cyan-400 animate-pulse' : 'text-purple-400'}`} />
              <span className={isHovered ? 'text-cyan-300' : 'text-slate-400'}>
                {isHovered ? '> python douglas_dev.py [RUNNING]' : '> Passe o mouse para interagir'}
              </span>
            </div>

            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Build 0 erros
            </span>
          </div>

        </div>
      </div>

      {/* Badges Flutuantes 3D com Parallax */}
      {/* Badge Superior: ADS na Católica */}
      <div className="absolute -top-3 sm:-top-4 -left-2 sm:-left-6 px-3.5 py-1.5 rounded-xl bg-[#0D0D18]/95 border border-purple-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float">
        <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
          <GraduationCap className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-white">ADS @ Católica</span>
      </div>

      {/* Badge Inferior Esquerda: Python & React */}
      <div className="absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-xl bg-[#0D0D18]/95 border border-cyan-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float [animation-delay:2s]">
        <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
          <Code2 className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-white">Python & React</span>
      </div>

      {/* Badge Lateral Direita: MySQL Cloud */}
      <div className="absolute top-1/2 -right-3 sm:-right-8 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#0D0D18]/95 border border-emerald-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float [animation-delay:1s]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-semibold text-emerald-400">MySQL Cloud</span>
      </div>
    </div>
  );
}
