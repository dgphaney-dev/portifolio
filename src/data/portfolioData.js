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
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/douglasphaney/",
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
      id: "crud-python-mysql",
      title: "Sistema de Gestão & CRUD (Python + MySQL)",
      category: "Backend",
      featured: true,
      description: "Sistema completo de cadastro, consulta, atualização e remoção de registros integrado a banco de dados relacional MySQL.",
      longDescription: "Aplicação focada em manipulação de dados, validação de entradas, consultas SQL otimizadas e persistência segura em banco de dados MySQL.",
      tags: ["Python", "MySQL", "SQL", "CRUD"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      highlights: [
        "Conexão e operações CRUD completas no MySQL",
        "Validação de dados e tratamento de erros",
        "Consultas relacionais estruturadas",
      ],
    },
    {
      id: "app-react-interface",
      title: "Aplicação Web Dinâmica em React",
      category: "Frontend",
      featured: true,
      description: "Interface web moderna construída com componentes reutilizáveis em React, gerenciamento de estado e design responsivo.",
      longDescription: "Projeto front-end desenvolvido com React e JavaScript, demonstrando componentização, estados reativos, consumo de dados e experiência fluida para o usuário.",
      tags: ["React", "JavaScript", "CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      highlights: [
        "Componentes reutilizáveis e desacoplados",
        "Controle de estados e renderização dinâmica",
        "Totalmente responsivo para mobile e desktop",
      ],
    },
    {
      id: "fullstack-python-react",
      title: "Integração Full Stack (React + Python + MySQL)",
      category: "Full Stack",
      featured: true,
      description: "Plataforma integrando front-end moderno em React com back-end em Python e banco de dados relacional MySQL.",
      longDescription: "Projeto que une o front-end em React consumindo endpoints e operações de banco de dados gerenciadas em Python com MySQL.",
      tags: ["React", "Python", "MySQL", "APIs"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      highlights: [
        "Comunicação fluida entre React e Python",
        "Persistência de dados confiável no MySQL",
        "Interface limpa e intuitiva",
      ],
    },
  ],

  experience: [
    {
      role: "Desenvolvedor Full Stack (Freelancer)",
      company: "Projetos Autônomos",
      period: "2023 - Presente",
      description: "Desenvolvimento de landing pages de alta conversão, portais web e sistemas de gestão sob demanda. Implementação de SEO, integração de pagamentos e suporte contínuo para clientes.",
      technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel"],
    },
    {
      role: "Desenvolvedor Front-end Júnior / Bolsista",
      company: "Projetos Práticos & Open Source",
      period: "2022 - 2023",
      description: "Criação de componentes acessíveis e reutilizáveis, refatoração de código legado e colaboração com times multidisciplinares utilizando Git Flow e metodologias ágeis (Scrum).",
      technologies: ["JavaScript", "HTML/CSS", "React", "Git", "Figma"],
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
