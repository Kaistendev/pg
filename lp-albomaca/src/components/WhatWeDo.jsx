import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WhatWeDo.css';

const services = [
  {
    icon: 'bi-map',
    title: 'Ordenamiento del Suelo',
    description: 'Organizamos el uso del suelo según planes y ordenanzas municipales vigentes.'
  },
  {
    icon: 'bi-file-earmark-check',
    title: 'Aprobación de Proyectos',
    description: 'Evaluamos y aprobamos proyectos y permisos de construcción de manera eficiente.'
  },
  {
    icon: 'bi-eye',
    title: 'Supervisión de Obras',
    description: 'Supervisamos obras públicas y privadas para garantizar el cumplimiento normativo.'
  },
  {
    icon: 'bi-exclamation-triangle',
    title: 'Sanciones Urbanísticas',
    description: 'Aplicamos sanciones urbanísticas cuando corresponda, velando por el orden.'
  },
  {
    icon: 'bi-house-gear',
    title: 'Catastro Urbano',
    description: 'Mantenemos actualizado el catastro urbano del municipio.'
  },
  {
    icon: 'bi-tree',
    title: 'Protección Ambiental',
    description: 'Protegemos áreas verdes, zonas de riesgo y patrimonio ambiental.'
  }
];

const WhatWeDo = () => (
  <section id="services" className="what-we-do-section">
    <Container>
      <div className="section-header text-center mb-5">
        <h2 className="section-title">¿Qué Hacemos?</h2>
        <p className="section-description">
          Nuestros servicios están orientados a garantizar un desarrollo urbano ordenado y sostenible
        </p>
      </div>

      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4}>
            <div className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon-wrapper">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-arrow">
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="cta-box mt-5">
        <div className="cta-content">
          <i className="bi bi-info-circle-fill"></i>
          <div>
            <h4>¿Necesitas más información?</h4>
            <p>Estamos aquí para ayudarte con cualquier consulta sobre nuestros servicios</p>
          </div>
        </div>
        <a href="#contact" className="btn btn-primary">
          Contáctanos
          <i className="bi bi-arrow-right ms-2"></i>
        </a>
      </div>
    </Container>
  </section>
);

export default WhatWeDo;
