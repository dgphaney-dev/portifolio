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

    // --- 1. CAMPO ESTELAR PROFUNDO (350+ estrelas luminosas com brilho e twinkle) ---
    const starCount = 350;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.8,
      baseAlpha: Math.random() * 0.5 + 0.35,
      twinkleSpeed: Math.random() * 2.5 + 1.2,
      phase: Math.random() * Math.PI * 2,
      color: [
        '#ffffff', // Branco estelar
        '#67e8f9', // Ciano neon
        '#c084fc', // Violeta cósmico
        '#fef08a', // Dourado quente
        '#f472b6', // Rosa nebulosa
        '#93c5fd', // Azul celeste
      ][Math.floor(Math.random() * 6)],
      parallax: Math.random() * 0.09 + 0.03,
      hasSpikes: Math.random() > 0.88, // Estrelas maiores com diffraction spikes de 4 pontas
    }));

    // --- 2. METEOROS / SHOOTING STARS DINÂMICOS (Frequência ativa: a cada 2.5s a 5s) ---
    const meteors = [];
    const meteorSparks = [];
    let lastMeteorTime = performance.now();
    let nextMeteorDelay = 2200;

    const spawnMeteor = () => {
      const startX = Math.random() * (width * 1.1) - width * 0.05;
      const startY = Math.random() * (height * 0.4);
      const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
      const speed = Math.random() * 5.0 + 7.5; // Velocidade visualmente impressionante

      meteors.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 120 + 90,
        thickness: Math.random() * 2.2 + 1.4,
        opacity: 1.0,
        decay: Math.random() * 0.012 + 0.008,
        color: Math.random() > 0.45 ? '#38bdf8' : '#f472b6',
      });
    };

    // --- 3. DUST DE CURSOR (Poeira estelar interativa) ---
    const stardust = [];

    // --- 4. DADOS DA CONSTELAÇÃO (LAYOUT RELATIVO EM %) ---
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
      hubs = rawHubs.map((h, idx) => ({
        ...h,
        x: h.rx * width,
        y: h.ry * height,
        baseX: h.rx * width,
        baseY: h.ry * height,
        vx: 0,
        vy: 0,
        phase: idx * 1.1,
        floatFreqX: 1.1 + (idx % 3) * 0.2,
        floatFreqY: 0.9 + (idx % 2) * 0.3,
        floatAmp: 11,
        isHub: true,
      }));

      skills = rawSkills.map((s, idx) => ({
        ...s,
        x: s.rx * width,
        y: s.ry * height,
        baseX: s.rx * width,
        baseY: s.ry * height,
        vx: 0,
        vy: 0,
        phase: idx * 0.85 + 2.0,
        floatFreqX: 1.3 + (idx % 4) * 0.2,
        floatFreqY: 1.0 + (idx % 3) * 0.25,
        floatAmp: 13,
        isHub: false,
      }));
    };

    initPositions();

    // --- 5. INTERATIVIDADE COM MOUSE & TOQUE ---
    const mouse = { x: -1000, y: -1000, isHovering: false };
    let draggedNode = null;
    let dragOffset = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovering = true;

      // Adiciona poeira estelar suave sob o cursor
      if (Math.random() > 0.4) {
        stardust.push({
          x: mouse.x + (Math.random() * 12 - 6),
          y: mouse.y + (Math.random() * 12 - 6),
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2.2 + 0.8,
          alpha: 0.85,
          color: Math.random() > 0.5 ? '#38bdf8' : '#c084fc',
        });
      }

      // Detecção de hover para Tooltip
      const allNodes = [...hubs, ...skills];
      let found = null;
      for (const node of allNodes) {
        const dist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        const hitRadius = node.isHub ? 24 : node.r + 6;
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
        const hitRadius = node.isHub ? 26 : node.r + 6;
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

    // --- 6. LOOP DE ANIMAÇÃO VIVO E FLUIDO ---
    let startTime = performance.now();
    let lastTime = startTime;

    const render = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) * 0.001, 0.1);
      lastTime = now;
      const time = (now - startTime) * 0.001; // Tempo em segundos reais

      ctx.clearRect(0, 0, width, height);

      // A. Nebulosa Cósmica Translúcida Suave (Permite que o fundo 3D do site respire por trás)
      const nebula1 = ctx.createRadialGradient(width * 0.35, height * 0.45, 10, width * 0.35, height * 0.45, 340);
      nebula1.addColorStop(0, 'rgba(123, 70, 255, 0.16)');
      nebula1.addColorStop(0.6, 'rgba(123, 70, 255, 0.04)');
      nebula1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      const nebula2 = ctx.createRadialGradient(width * 0.68, height * 0.52, 10, width * 0.68, height * 0.52, 360);
      nebula2.addColorStop(0, 'rgba(6, 182, 212, 0.14)');
      nebula2.addColorStop(0.6, 'rgba(6, 182, 212, 0.03)');
      nebula2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // B. Desenho das Estrelas Vivas (Brilho dinâmico, pulso de luz e diffraction spikes)
      const mouseParallaxX = (mouse.x - width * 0.5) * 0.03;
      const mouseParallaxY = (mouse.y - height * 0.5) * 0.03;

      for (const s of stars) {
        // Pulso cintilante evidente e vivo
        const twinkle = Math.sin(time * s.twinkleSpeed + s.phase);
        const alpha = Math.max(0.2, Math.min(1.0, s.baseAlpha + twinkle * 0.4));
        const sx = s.x - mouseParallaxX * s.parallax;
        const sy = s.y - mouseParallaxY * s.parallax;

        // Halo suave ao redor da estrela
        if (s.size > 1.6) {
          const halo = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.size * 3.5);
          halo.addColorStop(0, s.color);
          halo.addColorStop(0.4, s.color + '55');
          halo.addColorStop(1, 'transparent');
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(sx, sy, s.size * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Núcleo brilhante
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Diffraction spikes em estrelas proeminentes (Cruz cósmica de 4 pontas)
        if (s.hasSpikes && alpha > 0.6) {
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          const spikeLen = s.size * 4.5;
          ctx.moveTo(sx - spikeLen, sy);
          ctx.lineTo(sx + spikeLen, sy);
          ctx.moveTo(sx, sy - spikeLen);
          ctx.lineTo(sx, sy + spikeLen);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1.0;

      // C. Poeira Estelar do Cursor (Stardust)
      for (let i = stardust.length - 1; i >= 0; i--) {
        const p = stardust[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;
        if (p.alpha <= 0) {
          stardust.splice(i, 1);
          continue;
        }
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      // D. Meteoros e Cometas (Passando ativamente pelo céu a cada poucos segundos)
      if (now - lastMeteorTime > nextMeteorDelay) {
        spawnMeteor();
        lastMeteorTime = now;
        nextMeteorDelay = 2200 + Math.random() * 2600; // Entre 2.2s e 4.8s
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.opacity -= m.decay;

        if (m.opacity <= 0 || m.x > width + 150 || m.y > height + 150) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - (m.vx / 8) * m.length;
        const tailY = m.y - (m.vy / 8) * m.length;

        // Rastro luminoso do cometa
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
        grad.addColorStop(0.25, m.color === '#38bdf8' ? `rgba(56, 189, 248, ${m.opacity * 0.9})` : `rgba(244, 114, 182, ${m.opacity * 0.9})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = m.thickness;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Cabeça intensa do meteoro com brilho solar
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = m.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.thickness * 1.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // E. Física Orgânica, Flutuação Viva e Repulsão Magnética dos Nós
      const allNodes = [...hubs, ...skills];

      for (const node of allNodes) {
        if (node === draggedNode) {
          node.x = mouse.x + dragOffset.x;
          node.y = mouse.y + dragOffset.y;
          node.vx = 0;
          node.vy = 0;
        } else {
          // Flutuação orgânica harmoniosa perceptível e viva (Amplitude 9 a 13px, período de 3 a 4s)
          const targetX = node.baseX + Math.sin(time * node.floatFreqX + node.phase) * node.floatAmp;
          const targetY = node.baseY + Math.cos(time * node.floatFreqY + node.phase) * (node.floatAmp * 0.85);

          // Força de atração à posição flutuante (Spring elástica suave)
          const k = 0.035;
          const ax = (targetX - node.x) * k;
          const ay = (targetY - node.y) * k;
          node.vx = (node.vx + ax) * 0.90;
          node.vy = (node.vy + ay) * 0.90;

          // Repulsão Magnética Dinâmica ao se aproximar com o mouse (< 170px)
          if (mouse.isHovering) {
            const dx = node.x - mouse.x;
            const dy = node.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 170 && dist > 1) {
              const force = (170 - dist) / 170;
              node.vx += (dx / dist) * force * 1.4;
              node.vy += (dy / dist) * force * 1.4;
            }
          }

          node.x += node.vx;
          node.y += node.vy;
        }
      }

      // F. Linhas da Constelação Cósmica com Fótons Viajantes
      rawLinks.forEach((link, linkIdx) => {
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
          ctx.shadowBlur = 14;
        } else {
          ctx.strokeStyle = 'rgba(147, 197, 253, 0.28)';
          ctx.lineWidth = 1.3;
          ctx.shadowBlur = 0;
        }

        ctx.stroke();
        ctx.shadowBlur = 0;

        // Fótons brilhantes viajando pela linha em velocidade fluida
        const progress1 = (time * 0.75 + linkIdx * 0.27) % 1.0;
        const px1 = n1.x + (n2.x - n1.x) * progress1;
        const py1 = n1.y + (n2.y - n1.y) * progress1;

        ctx.fillStyle = isHighlighted ? '#ffffff' : '#38bdf8';
        ctx.shadowColor = isHighlighted ? '#00e5ff' : '#60a5fa';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px1, py1, isHighlighted ? 3.0 : 2.0, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // G. Hubs Estelares (Estrelas de 4 pontas com rotação viva, aura e satélites)
      for (const hub of hubs) {
        const isHover = hoveredNode?.id === hub.id;
        ctx.save();
        ctx.translate(hub.x, hub.y);

        // Halo Difuso Radiante
        const haloRadius = isHover ? 32 : 22;
        const haloGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, haloRadius);
        haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        haloGrad.addColorStop(0.35, isHover ? 'rgba(168, 85, 247, 0.85)' : 'rgba(168, 85, 247, 0.45)');
        haloGrad.addColorStop(1, 'rgba(168, 85, 247, 0)');
        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(0, 0, haloRadius, 0, Math.PI * 2);
        ctx.fill();

        // Rotação graciosa da estrela nexus
        ctx.rotate(time * 0.45);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = hub.color;
        ctx.shadowBlur = isHover ? 26 : 16;

        const size = isHover ? 19 : 14;
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.quadraticCurveTo(0, 0, size, 0);
        ctx.quadraticCurveTo(0, 0, 0, size);
        ctx.quadraticCurveTo(0, 0, -size, 0);
        ctx.quadraticCurveTo(0, 0, 0, -size);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Mini satélite orbital girando em volta do nexus
        const satAngle = time * 2.2 + hub.phase;
        const satDist = isHover ? 28 : 22;
        const satX = Math.cos(satAngle) * satDist;
        const satY = Math.sin(satAngle) * satDist;
        ctx.fillStyle = '#67e8f9';
        ctx.beginPath();
        ctx.arc(satX, satY, 1.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Texto do Hub com brilho
        ctx.fillStyle = isHover ? '#ffffff' : '#e2e8f0';
        ctx.font = 'bold 12px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 6;
        ctx.fillText(hub.label, hub.x, hub.y + 20);
        ctx.shadowBlur = 0;
      }

      // H. Nós de Habilidades (Pílulas Glass com anel de neon pulsante e logos)
      for (const skill of skills) {
        const isHover = hoveredNode?.id === skill.id;
        const r = isHover ? skill.r * 1.25 : skill.r;

        // Anel de respiração neon que pulsa continuamente
        const pulse = Math.sin(time * 2.8 + skill.phase) * 3;
        ctx.beginPath();
        ctx.arc(skill.x, skill.y, r + 4 + pulse, 0, Math.PI * 2);
        ctx.strokeStyle = skill.color;
        ctx.globalAlpha = isHover ? 0.75 : 0.28;
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
            Constelação Interativa Viva
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="skills-text-liquid">Skills Constellation</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Mova o mouse pelo cosmos para repelir nós, arraste tecnologias e veja meteoros ativos passando em tempo real.</span>
          </p>
        </div>

        {/* Constelação Aberta e Integrada ao Espaço Cósmico (Sem caixa, sem bordas) */}
        <div
          ref={containerRef}
          className="relative w-full overflow-visible"
          style={{ height: '720px' }}
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

        {/* Rodapé da Seção com Badges Sutis */}
        <div className="mt-4 text-center flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md text-[11px] text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Física interativa no espaço • Arraste ou aproxime o cursor</span>
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md text-[11px] text-cyan-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>☄️ Meteoros ativos em tempo real</span>
          </span>
        </div>

      </div>
    </section>
  );
}
