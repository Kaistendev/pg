import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';
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
  { icon: 'bi-facebook', url: 'https://www.facebook.com/share/1FJmWZvkD7/', label: 'Facebook' },
  { icon: 'bi bi-tiktok', url: 'https://tiktok.com/@planificacionurbalbomaca', label: 'Tiktok' },
  { icon: 'bi-instagram', url: 'https://www.instagram.com/planificacionurbalbomaca?igsh=MTFwZXJ3eXN6bmdtZg==', label: 'Instagram' },
 
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

      <ContactForm />

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
