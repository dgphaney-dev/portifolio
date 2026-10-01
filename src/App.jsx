import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Dynamic Background Noise / Mesh Effect */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Projects />
          <GithubStats />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
