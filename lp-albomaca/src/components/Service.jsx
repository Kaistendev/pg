import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './Service.css';

const tramites = [
  {
    icon: 'bi-file-earmark-text',
    title: 'Solicitud de Permisos de Construcción',
    description: 'Tramita tu permiso de construcción de manera rápida y eficiente.'
  },
  {
    icon: 'bi-arrow-repeat',
    title: 'Actualización Catastral',
    description: 'Mantén actualizada la información catastral de tu propiedad.'
  },
  {
    icon: 'bi-geo-alt',
    title: 'Constancias de Zonificación',
    description: 'Obtén constancias sobre la zonificación de tu terreno.'
  },
  {
    icon: 'bi-megaphone',
    title: 'Atención de Denuncias Ciudadanas',
    description: 'Reporta irregularidades urbanísticas en tu comunidad.'
  },
  {
    icon: 'bi-person-workspace',
    title: 'Asesoría Técnica en Normativa Urbana',
    description: 'Recibe orientación profesional sobre normativas y regulaciones.'
  }
];

const requisitos = [
  { icon: 'bi-file-earmark-ruled', text: 'Planos de construcción aprobados' },
  { icon: 'bi-file-earmark-person', text: 'Título de propiedad del terreno' },
  { icon: 'bi-card-list', text: 'Cédula catastral actualizada' },
  { icon: 'bi-cash-coin', text: 'Comprobante de pago de tasas municipales' }
];

const Services = () => (
  <section id="tramites" className="services-section">
    <Container>
      <div className="section-header text-center mb-5">
        <h2 className="section-title">Trámites y Servicios</h2>
        <p className="section-description">
          Facilitamos tus gestiones urbanísticas con procesos claros y eficientes
        </p>
      </div>

      <Row className="g-4 mb-5">
        {tramites.map((tramite, index) => (
          <Col key={index} md={6} lg={4}>
            <div className="tramite-card">
              <div className="tramite-icon">
                <i className={`bi ${tramite.icon}`}></i>
              </div>
              <h3>{tramite.title}</h3>
              <p>{tramite.description}</p>
            </div>
          </Col>
        ))}
      </Row>

      <div className="requirements-section">
        <Row className="align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="requirements-header">
              <div className="requirements-icon">
                <i className="bi bi-clipboard-check"></i>
              </div>
              <h3>Requisitos Básicos</h3>
              <p>Para solicitar permisos de construcción</p>
            </div>
          </Col>
          <Col lg={7}>
            <div className="requirements-grid">
              {requisitos.map((req, index) => (
                <div key={index} className="requirement-item">
                  <div className="requirement-icon">
                    <i className={`bi ${req.icon}`}></i>
                  </div>
                  <span>{req.text}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>

      <div className="faq-section mt-5">
        <h3 className="text-center mb-4">Preguntas Frecuentes</h3>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <i className="bi bi-question-circle me-2"></i>
              ¿Cuánto tiempo tarda la aprobación de un permiso?
            </Accordion.Header>
            <Accordion.Body>
              El tiempo de aprobación varía según la complejidad del proyecto. En promedio, los permisos simples se procesan en 15-30 días hábiles, mientras que proyectos más complejos pueden tomar hasta 60 días.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <i className="bi bi-question-circle me-2"></i>
              ¿Dónde puedo realizar los pagos de tasas?
            </Accordion.Header>
            <Accordion.Body>
              Los pagos se pueden realizar en la oficina de recaudación de la Alcaldía del Municipio Casacoima, de lunes a viernes de 8:00 am a 4:00 pm.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <i className="bi bi-question-circle me-2"></i>
              ¿Necesito un arquitecto o ingeniero para mi proyecto?
            </Accordion.Header>
            <Accordion.Body>
              Sí, todos los proyectos de construcción deben ser diseñados y firmados por un profesional certificado (arquitecto o ingeniero civil) debidamente inscrito en el colegio profesional correspondiente.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  </section>
);

export default Services;
