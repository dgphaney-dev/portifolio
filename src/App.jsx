import React from 'react';
import ParticleBackground from './components/3d/ParticleBackground';
import CustomCursor from './components/ui/CustomCursor';
import SpotlightEffect from './components/ui/SpotlightEffect';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import FeaturedProject from './components/sections/FeaturedProject';
import Projects from './components/sections/Projects';
import GithubSection from './components/sections/GithubSection';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#080812] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Cursor interativo para desktop */}
      <CustomCursor />

      {/* Partículas e iluminação de fundo */}
      <ParticleBackground />
      <SpotlightEffect />

      {/* Estrutura de conteúdo */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <TechStack />
          <FeaturedProject />
          <Projects />
          <GithubSection />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
