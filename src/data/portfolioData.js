export const portfolioData = {
  personal: {
    name: "Douglas Phaney",
    role: "Desenvolvedor React | Python | MySQL",
    tagline: "Desenvolvendo aplicações com React no front-end e Python & MySQL no back-end.",
    bio: "Graduando em Análise e Desenvolvimento de Sistemas (ADS) pela Católica e desenvolvedor com 1 ano e meio de prática e estudos focado no ecossistema web e dados. Construo interfaces reativas com React, automações e lógica com Python e modelagem de bancos de dados relacionais com MySQL. Focado em código limpo, boas práticas e aprendizado contínuo.",
    location: "Brasil (Disponível para Remoto e Híbrido)",
    availability: "Disponível para contratação imediata",
    email: "douglasphalbuquerque@gmail.com",
    whatsapp: "5511999999999", // Coloque seu número com DDD
    github: "https://github.com/douglasphaney",
    linkedin: "https://www.linkedin.com/in/douglasphaney/",
    avatar: "/profile.png",
    resumeUrl: "#", // Link para baixar seu PDF ou Google Drive
  },

  stats: [
    { label: "Anos Praticando", value: "1.5" },
    { label: "Stack Principal", value: "Python, MySQL, React" },
    { label: "Foco Contínuo", value: "Projetos Reais" },
    { label: "Compromisso", value: "100%" },
  ],

  differentials: [
    {
      title: "Clean Code & Organização",
      description: "Código estruturado, legível e de fácil manutenção para equipes.",
      icon: "Code2",
    },
    {
      title: "Integração Front e Back",
      description: "Conexão fluida entre interfaces React e serviços/bancos em Python e MySQL.",
      icon: "TrendingUp",
    },
    {
      title: "Bancos de Dados Relacionais",
      description: "Criação de esquemas, consultas SQL, joins e integridade de dados com MySQL.",
      icon: "Zap",
    },
    {
      title: "Dedicação & Evolução Rápida",
      description: "Compromisso em aprender constantemente novas tecnologias e resolver desafios práticos.",
      icon: "Smartphone",
    },
  ],

  skills: {
    frontend: [
      { name: "React.js", level: "Intermediário", icon: "Atom" },
      { name: "JavaScript", level: "Intermediário", icon: "FileCode" },
      { name: "HTML5 / CSS3", level: "Intermediário", icon: "Layout" },
      { name: "Tailwind CSS", level: "Intermediário", icon: "Palette" },
    ],
    backend: [
      { name: "Python", level: "Intermediário", icon: "FileCode" },
      { name: "MySQL", level: "Intermediário", icon: "Database" },
      { name: "REST APIs", level: "Intermediário", icon: "Network" },
      { name: "Consultas SQL & CRUD", level: "Intermediário", icon: "Layers" },
    ],
    tools: [
      { name: "Git & GitHub", level: "Intermediário", icon: "GitBranch" },
      { name: "VS Code", level: "Intermediário", icon: "Code" },
      { name: "Vite", level: "Intermediário", icon: "Zap" },
      { name: "Postman", level: "Intermediário", icon: "Send" },
    ],
  },

  projects: [
    {
      id: "nextgen-erp",
      title: "NextGen ERP - Gestão Integrada",
      category: "Full Stack",
      featured: true,
      description: "Sistema ERP moderno para gestão empresarial, controle de operações, fluxos de processos e tomada de decisões estratégicas.",
      longDescription: "Projeto NextGen ERP focado em integrar diferentes setores corporativos, oferecendo controle operacional, organização de dados e interface fluida para os usuários.",
      tags: ["JavaScript", "React", "Node.js", "MySQL", "ERP"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com/douglasphaney/nextgen-erp",
      githubUrl: "https://github.com/douglasphaney/nextgen-erp",
      highlights: [
        "Módulos integrados para controle empresarial",
        "Interface moderna e dinâmica com JavaScript",
        "Estrutura escalável para gestão de dados",
      ],
    },
    {
      id: "pdv-supermercado",
      title: "PDV Supermercado - Ponto de Venda & Caixa",
      category: "Full Stack",
      featured: true,
      description: "Sistema ágil de Ponto de Venda (PDV) para supermercados e varejo, com registro de itens, cálculo de totais e controle de caixa.",
      longDescription: "Solução pensada para a rotina de atendimento e caixa de supermercados. Permite registro rápido de produtos, controle de fechamento de caixa e integração com banco de dados MySQL para movimentação de estoque.",
      tags: ["Python", "MySQL", "React", "PDV", "Estoque"],
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com/douglasphaney",
      githubUrl: "https://github.com/douglasphaney",
      highlights: [
        "Registro rápido de vendas e emissão de cupons/totais",
        "Gestão de caixa e conferência de valores",
        "Persistência segura e confiável no MySQL",
      ],
    },
    {
      id: "sistema-barbearia",
      title: "Sistema Barbearia - Agendamento & Serviços",
      category: "Frontend",
      featured: true,
      description: "Plataforma web para barbearias com catálogo de serviços, apresentação de profissionais e layout responsivo para smartphones.",
      longDescription: "Aplicação front-end projetada para barbearias modernas. Apresenta horários, tabela de preços, serviços de cortes e barbas, com design pensado para visualização rápida no celular dos clientes.",
      tags: ["JavaScript", "HTML5", "CSS3", "Design Responsivo"],
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com/douglasphaney/sistema-barbearia",
      githubUrl: "https://github.com/douglasphaney/sistema-barbearia",
      highlights: [
        "Vitrine de serviços e cortes com fotos de alta qualidade",
        "Totalmente responsivo e otimizado para dispositivos móveis",
        "Estrutura semântica limpa e de fácil manutenção",
      ],
    },
    {
      id: "sistema-de-registro",
      title: "Sistema de Registro (Python)",
      category: "Backend",
      featured: false,
      description: "Aplicação em Python para cadastro, validação e manipulação de registros de usuários com regras de negócio seguras.",
      longDescription: "Projeto backend focado na validação consistente de entradas de dados, criptografia/hashing, tratamento de erros e armazenamento seguro de registros.",
      tags: ["Python", "MySQL", "CRUD", "Validação"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com/douglasphaney/sistema-de-registro",
      githubUrl: "https://github.com/douglasphaney/sistema-de-registro",
      highlights: [
        "Rotinas estruturadas em Python com boas práticas",
        "Validação de campos obrigatórios e sanitização",
        "Operações de leitura e escrita em banco de dados",
      ],
    },
    {
      id: "site-de-venda-responsivo",
      title: "Site de Venda Responsivo",
      category: "Frontend",
      featured: false,
      description: "Landing page e vitrine de vendas otimizada para conversão, com catálogo interativo e adaptação para qualquer tela.",
      longDescription: "Site de vendas com foco em performance e experiência de compra. Desenvolvido com HTML semântico, estilização moderna e interatividade para apresentação atraente de produtos.",
      tags: ["HTML5", "CSS3", "JavaScript", "E-commerce"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com/douglasphaney/site-de-venda-responsivo",
      githubUrl: "https://github.com/douglasphaney/site-de-venda-responsivo",
      highlights: [
        "Layout focado em conversão e usabilidade (UX)",
        "Adaptação perfeita para mobile, tablet e desktop",
        "Microinterações e carregamento rápido",
      ],
    },
  ],

  experience: [
    {
      role: "Em Busca da Primeira Oportunidade (Estágio / Júnior)",
      company: "Disponível para Contratação",
      period: "Atualmente buscando",
      description: "Estudante de Análise e Desenvolvimento de Sistemas na Católica com 1 ano e meio de dedicação prática. Busco oportunidade como Estagiário ou Desenvolvedor Júnior para agregar valor com React, Python e MySQL, com grande facilidade de aprendizado e trabalho em equipe.",
      technologies: ["React", "Python", "MySQL", "JavaScript", "Git & GitHub"],
    },
    {
      role: "Desenvolvimento de Projetos Pessoais & Prática Contínua",
      company: "Estudos & Portfólio Prático",
      period: "1 ano e meio de prática",
      description: "Criação e manutenção de projetos reais como NextGen ERP, PDV de Supermercado, Sistema de Registro e sites responsivos, aprimorando lógica de programação, modelagem de banco de dados e componentização.",
      technologies: ["Python", "MySQL", "React", "JavaScript", "HTML5", "CSS3"],
    },
  ],

  education: [
    {
      course: "Análise e Desenvolvimento de Sistemas (ADS)",
      institution: "Católica",
      period: "Em andamento",
      description: "Graduação superior tecnológica com foco em engenharia de software, modelagem de banco de dados, lógica e arquitetura de sistemas computacionais.",
    },
    {
      course: "Desenvolvimento Web & Prática Contínua",
      institution: "Cursos & Prática Autodidata",
      period: "1 ano e meio de prática",
      description: "Estudos práticos intensivos e desenvolvimento de projetos com React, Python e MySQL.",
    },
  ],
};
