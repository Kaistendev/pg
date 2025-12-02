import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      //fixed="top" 
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <i className="bi bi-building me-2"></i>
          <span className="brand-text">
            Planificación Urbana <span className="brand-highlight">Casacoima</span>
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-custom">
              <i className="bi bi-house-door me-1"></i>
              Inicio
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">
              <i className="bi bi-info-circle me-1"></i>
              Nosotros
            </Nav.Link>
            <Nav.Link href="#services" className="nav-link-custom">
              <i className="bi bi-gear me-1"></i>
              Servicios
            </Nav.Link>
            <Nav.Link href="#tramites" className="nav-link-custom">
              <i className="bi bi-file-text me-1"></i>
              Trámites
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom btn-contact">
              <i className="bi bi-envelope me-1"></i>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
