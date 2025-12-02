import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-main">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <div className="footer-brand">
              <i className="bi bi-building"></i>
              <h3>Planificación Urbana Casacoima</h3>
              <p>Ordenando hoy, construimos el futuro de nuestro municipio.</p>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <div className="footer-links">
              <h4>Enlaces Rápidos</h4>
              <ul>
                <li><a href="#home"><i className="bi bi-chevron-right"></i> Inicio</a></li>
                <li><a href="#about"><i className="bi bi-chevron-right"></i> Nosotros</a></li>
                <li><a href="#services"><i className="bi bi-chevron-right"></i> Servicios</a></li>
                <li><a href="#tramites"><i className="bi bi-chevron-right"></i> Trámites</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div className="footer-links">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#tramites"><i className="bi bi-chevron-right"></i> Permisos de Construcción</a></li>
                <li><a href="#tramites"><i className="bi bi-chevron-right"></i> Actualización Catastral</a></li>
                <li><a href="#tramites"><i className="bi bi-chevron-right"></i> Zonificación</a></li>
                <li><a href="#tramites"><i className="bi bi-chevron-right"></i> Asesoría Técnica</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6}>
            <div className="footer-contact">
              <h4>Contacto</h4>
              <ul>
                <li>
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Alcaldía del Municipio Casacoima</span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>(0000) - 0000000</span>
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  <span>planurbana@casacoima.gob.ve</span>
                </li>
                <li>
                  <i className="bi bi-clock-fill"></i>
                  <span>Lun - Vie: 8:00 am - 4:00 pm</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              <i className="bi bi-c-circle"></i> {currentYear} Alcaldía del Municipio Autónomo Casacoima. Todos los derechos reservados.
            </p>
            <p className="footer-tagline">
              <i className="bi bi-heart-fill"></i> Una ciudad ordenada es un mejor lugar para vivir
            </p>
          </div>
          <div className="scroll-to-top">
            <a href="#home" className="scroll-top-btn" aria-label="Volver arriba">
              <i className="bi bi-arrow-up"></i>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
