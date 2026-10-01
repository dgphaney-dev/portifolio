import React, { useState, useRef } from 'react';
import { Sparkles, Terminal, Code2, GraduationCap, ShieldCheck } from 'lucide-react';

export default function DeveloperAvatar3D() {
  const [transform, setTransform] = useState('');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] aspect-square flex items-center justify-center cursor-pointer transition-transform duration-200 ease-out"
      style={{ transform }}
    >
      {/* Glow de Fundo Volumétrico */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-magenta-500/20 to-cyan-500/30 rounded-full blur-[80px] pointer-events-none animate-pulse-glow" />

      {/* Anel Orbital 3D 1 */}
      <div className="absolute inset-2 sm:-inset-4 rounded-full border border-purple-500/30 pointer-events-none animate-spin [animation-duration:20s]" />
      
      {/* Anel Orbital 3D 2 com pontinho de luz */}
      <div className="absolute inset-0 sm:-inset-8 rounded-full border border-cyan-400/20 pointer-events-none animate-spin [animation-duration:15s] [animation-direction:reverse]">
        <div className="absolute top-2 left-1/4 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
      </div>

      {/* Card do Boneco 3D */}
      <div className="relative w-72 h-72 sm:w-84 sm:h-84 rounded-3xl overflow-hidden p-[2px] bg-gradient-to-tr from-purple-500 via-magenta-500 to-cyan-400 shadow-2xl shadow-purple-500/25">
        <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#080812]">
          <img
            src="/avatar_kinect_3d.jpg"
            alt="Boneco 3D estilo Kinect Adventures de Douglas Phaney"
            className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
          />

          {/* Gradiente de iluminação dinâmico do mouse */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(217, 70, 239, 0.4), transparent 60%)`,
            }}
          />

          {/* Sombra inferior suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080812]/90 via-transparent to-transparent" />
        </div>
      </div>

      {/* Badges Flutuantes 3D com Parallax */}
      {/* Badge Superior: ADS na Católica */}
      <div className="absolute -top-3 sm:-top-5 -left-2 sm:-left-6 px-3.5 py-1.5 rounded-xl bg-[#0D0D18]/90 border border-purple-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float">
        <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
          <GraduationCap className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-white">ADS @ Católica</span>
      </div>

      {/* Badge Inferior Esquerda: Python & React */}
      <div className="absolute -bottom-3 sm:-bottom-5 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-xl bg-[#0D0D18]/90 border border-cyan-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float [animation-delay:2s]">
        <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
          <Code2 className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-white">Python & React</span>
      </div>

      {/* Badge Lateral Direita: MySQL Cloud */}
      <div className="absolute top-1/2 -right-3 sm:-right-8 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#0D0D18]/90 border border-emerald-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float [animation-delay:1s]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-semibold text-emerald-400">MySQL Cloud</span>
      </div>
    </div>
  );
}
