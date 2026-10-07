import React, { useRef, useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

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

    let width = (canvas.width = containerRef.current.clientWidth);
    let height = (canvas.height = Math.max(680, window.innerHeight * 0.75));

    const handleResize = () => {
      if (!containerRef.current) return;
      width = canvas.width = containerRef.current.clientWidth;
      height = canvas.height = containerRef.current.clientHeight || 680;
      initPositions();
    };
    window.addEventListener('resize', handleResize);

    // --- DADOS DA CONSTELAÇÃO (LAYOUT RELATIVO EM %) ---
    const rawHubs = [
      { id: 'hub-tools', label: 'Tools', rx: 0.22, ry: 0.32, color: '#a855f7' },
      { id: 'hub-design', label: 'Design', rx: 0.28, ry: 0.65, color: '#f59e0b' },
      { id: 'hub-frontend', label: 'Front-End', rx: 0.45, ry: 0.52, color: '#06b6d4' },
      { id: 'hub-prog', label: 'Programming', rx: 0.63, ry: 0.44, color: '#6366f1' },
      { id: 'hub-cloud', label: 'Cloud & Infra', rx: 0.74, ry: 0.24, color: '#f97316' },
      { id: 'hub-backend', label: 'Back-End', rx: 0.73, ry: 0.62, color: '#10b981' },
    ];

    const rawSkills = [
      {
        id: 'git',
        name: 'Git',
        category: 'Controle de Versão',
        desc: 'Versionamento seguro, branching strategy e histórico consistente.',
        rx: 0.28,
        ry: 0.25,
        r: 20,
        color: '#f05032',
        symbol: 'GIT',
      },
      {
        id: 'github',
        name: 'GitHub',
        category: 'Colaboração & CI',
        desc: 'Repositórios estruturados, versionamento e automação de código.',
        rx: 0.24,
        ry: 0.48,
        r: 20,
        color: '#c084fc',
        symbol: 'GH',
      },
      {
        id: 'html-css',
        name: 'HTML5 & CSS3',
        category: 'Estruturação & Estilo',
        desc: 'Semântica moderna, CSS moderno, Grid, Flexbox e acessibilidade.',
        rx: 0.36,
        ry: 0.73,
        r: 22,
        color: '#e44d26',
        symbol: '</>',
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'Estilização Ágil',
        desc: 'Utility-first framework para interfaces responsivas de alta velocidade.',
        rx: 0.38,
        ry: 0.46,
        r: 21,
        color: '#06b6d4',
        symbol: 'CSS',
      },
      {
        id: 'vite',
        name: 'Vite / Tooling',
        category: 'Build & Bundler',
        desc: 'HMR instantâneo, compilação de assets e configuração otimizada.',
        rx: 0.46,
        ry: 0.71,
        r: 19,
        color: '#f59e0b',
        symbol: '⚡',
      },
      {
        id: 'react',
        name: 'React.js',
        category: 'Front-End Moderno',
        desc: 'Componentes reativos, hooks avançados, Context API e SPAs.',
        rx: 0.52,
        ry: 0.56,
        r: 24,
        color: '#00d8ff',
        symbol: '⚛',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        category: 'Linguagem Core',
        desc: 'ES6+, assincronismo, manipulação DOM e arquitetura orientada a eventos.',
        rx: 0.54,
        ry: 0.37,
        r: 23,
        color: '#f7df1e',
        symbol: 'JS',
      },
      {
        id: 'threejs',
        name: 'Three.js / 3D',
        category: 'Gráficos WebGL',
        desc: 'Criação de universos 3D, câmeras, iluminação e sistemas de partículas interativos.',
        rx: 0.49,
        ry: 0.24,
        r: 19,
        color: '#ffffff',
        symbol: '3D',
      },
      {
        id: 'python',
        name: 'Python',
        category: 'Backend & Automação',
        desc: 'Linguagem principal: APIs, sistemas desktop, scripts e integração com MySQL.',
        rx: 0.62,
        ry: 0.61,
        r: 24,
        color: '#3776ab',
        symbol: 'Py',
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        category: 'Runtime Backend',
        desc: 'Serviços backend rápidos, manipulação de streams e ecossistema npm.',
        rx: 0.67,
        ry: 0.72,
        r: 21,
        color: '#22c55e',
        symbol: 'Node',
      },
      {
        id: 'mysql',
        name: 'MySQL',
        category: 'Banco Relacional',
        desc: 'Modelagem relacional, queries complexas, transações ACID e integridade.',
        rx: 0.81,
        ry: 0.64,
        r: 23,
        color: '#00758f',
        symbol: 'SQL',
      },
      {
        id: 'sqlite',
        name: 'SQLite',
        category: 'Banco Embutido',
        desc: 'Persistência de dados local de alta velocidade para aplicações desktop e testes.',
        rx: 0.83,
        ry: 0.51,
        r: 19,
        color: '#38bdf8',
        symbol: 'DB',
      },
      {
        id: 'aws',
        name: 'AWS Cloud',
        category: 'Cloud Computing',
        desc: 'Certificação AWS Academy Cloud Foundations: EC2, S3, IAM e arquitetura.',
        rx: 0.70,
        ry: 0.35,
        r: 21,
        color: '#ff9900',
        symbol: 'AWS',
      },
    ];

    const rawLinks = [
      { from: 'hub-tools', to: 'git' },
      { from: 'hub-tools', to: 'github' },
      { from: 'hub-tools', to: 'hub-design' },
      { from: 'hub-design', to: 'html-css' },
      { from: 'html-css', to: 'hub-frontend' },
      { from: 'hub-frontend', to: 'tailwind' },
      { from: 'hub-frontend', to: 'vite' },
      { from: 'hub-frontend', to: 'react' },
      { from: 'hub-frontend', to: 'javascript' },
      { from: 'javascript', to: 'threejs' },
      { from: 'javascript', to: 'hub-prog' },
      { from: 'hub-prog', to: 'python' },
      { from: 'hub-prog', to: 'nodejs' },
      { from: 'hub-prog', to: 'hub-cloud' },
      { from: 'hub-cloud', to: 'aws' },
      { from: 'hub-prog', to: 'hub-backend' },
      { from: 'hub-backend', to: 'python' },
      { from: 'hub-backend', to: 'mysql' },
      { from: 'hub-backend', to: 'sqlite' },
      { from: 'hub-backend', to: 'nodejs' },
      { from: 'react', to: 'hub-prog' },
    ];

    let hubs = [];
    let skills = [];

    const initPositions = () => {
      hubs = rawHubs.map((h) => ({
        ...h,
        x: h.rx * width,
        y: h.ry * height,
        baseX: h.rx * width,
        baseY: h.ry * height,
        isHub: true,
      }));

      skills = rawSkills.map((s) => ({
        ...s,
        x: s.rx * width,
        y: s.ry * height,
        baseX: s.rx * width,
        baseY: s.ry * height,
        isHub: false,
      }));
    };

    initPositions();

    // --- INTERATIVIDADE DE HOVER E ARRASTO ---
    const mouse = { x: -1000, y: -1000, isHovering: false };
    let draggedNode = null;
    let dragOffset = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovering = true;

      // Detecção de hover para Tooltip
      const allNodes = [...hubs, ...skills];
      let found = null;
      for (const node of allNodes) {
        const dist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        const hitRadius = node.isHub ? 26 : node.r + 6;
        if (dist <= hitRadius) {
          found = node;
          break;
        }
      }

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

      const allNodes = [...hubs, ...skills];
      for (const node of allNodes) {
        const dist = Math.hypot(node.x - clickX, node.y - clickY);
        const hitRadius = node.isHub ? 28 : node.r + 8;
        if (dist <= hitRadius) {
          draggedNode = node;
          dragOffset.x = node.x - clickX;
          dragOffset.y = node.y - clickY;
          break;
        }
      }
    };

    const onMouseUp = () => {
      draggedNode = null;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const onTouchMove = (e) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.isHovering = true;
    };
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onMouseLeave);

    // --- LOOP DE RENDERIZAÇÃO LIMPO (CONSTELAÇÃO PARADA E ESTÁVEL) ---
    const render = () => {
      // 100% transparente para que as estrelas 3D do Three.js apareçam com pureza total
      ctx.clearRect(0, 0, width, height);

      const allNodes = [...hubs, ...skills];

      // Posições firmes e paradas (somente o arraste manual altera a posição)
      for (const node of allNodes) {
        if (node === draggedNode) {
          node.x = mouse.x + dragOffset.x;
          node.y = mouse.y + dragOffset.y;
        } else {
          // Retorno elástico suave à posição base caso tenha sido arrastado
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
          ctx.lineWidth = 2.4;
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 12;
        } else {
          ctx.strokeStyle = 'rgba(147, 197, 253, 0.28)';
          ctx.lineWidth = 1.3;
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
        const haloRadius = isHover ? 30 : 20;
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
        ctx.shadowBlur = isHover ? 24 : 14;

        const size = isHover ? 18 : 13;
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
        ctx.font = 'bold 12px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 6;
        ctx.fillText(hub.label, hub.x, hub.y + 18);
        ctx.shadowBlur = 0;
      }

      // Nós de Habilidades Firmes e Parados
      for (const skill of skills) {
        const isHover = hoveredNode?.id === skill.id;
        const r = isHover ? skill.r * 1.25 : skill.r;

        // Anel de Aura Neon Fixo
        ctx.beginPath();
        ctx.arc(skill.x, skill.y, r + 4, 0, Math.PI * 2);
        ctx.strokeStyle = skill.color;
        ctx.globalAlpha = isHover ? 0.85 : 0.28;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // Fundo Glass Escuro do Nó
        ctx.beginPath();
        ctx.arc(skill.x, skill.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isHover ? '#1e293b' : '#0b1120';
        ctx.fill();

        // Borda Colorida com Sombra Neon
        ctx.lineWidth = isHover ? 3.2 : 2.0;
        ctx.strokeStyle = skill.color;
        ctx.shadowColor = skill.color;
        ctx.shadowBlur = isHover ? 22 : 10;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Símbolo / Texto do Ícone Central
        ctx.fillStyle = isHover ? '#ffffff' : skill.color;
        ctx.font = `900 ${Math.round(r * 0.74)}px "Fira Code", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.symbol, skill.x, skill.y);

        // Nome da Tecnologia Abaixo do Nó
        ctx.fillStyle = isHover ? '#ffffff' : '#cbd5e1';
        ctx.font = `${isHover ? 'bold' : '500'} 11px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 6;
        ctx.fillText(skill.name, skill.x, skill.y + r + 7);
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
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onMouseLeave);
    };
  }, []);

  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Constelação de Habilidades
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="skills-text-liquid">Skills Constellation</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
            <span>Passe o cursor sobre os nós para visualizar detalhes das tecnologias.</span>
          </p>
        </div>

        {/* Constelação Aberta e Integrada ao Espaço Cósmico (Sem caixa, sem estrelas duplicadas) */}
        <div
          ref={containerRef}
          className="relative w-full overflow-visible"
          style={{ height: '680px' }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full block cursor-grab active:cursor-grabbing"
          />

          {/* Tooltip Card Flutuante */}
          {hoveredNode && !hoveredNode.isHub && (
            <div
              className="skill-info-card opacity-100 pointer-events-none"
              style={{
                left: `${Math.min(Math.max(tooltipPos.x + 18, 20), containerRef.current ? containerRef.current.clientWidth - 260 : 700)}px`,
                top: `${Math.min(Math.max(tooltipPos.y - 40, 20), 580)}px`,
              }}
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
        <div className="mt-6 text-center flex items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-400 font-mono">
            Estrutura conectada entre Frontend, Backend, Banco de Dados, Cloud e Ferramentas.
          </span>
        </div>

      </div>
    </section>
  );
}
