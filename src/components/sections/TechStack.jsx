import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, Compass } from 'lucide-react';

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

    // --- ESTRELAS DO CÉU (220+ estrelas com twinkle e profundidade) ---
    const starCount = 220;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      baseAlpha: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.03 + 0.008,
      phase: Math.random() * Math.PI * 2,
      color: ['#ffffff', '#bae6fd', '#e0e7ff', '#c084fc', '#67e8f9'][
        Math.floor(Math.random() * 5)
      ],
      parallax: Math.random() * 0.08 + 0.02,
    }));

    // --- METEOROS / SHOOTING STARS SUAVES E ESPAÇADOS ---
    const meteors = [];
    let lastMeteorTime = 0;

    const spawnMeteor = () => {
      // Nasce suavemente no topo ou lateral
      const startX = Math.random() * width * 1.1 - width * 0.05;
      const startY = Math.random() * (height * 0.35);
      const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
      const speed = Math.random() * 3.5 + 4.5; // Velocidade suave e elegante

      meteors.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 100 + 80,
        thickness: Math.random() * 1.6 + 1,
        opacity: 0.9,
        decay: Math.random() * 0.005 + 0.003, // Desvanece devagar
        color: Math.random() > 0.4 ? '#38bdf8' : '#e879f9',
      });
    };

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
        desc: '724+ contribuições ativas, repositórios públicos e portfólio.',
        rx: 0.24,
        ry: 0.48,
        r: 20,
        color: '#c084fc',
        symbol: 'GH',
      },
      {
        id: 'html-css',
        name: 'HTML5 / CSS3',
        category: 'Estruturação & Web',
        desc: 'Semântica acessível, SEO e estilizações avançadas modernas.',
        rx: 0.35,
        ry: 0.74,
        r: 18,
        color: '#f97316',
        symbol: '</>',
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'Design & Estilo',
        desc: 'Design responsivo ultra-rápido com glassmorphism e microinterações.',
        rx: 0.37,
        ry: 0.48,
        r: 20,
        color: '#38bdf8',
        symbol: 'CSS',
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        category: 'Linguagem Core',
        desc: 'Manipulação assíncrona, lógica de frontend e integração de APIs.',
        rx: 0.53,
        ry: 0.38,
        r: 22,
        color: '#facc15',
        symbol: 'JS',
      },
      {
        id: 'react',
        name: 'React',
        category: 'Front-End UI',
        desc: 'Construção de SPAs dinâmicas, hooks, components modulares e estados.',
        rx: 0.51,
        ry: 0.58,
        r: 22,
        color: '#22d3ee',
        symbol: '⚛',
      },
      {
        id: 'vite',
        name: 'Vite / Tooling',
        category: 'Build & Bundling',
        desc: 'Ambiente moderno de desenvolvimento ultrarrápido com Hot Reload.',
        rx: 0.46,
        ry: 0.73,
        r: 18,
        color: '#a855f7',
        symbol: '⚡',
      },
      {
        id: 'threejs',
        name: 'Three.js / 3D',
        category: 'WebGL & Interatividade',
        desc: 'Renderização 3D, câmeras interativas e partículas imersivas.',
        rx: 0.49,
        ry: 0.24,
        r: 18,
        color: '#818cf8',
        symbol: '3D',
      },
      {
        id: 'python',
        name: 'Python',
        category: 'Backend & Lógica',
        desc: 'Certificação FIAP 80h: Lógica de sistemas, automação, PDV e regras de negócio.',
        rx: 0.62,
        ry: 0.64,
        r: 22,
        color: '#38bdf8',
        symbol: 'Py',
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        category: 'Runtime Backend',
        desc: 'Execução de servidores, microsserviços e APIs com ambiente JavaScript.',
        rx: 0.67,
        ry: 0.74,
        r: 20,
        color: '#4ade80',
        symbol: 'Node',
      },
      {
        id: 'mysql',
        name: 'MySQL',
        category: 'Banco Relacional',
        desc: 'Modelagem SQL relacional, índices, constraints e persistência em nuvem.',
        rx: 0.82,
        ry: 0.66,
        r: 22,
        color: '#06b6d4',
        symbol: 'SQL',
      },
      {
        id: 'sqlite',
        name: 'SQLite',
        category: 'Banco Embutido',
        desc: 'Armazenamento rápido local para sistemas desktop e testes ágeis.',
        rx: 0.84,
        ry: 0.52,
        r: 18,
        color: '#38bdf8',
        symbol: 'DB',
      },
      {
        id: 'aws',
        name: 'AWS Cloud',
        category: 'Computação em Nuvem',
        desc: 'Certificação DIO 18h: Agentes inteligentes em cloud, deploy e serviços AWS.',
        rx: 0.70,
        ry: 0.35,
        r: 20,
        color: '#fbbf24',
        symbol: 'AWS',
      },
    ];

    const rawLinks = [
      { from: 'hub-tools', to: 'git' },
      { from: 'hub-tools', to: 'github' },
      { from: 'github', to: 'hub-design' },
      { from: 'hub-design', to: 'html-css' },
      { from: 'html-css', to: 'tailwind' },
      { from: 'tailwind', to: 'hub-frontend' },
      { from: 'hub-frontend', to: 'react' },
      { from: 'hub-frontend', to: 'vite' },
      { from: 'hub-frontend', to: 'javascript' },
      { from: 'javascript', to: 'threejs' },
      { from: 'javascript', to: 'hub-prog' },
      { from: 'hub-prog', to: 'python' },
      { from: 'hub-prog', to: 'nodejs' },
      { from: 'hub-prog', to: 'aws' },
      { from: 'aws', to: 'hub-cloud' },
      { from: 'hub-prog', to: 'hub-backend' },
      { from: 'hub-backend', to: 'mysql' },
      { from: 'hub-backend', to: 'sqlite' },
      { from: 'python', to: 'hub-backend' },
      { from: 'nodejs', to: 'mysql' },
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
        vx: 0,
        vy: 0,
        isHub: true,
        phase: Math.random() * Math.PI * 2,
      }));

      skills = rawSkills.map((s) => ({
        ...s,
        x: s.rx * width,
        y: s.ry * height,
        baseX: s.rx * width,
        baseY: s.ry * height,
        vx: 0,
        vy: 0,
        isHub: false,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    initPositions();

    // --- MOUSE E FÍSICA INTERATIVA ---
    const mouse = { x: -1000, y: -1000, isHovering: false };
    let draggedNode = null;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovering = true;

      // Detecta nó sobre o qual o mouse está passando
      let found = null;
      for (const node of [...skills, ...hubs]) {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const r = (node.r || 16) + 8;
        if (dx * dx + dy * dy < r * r) {
          found = node;
          break;
        }
      }

      setHoveredNode(found);
      if (found) {
        setTooltipPos({ x: mouse.x, y: mouse.y });
      }
    };

    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isHovering = false;
      draggedNode = null;
      setHoveredNode(null);
    };

    const onMouseDown = () => {
      for (const node of [...skills, ...hubs]) {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const r = (node.r || 16) + 12;
        if (dx * dx + dy * dy < r * r) {
          draggedNode = node;
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

    // Suporte a toque mobile
    const onTouchMove = (e) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.isHovering = true;
    };
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onMouseLeave);

    // --- LOOP DE ANIMAÇÃO ---
    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Fundo do Céu Noturno com Nebulosa Suave
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        50,
        width * 0.5,
        height * 0.5,
        width * 0.7
      );
      bgGrad.addColorStop(0, '#101528');
      bgGrad.addColorStop(0.5, '#0b0f19');
      bgGrad.addColorStop(1, '#060812');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Manchas de Nebulosa Cósmica Colorida
      const nebula1 = ctx.createRadialGradient(width * 0.35, height * 0.45, 10, width * 0.35, height * 0.45, 300);
      nebula1.addColorStop(0, 'rgba(123, 70, 255, 0.14)');
      nebula1.addColorStop(1, 'rgba(123, 70, 255, 0)');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      const nebula2 = ctx.createRadialGradient(width * 0.68, height * 0.55, 10, width * 0.68, height * 0.55, 320);
      nebula2.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
      nebula2.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // 2. Desenho de Estrelas Cintilantes (Céu Estrelado)
      const mouseParallaxX = (mouse.x - width * 0.5) * 0.03;
      const mouseParallaxY = (mouse.y - height * 0.5) * 0.03;

      for (const s of stars) {
        const currentAlpha = s.baseAlpha + Math.sin(time * 0.8 * s.twinkleSpeed * 20 + s.phase) * 0.2;
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        const sx = s.x - mouseParallaxX * s.parallax;
        const sy = s.y - mouseParallaxY * s.parallax;

        ctx.beginPath();
        ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // 3. Atualização e Desenho dos Meteoros (Espaçados e calmos)
      if (time - lastMeteorTime > Math.random() * 5 + 4.5) {
        spawnMeteor();
        lastMeteorTime = time;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.opacity -= m.decay;

        if (m.opacity <= 0 || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - (m.vx / 10) * m.length;
        const tailY = m.y - (m.vy / 10) * m.length;

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
        grad.addColorStop(0.3, m.color === '#38bdf8' ? `rgba(56, 189, 248, ${m.opacity * 0.8})` : `rgba(232, 121, 249, ${m.opacity * 0.8})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = m.thickness;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Cabeça brilhante do meteoro
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.thickness * 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Física Suave dos Nós da Constelação
      const allNodes = [...hubs, ...skills];

      for (const node of allNodes) {
        if (node === draggedNode) {
          node.x = mouse.x;
          node.y = mouse.y;
          node.vx = 0;
          node.vy = 0;
        } else {
          // Movimento orgânico flutuante calmo (Gravidade zero lenta)
          const floatOffset = Math.sin(time * 0.45 + node.phase) * 3.5;
          const targetY = node.baseY + floatOffset;
          const targetX = node.baseX + Math.cos(time * 0.35 + node.phase) * 2.5;

          // Força de atração suave à posição base (Spring fluida)
          const k = 0.025;
          const ax = (targetX - node.x) * k;
          const ay = (targetY - node.y) * k;
          node.vx = (node.vx + ax) * 0.92;
          node.vy = (node.vy + ay) * 0.92;

          // Repulsão suave do mouse ao se aproximar (< 160px)
          if (mouse.isHovering) {
            const dx = node.x - mouse.x;
            const dy = node.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 160 && dist > 1) {
              const force = (160 - dist) / 160;
              node.vx += (dx / dist) * force * 0.5;
              node.vy += (dy / dist) * force * 0.5;
            }
          }

          node.x += node.vx;
          node.y += node.vy;
        }
      }

      // 5. Linhas da Constelação com Pulso Suave de Luz
      for (const link of rawLinks) {
        const n1 = allNodes.find((n) => n.id === link.from);
        const n2 = allNodes.find((n) => n.id === link.to);
        if (!n1 || !n2) continue;

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
          ctx.lineWidth = 2.5;
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 12;
        } else {
          ctx.strokeStyle = 'rgba(147, 197, 253, 0.22)';
          ctx.lineWidth = 1.2;
          ctx.shadowBlur = 0;
        }

        ctx.stroke();
        ctx.shadowBlur = 0;

        // Pulso suave de fóton viajando pela linha
        const pulsePos = (Math.sin(time * 0.6 + (n1.x + n2.y) * 0.005) + 1) * 0.5;
        const px = n1.x + (n2.x - n1.x) * pulsePos;
        const py = n1.y + (n2.y - n1.y) * pulsePos;

        ctx.fillStyle = isHighlighted ? '#ffffff' : 'rgba(192, 132, 252, 0.6)';
        ctx.beginPath();
        ctx.arc(px, py, isHighlighted ? 2.5 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // 6. Desenho dos Hubs Estelares (Nexus de 4 pontas com rotação lenta e majestosa)
      for (const hub of hubs) {
        const isHover = hoveredNode?.id === hub.id;
        ctx.save();
        ctx.translate(hub.x, hub.y);

        // Halo Difuso
        const haloGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, isHover ? 26 : 18);
        haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        haloGrad.addColorStop(0.3, isHover ? 'rgba(168, 85, 247, 0.8)' : 'rgba(168, 85, 247, 0.35)');
        haloGrad.addColorStop(1, 'rgba(168, 85, 247, 0)');
        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(0, 0, isHover ? 26 : 18, 0, Math.PI * 2);
        ctx.fill();

        // Rotação majestosa lenta
        ctx.rotate(time * 0.08);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = hub.color;
        ctx.shadowBlur = isHover ? 22 : 12;

        const size = isHover ? 18 : 13;
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.quadraticCurveTo(0, 0, size, 0);
        ctx.quadraticCurveTo(0, 0, 0, size);
        ctx.quadraticCurveTo(0, 0, -size, 0);
        ctx.quadraticCurveTo(0, 0, 0, -size);
        ctx.fill();

        ctx.restore();

        // Rótulo de Texto do Hub
        ctx.fillStyle = isHover ? '#ffffff' : '#cbd5e1';
        ctx.font = 'bold 11px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 4;
        ctx.fillText(hub.label, hub.x, hub.y + 18);
        ctx.shadowBlur = 0;
      }

      // 7. Desenho dos Nós de Habilidade (Pílulas Glass com Logos)
      for (const skill of skills) {
        const isHover = hoveredNode?.id === skill.id;
        const r = isHover ? skill.r * 1.25 : skill.r;

        // Aura de Brilho no Hover
        if (isHover) {
          ctx.beginPath();
          ctx.arc(skill.x, skill.y, r + 14, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(6, 182, 212, 0.25)';
          ctx.fill();
        }

        // Círculo Fundo do Nó
        ctx.beginPath();
        ctx.arc(skill.x, skill.y, r, 0, Math.PI * 2);
        ctx.fillStyle = '#0f172a';
        ctx.fill();

        // Borda Colorida com Gradiente Cósmico
        ctx.lineWidth = isHover ? 3 : 1.8;
        ctx.strokeStyle = isHover ? skill.color : 'rgba(255, 255, 255, 0.35)';
        ctx.shadowColor = isHover ? skill.color : 'transparent';
        ctx.shadowBlur = isHover ? 18 : 0;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Símbolo / Texto do Ícone Central
        ctx.fillStyle = isHover ? '#ffffff' : skill.color;
        ctx.font = `900 ${Math.round(r * 0.72)}px "Fira Code", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.symbol, skill.x, skill.y);

        // Nome da Tecnologia Abaixo do Nó
        ctx.fillStyle = isHover ? '#ffffff' : '#94a3b8';
        ctx.font = `${isHover ? 'bold' : 'normal'} 11px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 5;
        ctx.fillText(skill.name, skill.x, skill.y + r + 6);
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
    <section id="tecnologias" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Constelação Interativa
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="skills-text-liquid">Skills Constellation</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
            <Compass className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Mova o mouse pelo céu para interagir com a gravidade, arraste os nós e observe os meteoros passando.</span>
          </p>
        </div>

        {/* Canvas Expansivo da Constelação (Mais amplo e imersivo) */}
        <div
          ref={containerRef}
          className="relative w-full rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.7)] bg-[#060812]"
          style={{ height: '700px' }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full block cursor-grab active:cursor-grabbing"
          />

          {/* Tooltip Card Flutuante (Caio Duque Glass) */}
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

          {/* Dica de Interatividade no canto inferior */}
          <div className="absolute bottom-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/10 backdrop-blur-md text-[11px] text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Física ativa • Arraste ou passe o cursor sobre as estrelas</span>
          </div>

          <div className="absolute bottom-4 right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/10 backdrop-blur-md text-[11px] text-slate-400 font-mono">
            <span>☄️ Meteoros em tempo real</span>
          </div>
        </div>

        {/* Rodapé da Seção */}
        <div className="mt-8 text-center flex items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-400 font-mono">
            Estrutura conectada entre Frontend, Backend, Banco de Dados, Cloud e Ferramentas.
          </span>
        </div>

      </div>
    </section>
  );
}
