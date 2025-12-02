import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => (
  <header id="home" className="hero-section">
    <div className="hero-overlay"></div>
    <div className="hero-particles">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </div>
    
    <Container className="hero-content">
      <div className="hero-badge animate-fade-in">
        <i className="bi bi-geo-alt-fill me-2"></i>
        Municipio Casacoima
      </div>
      
      <h1 className="hero-title animate-fade-in-up">
        Casacoima Crece <span className="text-gradient">con Orden</span>
      </h1>
      
      <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Oficina de Planificación Urbana
      </p>
      
      <p className="hero-tagline animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <i className="bi bi-stars me-2"></i>
        Ordenando hoy, construimos el futuro
      </p>
      
      <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Button variant="primary" size="lg" href="#tramites" className="btn btn-primary">
          <i className="bi bi-file-earmark-text me-2"></i>
          Ver Trámites
        </Button>
        <Button variant="outline" size="lg" href="#about" className="btn btn-outline">
          <i className="bi bi-info-circle me-2"></i>
          Conocer Más
        </Button>
      </div>
      
      <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="stat-item">
          <i className="bi bi-building"></i>
          <div className="stat-content">
            <div className="stat-number">500+</div>
            <div className="stat-label">Proyectos Aprobados</div>
          </div>
        </div>
        <div className="stat-item">
          <i className="bi bi-people"></i>
          <div className="stat-content">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Ciudadanos Atendidos</div>
          </div>
        </div>
        <div className="stat-item">
          <i className="bi bi-award"></i>
          <div className="stat-content">
            <div className="stat-number">15+</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
        </div>
      </div>
    </Container>
    
    <div className="hero-scroll-indicator">
      <a href="#about" className="scroll-link">
        <i className="bi bi-chevron-down"></i>
      </a>
    </div>
  </header>
);

export default Hero;
