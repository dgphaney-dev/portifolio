import React, { useState } from 'react';
import { Sparkles, ExternalLink, Info } from 'lucide-react';

export default function TechStack() {
  const [activeNode, setActiveNode] = useState(null);
  const [cardPos, setCardPos] = useState({ x: 0, y: 0 });

  // Hubs estelares (Nexus de constelação com brilho e flare)
  const starHubs = [
    { id: 'hub-tools', label: 'Tools', x: 280, y: 190 },
    { id: 'hub-design', label: 'Design', x: 308, y: 315 },
    { id: 'hub-frontend', label: 'Front-End', x: 442, y: 295 },
    { id: 'hub-prog', label: 'Programming', x: 602, y: 265 },
    { id: 'hub-cloud', label: 'Cloud & Infra', x: 675, y: 165 },
    { id: 'hub-backend', label: 'Back-End', x: 660, y: 315 },
  ];

  // Nós de tecnologia (Pílulas circulares com logos e informações)
  const skillNodes = [
    // Ferramentas & Design
    {
      id: 'git',
      name: 'Git',
      category: 'Controle de Versão',
      desc: 'Versionamento seguro, branching strategy e histórico consistente.',
      x: 330,
      y: 165,
      r: 16,
      color: '#f05032',
      badgeBg: '#2d1b1b',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-rose-400">
          <path d="M21.6 10.8l-8.4-8.4c-.8-.8-2-.8-2.8 0l-2.1 2.1 3.5 3.5c.6-.2 1.3 0 1.8.4.5.5.7 1.2.4 1.8l3.4 3.4c.6-.2 1.3 0 1.8.4.8.8.8 2 0 2.8s-2 .8-2.8 0c-.5-.5-.7-1.3-.4-1.8l-3.3-3.3v4.6c.4.3.7.8.7 1.4 0 1.1-.9 2-2 2s-2-.9-2-2c0-.6.3-1.1.7-1.4v-4.6c-.4-.3-.7-.8-.7-1.4 0-.6.3-1.2.8-1.5l-3.5-3.5-2.1 2.1c-.8.8-.8 2 0 2.8l8.4 8.4c.8.8 2 .8 2.8 0l8.4-8.4c.8-.8.8-2 0-2.8z" />
        </svg>
      ),
    },
    {
      id: 'github',
      name: 'GitHub',
      category: 'Colaboração & CI',
      desc: '724+ contribuições ativas, repositórios públicos e portfólio.',
      x: 282,
      y: 250,
      r: 16,
      color: '#a855f7',
      badgeBg: '#211835',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-purple-300">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'Design & Estilo',
      desc: 'Design responsivo ultra-rápido com glassmorphism e microinterações.',
      x: 390,
      y: 275,
      r: 16,
      color: '#38bdf8',
      badgeBg: '#132838',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-sky-400">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      id: 'html-css',
      name: 'HTML5 / CSS3',
      category: 'Estruturação & Web',
      desc: 'Semântica acessível, SEO e estilizações avançadas modernas.',
      x: 370,
      y: 335,
      r: 15,
      color: '#f97316',
      badgeBg: '#2d1b15',
      icon: (
        <span className="font-bold text-[10px] text-orange-400 font-mono">&lt;/&gt;</span>
      ),
    },

    // Front-End & Interfaces
    {
      id: 'react',
      name: 'React',
      category: 'Front-End UI',
      desc: 'Construção de SPAs dinâmicas, hooks, components modulares e estados.',
      x: 500,
      y: 305,
      r: 17,
      color: '#00d8ff',
      badgeBg: '#122533',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current text-cyan-400 stroke-[1.5]">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" className="fill-current" />
        </svg>
      ),
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Linguagem Core',
      desc: 'Manipulação assíncrona, lógica de frontend e integração de APIs.',
      x: 520,
      y: 245,
      r: 17,
      color: '#f7df1e',
      badgeBg: '#2e2912',
      icon: (
        <span className="font-black text-xs text-yellow-300 font-mono">JS</span>
      ),
    },
    {
      id: 'vite',
      name: 'Vite / Tooling',
      category: 'Build & Bundling',
      desc: 'Ambiente moderno de desenvolvimento ultrarrápido com Hot Reload.',
      x: 468,
      y: 360,
      r: 15,
      color: '#bd34fe',
      badgeBg: '#27173b',
      icon: (
        <span className="font-bold text-[10px] text-purple-300 font-mono">⚡</span>
      ),
    },
    {
      id: 'threejs',
      name: 'Three.js / 3D',
      category: 'WebGL & Interatividade',
      desc: 'Renderização 3D, câmeras interativas e partículas imersivas.',
      x: 495,
      y: 190,
      r: 15,
      color: '#a855f7',
      badgeBg: '#211835',
      icon: (
        <span className="font-bold text-[10px] text-purple-400 font-mono">3D</span>
      ),
    },

    // Backend, Linguagens & Dados
    {
      id: 'python',
      name: 'Python',
      category: 'Backend & Lógica',
      desc: 'Certificação FIAP 80h: Lógica de sistemas, automação, PDV e regras de negócio.',
      x: 602,
      y: 350,
      r: 17,
      color: '#3776ab',
      badgeBg: '#142536',
      icon: (
        <span className="font-black text-xs text-blue-400 font-mono">Py</span>
      ),
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'Runtime Backend',
      desc: 'Execução de servidores, microsserviços e APIs com ambiente JavaScript.',
      x: 628,
      y: 365,
      r: 16,
      color: '#539e43',
      badgeBg: '#192b1a',
      icon: (
        <span className="font-black text-[11px] text-emerald-400 font-mono">JS</span>
      ),
    },
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'Banco Relacional',
      desc: 'Modelagem SQL relacional, índices, constraints e persistência em nuvem.',
      x: 708,
      y: 335,
      r: 17,
      color: '#00758f',
      badgeBg: '#102733',
      icon: (
        <span className="font-bold text-[10px] text-cyan-300 font-mono">SQL</span>
      ),
    },
    {
      id: 'sqlite',
      name: 'SQLite',
      category: 'Banco Embutido',
      desc: 'Armazenamento rápido local para sistemas desktop e testes ágeis.',
      x: 720,
      y: 285,
      r: 14,
      color: '#003b57',
      badgeBg: '#11222e',
      icon: (
        <span className="font-bold text-[9px] text-sky-400 font-mono">DB</span>
      ),
    },
    {
      id: 'aws',
      name: 'AWS Cloud',
      category: 'Computação em Nuvem',
      desc: 'Certificação DIO 18h: Agentes inteligentes em cloud, deploy e serviços AWS.',
      x: 645,
      y: 215,
      r: 16,
      color: '#ff9900',
      badgeBg: '#312411',
      icon: (
        <span className="font-black text-[10px] text-amber-400 font-mono">AWS</span>
      ),
    },
  ];

  // Conexões estelares da constelação
  const links = [
    // Ramo da Esquerda: Ferramentas & Design
    { from: 'hub-tools', to: 'git' },
    { from: 'hub-tools', to: 'github' },
    { from: 'github', to: 'hub-design' },
    { from: 'hub-design', to: 'html-css' },
    { from: 'html-css', to: 'tailwind' },
    { from: 'tailwind', to: 'hub-frontend' },

    // Ramo Central: Front-End & Javascript
    { from: 'hub-frontend', to: 'react' },
    { from: 'hub-frontend', to: 'vite' },
    { from: 'hub-frontend', to: 'javascript' },
    { from: 'javascript', to: 'threejs' },
    { from: 'javascript', to: 'hub-prog' },

    // Ramo da Direita: Programação, Cloud, Backend & Banco
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

  // Helper para obter coordenadas de qualquer ponto (nó ou hub)
  const getCoords = (id) => {
    const hub = starHubs.find((h) => h.id === id);
    if (hub) return { x: hub.x, y: hub.y };
    const node = skillNodes.find((n) => n.id === id);
    if (node) return { x: node.x, y: node.y };
    return { x: 0, y: 0 };
  };

  const isLinkActive = (fromId, toId) => {
    if (!activeNode) return false;
    return activeNode.id === fromId || activeNode.id === toId;
  };

  const handleMouseEnterNode = (node, e) => {
    setActiveNode(node);
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.closest('#skills-constellation-container').getBoundingClientRect();
    setCardPos({
      x: rect.left - parentRect.left + 25,
      y: rect.top - parentRect.top - 20,
    });
  };

  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      {/* Nuvens cósmicas idênticas ao Caio Duque */}
      <div className="skills-clouds" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título com Liquid Gradient Wave */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Constelação de Habilidades
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="skills-text-liquid">Skills Constellation</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400">
            Passe o mouse ou toque nos nós estelares para visualizar a arquitetura de conexões e especialidades.
          </p>
        </div>

        {/* Canvas da Constelação SVG */}
        <div id="skills-constellation-container" className="relative select-none">
          
          {/* Card Flutuante Interativo (Estilo Caio Duque) */}
          {activeNode && (
            <div
              className="skill-info-card opacity-100"
              style={{
                left: `${Math.min(Math.max(cardPos.x, 20), 750)}px`,
                top: `${Math.min(Math.max(cardPos.y, 20), 380)}px`,
              }}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <h4 className="font-bold text-white text-sm">{activeNode.name}</h4>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/20 text-white">
                  {activeNode.category}
                </span>
              </div>
              <p className="text-xs text-white/90 leading-relaxed font-normal">
                {activeNode.desc}
              </p>
            </div>
          )}

          <svg
            viewBox="0 0 1000 520"
            className="w-full h-full overflow-visible pointer-events-auto"
          >
            <defs>
              {/* Filtro de brilho cósmico */}
              <filter id="glow-star" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-node" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Estrelas de Fundo (Partículas cósmicas cintilantes) */}
            {[
              { cx: 120, cy: 90, r: 1.5, o: 0.6 },
              { cx: 210, cy: 140, r: 1, o: 0.4 },
              { cx: 160, cy: 380, r: 2, o: 0.5 },
              { cx: 290, cy: 430, r: 1.2, o: 0.7 },
              { cx: 410, cy: 110, r: 2, o: 0.8 },
              { cx: 580, cy: 120, r: 1.5, o: 0.5 },
              { cx: 750, cy: 110, r: 2, o: 0.6 },
              { cx: 840, cy: 220, r: 1.2, o: 0.4 },
              { cx: 820, cy: 390, r: 1.8, o: 0.7 },
              { cx: 550, cy: 440, r: 1, o: 0.5 },
              { cx: 690, cy: 450, r: 1.5, o: 0.6 },
              { cx: 480, cy: 80, r: 2.2, o: 0.9 },
            ].map((star, idx) => (
              <circle
                key={idx}
                cx={star.cx}
                cy={star.cy}
                r={star.r}
                fill="#ffffff"
                opacity={star.o}
                className="animate-pulse"
              />
            ))}

            {/* Linhas da Constelação (SVG Strokes) */}
            {links.map((link, idx) => {
              const p1 = getCoords(link.from);
              const p2 = getCoords(link.to);
              const active = isLinkActive(link.from, link.to);

              return (
                <line
                  key={idx}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  className={`skill-link ${active ? 'active' : ''}`}
                />
              );
            })}

            {/* Hubs Estelares (Nexus de 4 pontas com flare) */}
            {starHubs.map((hub) => (
              <g
                key={hub.id}
                className="skill-star-hub"
                transform={`translate(${hub.x}, ${hub.y})`}
              >
                {/* Brilho radial difuso */}
                <circle r="12" fill="rgba(168, 85, 247, 0.25)" filter="url(#glow-star)" />
                <circle r="4" fill="#ffffff" />
                
                {/* Cruz estelar com flare */}
                <path
                  d="M0 -14 Q0 0 14 0 Q0 0 0 14 Q0 0 -14 0 Q0 0 0 -14 Z"
                  fill="#ffffff"
                  filter="url(#glow-star)"
                />

                {/* Rótulo do Hub */}
                <text
                  y="22"
                  textAnchor="middle"
                  className="fill-slate-300 font-mono text-[11px] font-bold tracking-wider"
                >
                  {hub.label}
                </text>
              </g>
            ))}

            {/* Nós de Habilidade (Pílulas / Círculos com ícones e rótulos) */}
            {skillNodes.map((node) => {
              const isHovered = activeNode?.id === node.id;

              return (
                <g
                  key={node.id}
                  className="skill-node"
                  transform={`translate(${node.x}, ${node.y})`}
                  onMouseEnter={(e) => handleMouseEnterNode(node, e)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Aura no Hover */}
                  {isHovered && (
                    <circle
                      r={node.r + 9}
                      fill={node.color}
                      opacity="0.3"
                      filter="url(#glow-node)"
                    />
                  )}

                  {/* Círculo Principal Glass */}
                  <circle
                    r={node.r}
                    fill={node.badgeBg}
                    className="glass"
                    style={{ stroke: isHovered ? node.color : 'rgba(255, 255, 255, 0.35)' }}
                  />

                  {/* Conteúdo Central do Ícone */}
                  <foreignObject
                    x={-node.r}
                    y={-node.r}
                    width={node.r * 2}
                    height={node.r * 2}
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      {node.icon}
                    </div>
                  </foreignObject>

                  {/* Nome da Tecnologia Abaixo do Nó */}
                  <text
                    y={node.r + 14}
                    textAnchor="middle"
                    className="fill-white font-mono text-[11px] font-semibold tracking-wide drop-shadow-md"
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Rodapé da Seção */}
        <div className="mt-8 text-center flex items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-400 font-mono">
            Conexões arquiteturais entre Frontend, Backend, Banco de Dados e Ferramentas.
          </span>
        </div>

      </div>
    </section>
  );
}
