import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import Services from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

