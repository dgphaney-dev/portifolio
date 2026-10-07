skills-constellation-container");
    if (!container) return;

    // Data
    const graphData = {
        nodes: [
            { id: "Programming", group: "core" },
            { id: "Python", group: "language" },
            { id: "JavaScript", group: "language" },
            { id: "Java", group: "language" },
            { id: "Front-End", group: "core" },
            { id: "React", group: "framework" },
            { id: "Next.js", group: "framework" },
            { id: "Tailwind CSS", group: "framework" },
            { id: "D3.js", group: "library" },
            { id: "Three.js", group: "library" },
            { id: "Back-End", group: "core" },
            { id: "SQL", group: "database" },
            { id: "Tools", group: "core" },
            { id: "Git", group: "tool" },
            { id: "Design", group: "core" },
            { id: "Figma", group: "tool" },
            { id: "UI/UX", group: "design" },
            { id: "Security", group: "core" },
            { id: "Cybersecurity", group: "security" }
        ],
        links: [
            { source: "Programming", target: "Python" },
            { source: "Programming", target: "JavaScript" },
            { source: "Programming", target: "Java" },
            { source: "Front-End", target: "JavaScript" },
            { source: "Front-End", target: "React" },
            { source: "Front-End", target: "Next.js" },
            { source: "Front-End", target: "Tailwind CSS" },
            { source: "React", target: "JavaScript" },
            { source: "Next.js", target: "React" },
            { source: "D3.js", target: "JavaScript" },
            { source: "Three.js", target: "JavaScript" },
            { source: "Back-End", target: "Python" },
            { source: "Back-End", target: "Java" },
            { source: "Back-End", target: "SQL" },
            { source: "Tools", target: "Git" },
            { source: "Tools", target: "Figma" },
            { source: "Design", target: "Figma" },
            { source: "Design", target: "UI/UX" },
            { source: "Front-End", target: "UI/UX" },
            { source: "Security", target: "Cybersecurity" },
            { source: "Programming", target: "Cybersecurity" }
        ]
    };

    const descriptions = {
        "Python": "Data and CyberSecurity...",
        "JavaScript": "My 'Swiss Army knife'...",
        "Java": "Software engineering discipline...",
        "React": "Modernity on the Web...",
        "Next.js": "SSR and performance...",
        "Tailwind CSS": "Rapid prototyping...",
        "D3.js": "Interactive visualizations...",
        "Three.js": "3D on the web as a hobby...",
        "SQL": "Crucial data analysis...",
        "Git": "Essential versioning...",
        "Figma": "Digital blueprints...",
        "UI/UX": "User experience...",
        "Cybersecurity": "CTFs and security...",
        "Programming": "The center of it all...",
        "Front-End": "Interactive and visual creativity...",
        "Back-End": "The gears...",
        "Tools": "Accelerators...",
        "Design": "Visual value...",
        "Security": "Critical layer..."
    };

    const icons = {
        "Python": "assets/images/python.png",
        "JavaScript": "assets/images/javascript.png",
        "Java": "assets/images/java.png",
        "React": "assets/images/react.png",
        "Next.js": "assets/images/nextjs.png",
        "Tailwind CSS": "assets/images/tailwindcss.png",
        "D3.js": "assets/images/d3.png",
        "Three.js": "assets/images/threejs.png",
        "SQL": "assets/images/sql.png",
        "Git": "assets/images/git.png",
        "Figma": "assets/images/figma.png",
        "UI/UX": "assets/images/uiux_design.png",
        "Cybersecurity": "assets/images/cybersecurity.png"
    };

    const width = container.clientWidth;
    const height = container.clientHeight;
    const isMobile = window.innerWidth <= 768;
    const scale = isMobile ? 0.65 : 1;
    
    // Create Tooltip
    let tooltip = document.querySelector(".skill-info-card");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.className = "skill-info-card";
        document.body.appendChild(tooltip);
    }

    const svg = d3.select(container).append("svg")
        .attr("viewBox", [-width / 2, -height / 2, width, height]);

    // Create SVG defs for liquid gradient
    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
        .attr("id", "liquid-gradient")
        .attr("gradientTransform", "rotate(-45)");

    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#4f46e5");
    gradient.append("stop").attr("offset", "20%").attr("stop-color", "#9333ea");
    gradient.append("stop").attr("offset", "40%").attr("stop-color", "#3b82f6");
    gradient.append("stop").attr("offset", "60%").attr("stop-color", "#c084fc");
    gradient.append("stop").attr("offset", "80%").attr("stop-color", "#818cf8");
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#4f46e5");

    gradient.append("animate")
        .attr("attributeName", "x1")
        .attr("values", "0;-3;0")
        .attr("dur", "6s")
        .attr("repeatCount", "indefinite");
    gradient.append("animate")
        .attr("attributeName", "x2")
        .attr("values", "4;1;4")
        .attr("dur", "6s")
        .attr("repeatCount", "indefinite");

    const simulation = d3.forceSimulation(graphData.nodes)
        .force("link", d3.forceLink(graphData.links).id(d => d.id).distance(isMobile ? 70 : 100))
        .force("charge", d3.forceManyBody().strength(isMobile ? -120 : -200))
        .force("center", d3.forceCenter())
        .force("collide", d3.forceCollide().radius(d => (d.group === "core" ? 26 : 20) * scale + 6).iterations(2));

    if (isMobile) simulation.alpha(0.6);

    const link = svg.append("g")
        .attr("