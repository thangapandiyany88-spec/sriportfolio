import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';
import BehindTheCamera from './components/BehindTheCamera';
import Software from './components/Software';
import Equipment from './components/Equipment';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Workflow from './components/Workflow';
import CareerObjective from './components/CareerObjective';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-main">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <About />
        <Portfolio />
        <Services />
        <Skills />
        <BehindTheCamera />
        <Software />
        <Equipment />
        <WhyWorkWithMe />
        <Workflow />
        <CareerObjective />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
