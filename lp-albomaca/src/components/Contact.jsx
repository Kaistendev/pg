import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const contactInfo = [
  {
    icon: 'bi-geo-alt-fill',
    title: 'Dirección',
    content: 'Sede de la Gerencia de Planificación Urbana',
    subtitle: 'Alcaldía del Municipio Casacoima'
  },
  {
    icon: 'bi-telephone-fill',
    title: 'Teléfono',
    content: '(0000) - 0000000',
    subtitle: 'Línea directa'
  },
  {
    icon: 'bi-envelope-fill',
    title: 'Correo Electrónico',
    content: 'planurbana@casacoima.gob.ve',
    subtitle: 'Respuesta en 24-48 horas'
  },
  {
    icon: 'bi-clock-fill',
    title: 'Horario de Atención',
    content: 'Lunes a Viernes',
    subtitle: '8:00 am – 4:00 pm'
  }
];

const socialLinks = [
  { icon: 'bi-facebook', url: '#', label: 'Facebook' },
  { icon: 'bi-twitter-x', url: '#', label: 'Twitter' },
  { icon: 'bi-instagram', url: '#', label: 'Instagram' },
  { icon: 'bi-whatsapp', url: '#', label: 'WhatsApp' }
];

const Contact = () => (
  <section id="contact" className="contact-section">
    <Container>
      <div className="section-header text-center mb-5">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-description">
          Estamos aquí para atenderte. Comunícate con nosotros por cualquiera de estos medios
        </p>
      </div>

      <Row className="g-4 mb-5">
        {contactInfo.map((info, index) => (
          <Col key={index} md={6} lg={3}>
            <div className="contact-card">
              <div className="contact-icon">
                <i className={`bi ${info.icon}`}></i>
              </div>
              <h4>{info.title}</h4>
              <p className="contact-main">{info.content}</p>
              <p className="contact-sub">{info.subtitle}</p>
            </div>
          </Col>
        ))}
      </Row>

      <div className="contact-cta">
        <Row className="align-items-center">
          <Col lg={8} className="mb-4 mb-lg-0">
            <div className="cta-content">
              <i className="bi bi-chat-dots-fill"></i>
              <div>
                <h3>¿Tienes alguna pregunta o consulta?</h3>
                <p>Nuestro equipo está listo para ayudarte con cualquier información que necesites sobre trámites y servicios urbanísticos.</p>
              </div>
            </div>
          </Col>
          <Col lg={4} className="text-lg-end">
            <a href="mailto:planurbana@casacoima.gob.ve" className="btn btn-primary btn-lg">
              <i className="bi bi-envelope-fill me-2"></i>
              Enviar Correo
            </a>
          </Col>
        </Row>
      </div>

      <div className="social-section text-center">
        <h4>Síguenos en Redes Sociales</h4>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              className="social-link"
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`bi ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Contact;
