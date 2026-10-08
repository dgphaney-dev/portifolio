import React, { useRef, useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function TechStack() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = 0;
    let height = 0;
    let scale = 1.0;

    const handleResize = () => {
      if (!containerRef.current) return;
      width = canvas.width = containerRef.current.clientWidth;
      height = canvas.height = containerRef.current.clientHeight;
      const isMobile = width < 768;
      const isSmallMobile = width < 480;
      scale = isSmallMobile ? 0.65 : isMobile ? 0.8 : 1.0;
      initPositions();
    };

    // --- DADOS DA CONSTELAÇÃO (TOPOLOGIA LIMPA SEM CRUZAMENTO DE LINHAS) ---
    const rawHubs = [
      { id: 'hub-tools', label: 'Tools', rx: 0.16, ry: 0.28, mrx: 0.20, mry: 0.14, color: '#a855f7' },
      { id: 'hub-frontend', label: 'Front-End', rx: 0.32, ry: 0.44, mrx: 0.22, mry: 0.50, color: '#06b6d4' },
      { id: 'hub-design', label: 'Design', rx: 0.24, ry: 0.68, mrx: 0.40, mry: 0.68, color: '#f59e0b' },
      { id: 'hub-prog', label: 'Programming', rx: 0.58, ry: 0.42, mrx: 0.60, mry: 0.34, color: '#6366f1' },
      { id: 'hub-cloud', label: 'Cloud & Infra', rx: 0.68, ry: 0.20, mrx: 0.80, mry: 0.14, color: '#f97316' },
      { id: 'hub-backend', label: 'Back-End', rx: 0.78, ry: 0.48, mrx: 0.74, mry: 0.58, color: '#10b981' },
    ];

    const rawSkills = [
      {
        id: 'git',
        name: 'Git',
        category: 'Controle de Versão',
        desc: 'Versionamento seguro, branching strategy e histórico consistente.',
        rx: 0.10,
        ry: 0.42,
        mrx: 0.10,
        mry: 0.26,
        r: 20,
        color: '#f05032',
        symbol: 'GIT',
      },
      {
        id: 'github',
        name: 'GitHub',
        category: 'Colaboração & CI',
        desc: 'Repositórios estruturados, versionamento e automação de código.',
        rx: 0.22,
        ry: 0.18,
        mrx: 0.30,
        mry: 0.22,
        r: 20,
        color: '#c084fc',
        symbol: 'GH',
      },
      {
        id: 'threejs',
        name: 'Three.js / 3D',
        category: 'Gráficos WebGL',
        desc: 'Criação de universos 3D, câmeras, iluminação e sistemas de partículas interativos.',
        rx: 0.52,
        ry: 0.20,
        mrx: 0.54,
        mry: 0.14,
        r: 19,
        color: '#ffffff',
        symbol: '3D',
      },
      {
        id: 'aws',
        name: 'AWS Cloud',
        category: 'Cloud Computing',
        desc: 'Certificação AWS Academy Cloud Foundations: EC2, S3, IAM e arquitetura.',
        rx: 0.80,
        ry: 0.18,
        mrx: 0.88,
        mry: 0.26,
        r: 21,
        color: '#ff9900',
        symbol: 'AWS',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        category: 'Linguagem Core',
        desc: 'ES6+, assincronismo, manipulação DOM e arquitetura orientada a eventos.',
        rx: 0.42,
        ry: 0.32,
        mrx: 0.36,
        mry: 0.36,
        r: 23,
        color: '#f7df1e',
        symbol: 'JS',
      },
      {
        id: 'react',
        name: 'React.js',
        category: 'Front-End Moderno',
        desc: 'Componentes reativos, hooks avançados, Context API e SPAs.',
        rx: 0.42,
        ry: 0.58,
        mrx: 0.46,
        mry: 0.52,
        r: 24,
        color: '#00d8ff',
        symbol: '⚛',
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'Estilização Ágil',
        desc: 'Utility-first framework para interfaces responsivas de alta velocidade.',
        rx: 0.32,
        ry: 0.74,
        mrx: 0.20,
        mry: 0.66,
        r: 21,
        color: '#06b6d4',
        symbol: 'CSS',
      },
      {
        id: 'html-css',
        name: 'HTML5 & CSS3',
        category: 'Estruturação & Estilo',
        desc: 'Semântica moderna, CSS moderno, Grid, Flexbox e acessibilidade.',
        rx: 0.18,
        ry: 0.82,
        mrx: 0.28,
        mry: 0.82,
        r: 22,
        color: '#e44d26',
        symbol: '</>',
      },
      {
        id: 'vite',
        name: 'Vite / Tooling',
        category: 'Build & Bundler',
        desc: 'HMR instantâneo, compilação de assets e configuração otimizada.',
        rx: 0.36,
        ry: 0.86,
        mrx: 0.48,
        mry: 0.82,
        r: 19,
        color: '#f59e0b',
        symbol: '⚡',
      },
      {
        id: 'python',
        name: 'Python',
        category: 'Backend & Automação',
        desc: 'Linguagem principal: APIs, sistemas desktop, scripts, bots para Discord (discord.py) e MySQL.',
        rx: 0.66,
        ry: 0.58,
        mrx: 0.82,
        mry: 0.42,
        r: 24,
        color: '#3776ab',
        symbol: 'Py',
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        category: 'Runtime Backend',
        desc: 'Serviços backend rápidos, bots para Discord (discord.js), APIs REST e npm.',
        rx: 0.76,
        ry: 0.76,
        mrx: 0.88,
        mry: 0.70,
        r: 21,
        color: '#22c55e',
        symbol: 'Node',
      },
      {
        id: 'mysql',
        name: 'MySQL',
        category: 'Banco Relacional',
        desc: 'Modelagem relacional, queries complexas, transações ACID e integridade.',
        rx: 0.88,
        ry: 0.58,
        mrx: 0.70,
        mry: 0.76,
        r: 23,
        color: '#00758f',
        symbol: 'SQL',
      },
      {
        id: 'sqlite',
        name: 'SQLite',
        category: 'Banco Embutido',
        desc: 'Persistência de dados local de alta velocidade para aplicações desktop e testes.',
        rx: 0.88,
        ry: 0.80,
        mrx: 0.82,
        mry: 0.88,
        r: 19,
        color: '#38bdf8',
        symbol: 'DB',
      },
    ];

    const rawLinks = [
      // Cluster Tools (Topo Esquerdo)
      { from: 'hub-tools', to: 'git' },
      { from: 'hub-tools', to: 'github' },
      { from: 'git', to: 'github' },
      { from: 'hub-tools', to: 'hub-frontend' },

      // Cluster Front-End & Design (Meio Esquerdo)
      { from: 'hub-frontend', to: 'react' },
      { from: 'hub-frontend', to: 'tailwind' },
      { from: 'hub-frontend', to: 'javascript' },
      { from: 'hub-frontend', to: 'hub-design' },
      { from: 'hub-design', to: 'html-css' },
      { from: 'hub-design', to: 'vite' },
      { from: 'html-css', to: 'vite' },
      { from: 'tailwind', to: 'html-css' },

      // Pontes Centrais (Linguagens Core)
      { from: 'javascript', to: 'hub-prog' },
      { from: 'react', to: 'hub-prog' },
      { from: 'javascript', to: 'threejs' },

      // Cluster Cloud & 3D (Topo Direito)
      { from: 'hub-prog', to: 'hub-cloud' },
      { from: 'hub-cloud', to: 'threejs' },
      { from: 'hub-cloud', to: 'aws' },

      // Cluster Programming & Back-End (Baixo Direito)
      { from: 'hub-prog', to: 'python' },
      { from: 'hub-prog', to: 'hub-backend' },
      { from: 'hub-backend', to: 'python' },
      { from: 'hub-backend', to: 'nodejs' },
      { from: 'hub-backend', to: 'mysql' },
      { from: 'hub-backend', to: 'sqlite' },
      { from: 'mysql', to: 'sqlite' },
      { from: 'nodejs', to: 'sqlite' },
    ];

    let hubs = [];
    let skills = [];

    const initPositions = () => {
      const isMobile = width < 768;
      const isSmallMobile = width < 480;
      scale = isSmallMobile ? 0.64 : isMobile ? 0.78 : 1.0;

      // Área protegida para evitar corte de texto nas bordas em celulares
      const padX = isSmallMobile ? 20 : isMobile ? 32 : 64;
      const padY = isSmallMobile ? 24 : isMobile ? 36 : 64;
      const usableW = Math.max(180, width - padX * 2);
      const usableH = Math.max(260, height - padY * 2);

      hubs = rawHubs.map((h) => {
        const rx = isMobile ? h.mrx : h.rx;
        const ry = isMobile ? h.mry : h.ry;
        return {
          ...h,
          x: padX + rx * usableW,
          y: padY + ry * usableH,
          baseX: padX + rx * usableW,
          baseY: padY + ry * usableH,
          isHub: true,
        };
      });

      skills = rawSkills.map((s) => {
        const rx = isMobile ? s.mrx : s.rx;
        const ry = isMobile ? s.mry : s.ry;
        return {
          ...s,
          x: padX + rx * usableW,
          y: padY + ry * usableH,
          baseX: padX + rx * usableW,
          baseY: padY + ry * usableH,
          isHub: false,
        };
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // --- INTERATIVIDADE DE HOVER E ARRASTO ---
    const mouse = { x: -1000, y: -1000, isHovering: false };
    let draggedNode = null;
    let dragOffset = { x: 0, y: 0 };

    const getNodeAt = (x, y) => {
      const allNodes = [...hubs, ...skills];
      for (const node of allNodes) {
        const dist = Math.hypot(node.x - x, node.y - y);
        const hitRadius = (node.isHub ? 28 : node.r + 10) * scale;
        if (dist <= hitRadius) return node;
      }
      return null;
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovering = true;

      const found = getNodeAt(mouse.x, mouse.y);
      setHoveredNode(found);
      if (found) {
        setTooltipPos({ x: found.x, y: found.y });
      }
    };

    const onMouseLeave = () => {
      mouse.isHovering = false;
      mouse.x = -1000;
      mouse.y = -1000;
      draggedNode = null;
      setHoveredNode(null);
    };

    const onMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const found = getNodeAt(clickX, clickY);
      if (found) {
        draggedNode = found;
        dragOffset.x = found.x - clickX;
        dragOffset.y = found.y - clickY;
      }
    };

    const onMouseUp = () => {
      draggedNode = null;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const onTouchStart = (e) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      const touchX = e.touches[0].clientX - rect.left;
      const touchY = e.touches[0].clientY - rect.top;
      mouse.x = touchX;
      mouse.y = touchY;
      mouse.isHovering = true;

      const found = getNodeAt(touchX, touchY);
      if (found) {
        draggedNode = found;
        dragOffset.x = found.x - touchX;
        dragOffset.y = found.y - touchY;
        setHoveredNode(found);
        setTooltipPos({ x: found.x, y: found.y });
      } else {
        setHoveredNode(null);
      }
    };

    const onTouchMove = (e) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      const touchX = e.touches[0].clientX - rect.left;
      const touchY = e.touches[0].clientY - rect.top;
      mouse.x = touchX;
      mouse.y = touchY;
      mouse.isHovering = true;

      if (draggedNode && e.cancelable) {
        e.preventDefault();
      }
    };

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onMouseLeave);

    // --- LOOP DE RENDERIZAÇÃO LIMPO (CONSTELAÇÃO PARADA E ESTÁVEL) ---
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const allNodes = [...hubs, ...skills];

      // Posições firmes e paradas (somente o arraste manual altera a posição)
      for (const node of allNodes) {
        if (node === draggedNode) {
          node.x = mouse.x + dragOffset.x;
          node.y = mouse.y + dragOffset.y;
        } else {
          node.x += (node.baseX - node.x) * 0.15;
          node.y += (node.baseY - node.y) * 0.15;
        }
      }

      // Linhas da Constelação Cósmica Firmes e Nítidas
      rawLinks.forEach((link) => {
        const n1 = allNodes.find((n) => n.id === link.from);
        const n2 = allNodes.find((n) => n.id === link.to);
        if (!n1 || !n2) return;

        const isHighlighted =
          draggedNode?.id === n1.id ||
          draggedNode?.id === n2.id ||
          hoveredNode?.id === n1.id ||
          hoveredNode?.id === n2.id;

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);

        if (isHighlighted) {
          ctx.strokeStyle = '#22d3ee';
          ctx.lineWidth = 2.4 * scale;
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 12 * scale;
        } else {
          ctx.strokeStyle = 'rgba(147, 197, 253, 0.28)';
          ctx.lineWidth = 1.3 * scale;
          ctx.shadowBlur = 0;
        }

        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Hubs Estelares Fixos (Nexus de 4 pontas limpos e radiantes)
      for (const hub of hubs) {
        const isHover = hoveredNode?.id === hub.id;
        ctx.save();
        ctx.translate(hub.x, hub.y);

        // Halo Difuso Radiante
        const haloRadius = (isHover ? 30 : 20) * scale;
        const haloGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, haloRadius);
        haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        haloGrad.addColorStop(0.35, isHover ? 'rgba(168, 85, 247, 0.85)' : 'rgba(168, 85, 247, 0.45)');
        haloGrad.addColorStop(1, 'rgba(168, 85, 247, 0)');
        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(0, 0, haloRadius, 0, Math.PI * 2);
        ctx.fill();

        // Estrela de 4 pontas fixa
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = hub.color;
        ctx.shadowBlur = (isHover ? 24 : 14) * scale;

        const size = (isHover ? 18 : 13) * scale;
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.quadraticCurveTo(0, 0, size, 0);
        ctx.quadraticCurveTo(0, 0, 0, size);
        ctx.quadraticCurveTo(0, 0, -size, 0);
        ctx.quadraticCurveTo(0, 0, 0, -size);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.restore();

        // Texto do Hub
        ctx.fillStyle = isHover ? '#ffffff' : '#cbd5e1';
        ctx.font = `bold ${Math.max(9, Math.round(12 * scale))}px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 6;
        ctx.fillText(hub.label, hub.x, hub.y + 16 * scale);
        ctx.shadowBlur = 0;
      }

      // Nós de Habilidades Firmes e Parados
      for (const skill of skills) {
        const isHover = hoveredNode?.id === skill.id;
        const r = (isHover ? skill.r * 1.25 : skill.r) * scale;

        // Anel de Aura Neon Fixo
        ctx.beginPath();
        ctx.arc(skill.x, skill.y, r + 4 * scale, 0, Math.PI * 2);
        ctx.strokeStyle = skill.color;
        ctx.globalAlpha = isHover ? 0.85 : 0.28;
        ctx.lineWidth = 1.2 * scale;
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // Fundo Glass Escuro do Nó
        ctx.beginPath();
        ctx.arc(skill.x, skill.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isHover ? '#1e293b' : '#0b1120';
        ctx.fill();

        // Borda Colorida com Sombra Neon
        ctx.lineWidth = (isHover ? 3.0 : 2.0) * scale;
        ctx.strokeStyle = skill.color;
        ctx.shadowColor = skill.color;
        ctx.shadowBlur = (isHover ? 20 : 10) * scale;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Símbolo / Texto do Ícone Central
        ctx.fillStyle = isHover ? '#ffffff' : skill.color;
        ctx.font = `900 ${Math.max(9, Math.round(r * 0.74))}px "Fira Code", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.symbol, skill.x, skill.y);

        // Nome da Tecnologia Abaixo do Nó
        ctx.fillStyle = isHover ? '#ffffff' : '#cbd5e1';
        ctx.font = `${isHover ? 'bold' : '500'} ${Math.max(9, Math.round(11 * scale))}px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 6;
        ctx.fillText(skill.name, skill.x, skill.y + r + 5 * scale);
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onMouseLeave);
    };
  }, []);

  return (
    <section id="tecnologias" className="py-20 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <RevealOnScroll direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Constelação de Habilidades
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="skills-text-liquid">Skills Constellation</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
              <span>Toque ou passe o cursor sobre as estrelas para ver detalhes das tecnologias.</span>
            </p>
          </div>
        </RevealOnScroll>

        {/* Constelação Aberta e Integrada ao Espaço Cósmico */}
        <div
          ref={containerRef}
          className="relative w-full overflow-visible h-[500px] sm:h-[560px] md:h-[680px]"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full block cursor-grab active:cursor-grabbing touch-pan-y"
          />

          {/* Tooltip Card Flutuante Responsivo */}
          {hoveredNode && !hoveredNode.isHub && (
            <div
              className="skill-info-card opacity-100 pointer-events-none"
              style={
                containerRef.current && containerRef.current.clientWidth < 640
                  ? {
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: `${Math.min(
                        Math.max(tooltipPos.y - 75, 12),
                        (containerRef.current?.clientHeight || 640) - 130
                      )}px`,
                    }
                  : {
                      left: `${Math.min(
                        Math.max(tooltipPos.x + 18, 20),
                        (containerRef.current?.clientWidth || 360) - 270
                      )}px`,
                      top: `${Math.min(
                        Math.max(tooltipPos.y - 40, 20),
                        580
                      )}px`,
                    }
              }
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="font-bold text-white text-sm">{hoveredNode.name}</h4>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/20 text-white">
                  {hoveredNode.category}
                </span>
              </div>
              <p className="text-xs text-white/95 leading-relaxed font-normal">
                {hoveredNode.desc}
              </p>
            </div>
          )}
        </div>

        {/* Rodapé da Seção */}
        <div className="mt-4 sm:mt-6 text-center flex items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-400 font-mono">
            Estrutura conectada entre Frontend, Backend, Banco de Dados, Cloud e Ferramentas.
          </span>
        </div>

      </div>
    </section>
  );
}
