import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => (
  <section id="about" className="about-section">
    <Container>
      <div className="section-header text-center mb-5">
        <h2 className="section-title">¿Quiénes Somos?</h2>
        <p className="section-description">
          Comprometidos con el desarrollo urbano sostenible de Casacoima
        </p>
      </div>

      <Row className="mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          <div className="about-content">
            <p className="lead-text">
              La <strong>Oficina de Planificación Urbana del Municipio Casacoima</strong> es la dependencia encargada de garantizar el ordenamiento territorial, regular el uso del suelo, supervisar las construcciones y promover el desarrollo urbano sostenible.
            </p>
            <p>
              Nuestra labor es asegurar que cada obra y proyecto en el municipio cumpla con la normativa vigente, para construir una ciudad más ordenada, segura y habitable.
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">
              <i className="bi bi-building"></i>
              <p>Desarrollo Urbano Sostenible</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={4}>
          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-bullseye"></i>
            </div>
            <h3>Misión</h3>
            <p>Ordenar y regular el crecimiento urbano para el bienestar de la comunidad, garantizando un desarrollo sostenible y planificado.</p>
          </div>
        </Col>
        
        <Col md={4}>
          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-eye"></i>
            </div>
            <h3>Visión</h3>
            <p>Ser una oficina modelo en gestión urbanística y planificación moderna, referente regional en ordenamiento territorial.</p>
          </div>
        </Col>
        
        <Col md={4}>
          <div className="value-card">
            <div className="value-icon">
              <i className="bi bi-heart"></i>
            </div>
            <h3>Valores</h3>
            <ul className="values-list">
              <li><i className="bi bi-check-circle-fill"></i> Transparencia</li>
              <li><i className="bi bi-check-circle-fill"></i> Eficiencia</li>
              <li><i className="bi bi-check-circle-fill"></i> Sostenibilidad</li>
              <li><i className="bi bi-check-circle-fill"></i> Compromiso Social</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutUs;
