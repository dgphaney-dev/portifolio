import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Code2, GraduationCap, CheckCircle2, Play, RotateCcw, Sparkles } from 'lucide-react';

const RAW_CODE = [
  { id: 1, text: '# Script de Autodescrição Profissional', type: 'comment' },
  { id: 2, text: 'class DouglasPhaney:', type: 'class' },
  { id: 3, text: '    def __init__(self):', type: 'def' },
  { id: 4, text: '        self.nome = "Douglas Phaney"', type: 'prop-str', key: 'self.nome', val: '"Douglas Phaney"' },
  { id: 5, text: '        self.formacao = "ADS @ Católica (UCB)"', type: 'prop-str', key: 'self.formacao', val: '"ADS @ Católica (UCB)"' },
  { id: 6, text: '        self.experiencia = "1 ano e meio de prática"', type: 'prop-str', key: 'self.experiencia', val: '"1 ano e meio de prática"' },
  { id: 7, text: '        self.stack = ["Python", "MySQL", "React"]', type: 'prop-arr', key: 'self.stack', val: '["Python", "MySQL", "React"]' },
  { id: 8, text: '        self.projetos = ["NextGen ERP", "PDV Supermercado"]', type: 'prop-arr', key: 'self.projetos', val: '["NextGen ERP", "PDV Supermercado"]' },
  { id: 9, text: '        self.atleta = "UCB / Premiado no JUDF 🏆"', type: 'prop-str', key: 'self.atleta', val: '"UCB / Premiado no JUDF 🏆"' },
  { id: 10, text: '        self.objetivo = "Estágio ou Júnior"', type: 'prop-str', key: 'self.objetivo', val: '"Estágio ou Júnior"' },
  { id: 11, text: '    def resolver_desafio(self):', type: 'def' },
  { id: 12, text: '        return "Transformando ideias em código limpo"', type: 'return', val: '"Transformando ideias em código limpo"' },
];

export default function DeveloperAvatar3D() {
  const [typedLinesCount, setTypedLinesCount] = useState(RAW_CODE.length);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(RAW_CODE.length);
  const [isTyping, setIsTyping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [statusText, setStatusText] = useState('Pronto • Passe o mouse para digitar');
  const timerRef = useRef(null);

  // Função para disparar a digitação
  const startTyping = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    setIsTyping(true);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setTypedLinesCount(0);
    setStatusText('Digitando douglas_dev.py...');

    let lineIdx = 0;
    let charIdx = 0;

    timerRef.current = setInterval(() => {
      if (lineIdx >= RAW_CODE.length) {
        clearInterval(timerRef.current);
        setIsTyping(false);
        setTypedLinesCount(RAW_CODE.length);
        setStatusText('Código executado com sucesso! [0 erros]');
        return;
      }

      const currentLine = RAW_CODE[lineIdx];
      charIdx += 2; // avanço rápido para sensação ágil

      if (charIdx >= currentLine.text.length) {
        lineIdx++;
        charIdx = 0;
        setCurrentLineIndex(lineIdx);
        setCurrentCharIndex(0);
        setTypedLinesCount(lineIdx);
      } else {
        setCurrentCharIndex(charIdx);
        setCurrentLineIndex(lineIdx);
      }
    }, 18);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    startTyping();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Se o usuário tirar o mouse antes de terminar, completa suavemente
    if (isTyping) {
      clearInterval(timerRef.current);
      setIsTyping(false);
      setTypedLinesCount(RAW_CODE.length);
      setStatusText('Pronto • Passe o mouse para digitar');
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Renderizador de sintaxe colorida para cada linha
  const renderLine = (item, index) => {
    // Se for a linha que está sendo digitada no momento
    let textToDisplay = item.text;
    const isCurrentlyTypingThisLine = isTyping && index === currentLineIndex;

    if (index > currentLineIndex && isTyping) {
      return null;
    }

    if (isCurrentlyTypingThisLine) {
      textToDisplay = item.text.slice(0, currentCharIndex);
    }

    if (item.type === 'comment') {
      return (
        <p key={item.id} className="text-slate-500 text-[10.5px]">
          {textToDisplay}
          {isCurrentlyTypingThisLine && <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse" />}
        </p>
      );
    }

    if (item.type === 'class') {
      return (
        <p key={item.id}>
          <span className="text-purple-400">class</span>{' '}
          <span className="text-cyan-300 font-bold">{textToDisplay.replace('class ', '')}</span>
          {isCurrentlyTypingThisLine && <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse" />}
        </p>
      );
    }

    if (item.type === 'def') {
      return (
        <p key={item.id} className="pl-3.5">
          <span className="text-purple-400">def</span>{' '}
          <span className="text-amber-300">{textToDisplay.replace('    def ', '')}</span>
          {isCurrentlyTypingThisLine && <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse" />}
        </p>
      );
    }

    if (item.type === 'prop-str' || item.type === 'prop-arr') {
      return (
        <p key={item.id} className="pl-7 text-[10.5px] sm:text-[11.5px]">
          <span className="text-slate-400">{item.key}</span> ={' '}
          <span className={item.id === 6 || item.id === 9 ? 'text-amber-300' : item.id === 10 ? 'text-purple-300 font-semibold' : item.id === 7 || item.id === 5 ? 'text-cyan-300' : 'text-emerald-300'}>
            {isCurrentlyTypingThisLine ? textToDisplay.replace(`        ${item.key} = `, '') : item.val}
          </span>
          {isCurrentlyTypingThisLine && <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse" />}
        </p>
      );
    }

    if (item.type === 'return') {
      return (
        <p key={item.id} className="pl-7 text-[10.5px] sm:text-[11.5px]">
          <span className="text-purple-400">return</span>{' '}
          <span className="text-emerald-400">
            {isCurrentlyTypingThisLine ? textToDisplay.replace('        return ', '') : item.val}
          </span>
          {isCurrentlyTypingThisLine && <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse" />}
        </p>
      );
    }

    return (
      <p key={item.id} className="pl-3.5 text-slate-300">
        {textToDisplay}
        {isCurrentlyTypingThisLine && <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse" />}
      </p>
    );
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[460px] aspect-[1/1.05] flex items-center justify-center cursor-pointer select-none transition-all duration-300"
    >
      {/* Glow de Fundo Elegante e Estável */}
      <div className={`absolute inset-0 bg-gradient-to-tr from-purple-600/25 via-fuchsia-500/15 to-cyan-500/25 rounded-3xl blur-[80px] pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100 scale-105' : 'opacity-70'}`} />

      {/* Anel Orbital Estilizado */}
      <div className="absolute inset-2 sm:-inset-4 rounded-full border border-purple-500/20 pointer-events-none animate-spin [animation-duration:28s]" />
      <div className="absolute inset-0 sm:-inset-8 rounded-full border border-cyan-400/15 pointer-events-none animate-spin [animation-duration:20s] [animation-direction:reverse]">
        <div className="absolute top-3 left-1/4 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
      </div>

      {/* Quadro Central Estável (Sem inclinação brusca) */}
      <div className={`relative w-full h-full rounded-3xl p-[2px] bg-gradient-to-tr from-purple-500/80 via-magenta-500/60 to-cyan-400/80 shadow-2xl transition-all duration-300 ${isHovered ? 'shadow-purple-500/40 ring-1 ring-cyan-400/50' : 'shadow-purple-900/20'}`}>
        <div className="relative w-full h-full rounded-[22px] bg-[#090914]/95 border border-white/[0.08] backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
          
          {/* Topo da Janela macOS */}
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

            <div className="flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  startTyping();
                }}
                title="Digitar novamente"
                className="p-1 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </div>
            </div>
          </div>

          {/* Área de Código com Efeito Typewriter */}
          <div className="relative p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-300 space-y-1 overflow-hidden min-h-[290px] flex flex-col justify-center">
            {RAW_CODE.map((item, index) => renderLine(item, index))}
          </div>

          {/* Barra Inferior com Status da Digitação / Execução */}
          <div className="relative px-4 py-2.5 bg-[#0D0D18]/90 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-1.5">
              <Play className={`w-3.5 h-3.5 ${isTyping ? 'text-amber-400 animate-spin' : isHovered ? 'text-cyan-400' : 'text-purple-400'}`} />
              <span className={isTyping ? 'text-amber-300' : isHovered ? 'text-cyan-300' : 'text-slate-400'}>
                {statusText}
              </span>
            </div>

            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              0 erros
            </span>
          </div>

        </div>
      </div>

      {/* Badges Flutuantes Discretas com Parallax Suave */}
      <div className="absolute -top-3 sm:-top-4 -left-2 sm:-left-6 px-3.5 py-1.5 rounded-xl bg-[#0D0D18]/95 border border-purple-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float">
        <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
          <GraduationCap className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-white">ADS @ Católica</span>
      </div>

      <div className="absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-xl bg-[#0D0D18]/95 border border-cyan-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float [animation-delay:2s]">
        <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
          <Code2 className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-white">Python & React</span>
      </div>

      <div className="absolute top-1/2 -right-3 sm:-right-8 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#0D0D18]/95 border border-emerald-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 animate-float [animation-delay:1s]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-semibold text-emerald-400">MySQL Cloud</span>
      </div>
    </div>
  );
}
