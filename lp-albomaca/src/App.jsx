import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import ProjectsGallery from './components/ProjectsGallery';
import Services from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation, useParallax, useSmoothScroll } from './hooks/ScrollAnimations';
import './components/ScrollAnimations.css';

function App() {
  // Inicializar animaciones de scroll
  useScrollAnimation();
  useParallax();
  useSmoothScroll();

  // Agregar indicador de progreso de scroll
  useEffect(() => {
    const updateScrollIndicator = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      
      let indicator = document.querySelector('.scroll-indicator');
      if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        document.body.appendChild(indicator);
      }
      
      indicator.style.width = `${scrollPercentage}%`;
    };

    window.addEventListener('scroll', updateScrollIndicator);
    updateScrollIndicator(); // Inicializar
    
    return () => window.removeEventListener('scroll', updateScrollIndicator);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
    {/*  <ProjectsGallery />*/}
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

