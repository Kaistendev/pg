import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import './ProjectsGallery.css';

const ProjectsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { value: 'todos', label: 'Todos los Proyectos' },
    { value: 'residencial', label: 'Residencial' },
    { value: 'comercial', label: 'Comercial' },
    { value: 'institucional', label: 'Institucional' },
    { value: 'industrial', label: 'Industrial' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Complejo Residencial Las Brisas',
      category: 'residencial',
      image: '/api/placeholder/400/300',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Desarrollo residencial de 50 unidades familiares con áreas verdes y recreación.',
      location: 'Sector Centro, Casacoima',
      date: 'Enero 2024',
      type: 'Construcción Nueva',
      area: '5,000 m²',
      status: 'Completado',
      highlights: [
        '50 unidades familiares',
        'Áreas verdes integradas',
        'Sistema de seguridad',
        'Acceso vehicular optimizado'
      ],
      testimonio: {
        nombre: 'María González',
        texto: 'Excelente trabajo de la oficina, nos guiaron en todo el proceso y obtuvimos nuestros permisos rápidamente.',
        rol: 'Desarrolladora Inmobiliaria'
      }
    },
    {
      id: 2,
      title: 'Centro Comercial Plaza Central',
      category: 'comercial',
      image: '/api/placeholder/400/300',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Modernización de centro comercial con 25 locales comerciales y estacionamiento.',
      location: 'Avenida Principal, Casacoima',
      date: 'Marzo 2024',
      type: 'Remodelación',
      area: '3,500 m²',
      status: 'Completado',
      highlights: [
        '25 locales comerciales',
        'Estacionamiento para 100 vehículos',
        'Acceso accesible',
        'Iluminación LED eficiente'
      ],
      testimonio: {
        nombre: 'Carlos Martínez',
        texto: 'El equipo de planificación nos ayudó a cumplir con todas las normativas y optimizar nuestro espacio.',
        rol: 'Administrador del Centro Comercial'
      }
    },
    {
      id: 3,
      title: 'Escuela Básica Bolivariana',
      category: 'institucional',
      image: '/api/placeholder/400/300',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Construcción de nueva unidad educativa con capacidad para 300 estudiantes.',
      location: 'Sector La Florida, Casacoima',
      date: 'Febrero 2024',
      type: 'Construcción Nueva',
      area: '2,800 m²',
      status: 'En Construcción',
      highlights: [
        '12 aulas equipadas',
        'Cancha deportiva',
        'Biblioteca',
        'Cafetería escolar'
      ],
      testimonio: {
        nombre: 'Dra. Ana Rodríguez',
        texto: 'Un proyecto vital para nuestra comunidad, gracias al apoyo de la oficina de planificación.',
        rol: 'Directora Escolar'
      }
    },
    {
      id: 4,
      title: 'Parcela Industrial El Progreso',
      category: 'industrial',
      image: '/api/placeholder/400/300',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Desarrollo industrial con 10 naves para pequeñas y medianas empresas.',
      location: 'Zona Industrial, Casacoima',
      date: 'Abril 2024',
      type: 'Construcción Nueva',
      area: '8,000 m²',
      status: 'En Proceso',
      highlights: [
        '10 naves industriales',
        'Acceso de carga pesada',
        'Sistema contra incendios',
        'Estacionamiento para empleados'
      ],
      testimonio: {
        nombre: 'Ing. Luis Pérez',
        texto: 'La asesoría técnica fue fundamental para cumplir con todas las regulaciones industriales.',
        rol: 'Gerente de Proyecto'
      }
    },
    {
      id: 5,
      title: 'Condominio Jardines del Lago',
      category: 'residencial',
      image: '/api/placeholder/400/300',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Conjunto residencial de lujo con 30 apartamentos y amenities premium.',
      location: 'Sector Lago, Casacoima',
      date: 'Diciembre 2023',
      type: 'Construcción Nueva',
      area: '4,200 m²',
      status: 'Completado',
      highlights: [
        '30 apartamentos',
        'Piscina y gimnasio',
        'Área de BBQ',
        'Seguridad 24/7'
      ],
      testimonio: {
        nombre: 'Roberto Silva',
        texto: 'Un desarrollo de excelencia que ha mejorado la calidad de vida de muchos residentes.',
        rol: 'Constructor'
      }
    },
    {
      id: 6,
      title: 'Consultorio Médico Familiar',
      category: 'institucional',
      image: '/api/placeholder/400/300',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Clínica médica con 6 consultorios y servicios de diagnóstico básico.',
      location: 'Centro de Casacoima',
      date: 'Enero 2024',
      type: 'Adaptación',
      area: '450 m²',
      status: 'Completado',
      highlights: [
        '6 consultorios médicos',
        'Sala de espera',
        'Laboratorio básico',
        'Acceso para discapacitados'
      ],
      testimonio: {
        nombre: 'Dra. Carmen Ortiz',
        texto: 'Gracias al apoyo técnico pudimos adaptar el espacio cumpliendo todas las normativas sanitarias.',
        rol: 'Médico Directora'
      }
    }
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Completado': { class: 'badge-success', icon: 'bi-check-circle-fill' },
      'En Construcción': { class: 'badge-warning', icon: 'bi-tools' },
      'En Proceso': { class: 'badge-info', icon: 'bi-arrow-repeat' }
    };
    
    const config = statusConfig[status] || statusConfig['En Proceso'];
    
    return (
      <span className={`project-status-badge ${config.class}`}>
        <i className={`bi ${config.icon} me-1`}></i>
        {status}
      </span>
    );
  };

  return (
    <section className="projects-gallery-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Proyectos Aprobados</h2>
          <p className="section-description">
            Conoce los desarrollos que estamos impulsando para el crecimiento de Casacoima
          </p>
        </div>

        {/* Category Filter */}
        <div className="filter-section mb-5">
          <div className="filter-buttons">
            {categories.map(category => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'primary' : 'outline-primary'}
                onClick={() => setSelectedCategory(category.value)}
                className="filter-btn"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <Row className="g-4 mb-5">
          {filteredProjects.map((project, index) => (
            <Col key={project.id} md={6} lg={4}>
              <div 
                className="project-card"
                onClick={() => openProjectModal(project)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image-container">
                  <div className="project-placeholder">
                    <i className="bi bi-image"></i>
                    <span>Imagen del Proyecto</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-overlay-content">
                      <i className="bi bi-zoom-in"></i>
                      <span>Ver Detalles</span>
                    </div>
                  </div>
                  {getStatusBadge(project.status)}
                </div>
                
                <div className="project-content">
                  <div className="project-category">
                    <i className="bi bi-tag-fill me-1"></i>
                    {categories.find(cat => cat.value === project.category)?.label}
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-meta">
                    <div className="meta-item">
                      <i className="bi bi-geo-alt-fill"></i>
                      <span>{project.location}</span>
                    </div>
                    <div className="meta-item">
                      <i className="bi bi-calendar-fill"></i>
                      <span>{project.date}</span>
                    </div>
                  </div>
                  
                  <div className="project-stats">
                    <div className="stat">
                      <i className="bi bi-rulers"></i>
                      <span>{project.area}</span>
                    </div>
                    <div className="stat">
                      <i className="bi bi-building"></i>
                      <span>{project.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Stats Summary */}
        <div className="projects-summary">
          <Row className="g-3">
            <Col md={3}>
              <div className="summary-card">
                <div className="summary-icon">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <div className="summary-content">
                  <div className="summary-number">{projects.filter(p => p.status === 'Completado').length}</div>
                  <div className="summary-label">Proyectos Completados</div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="summary-card">
                <div className="summary-icon">
                  <i className="bi bi-tools"></i>
                </div>
                <div className="summary-content">
                  <div className="summary-number">{projects.filter(p => p.status.includes('Construcción') || p.status.includes('Proceso')).length}</div>
                  <div className="summary-label">En Ejecución</div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="summary-card">
                <div className="summary-icon">
                  <i className="bi bi-rulers"></i>
                </div>
                <div className="summary-content">
                  <div className="summary-number">
                    {projects.reduce((total, p) => total + parseInt(p.area.replace(/[^\d]/g, '')), 0).toLocaleString()} m²
                  </div>
                  <div className="summary-label">Área Total Desarrollada</div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="summary-card">
                <div className="summary-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="summary-content">
                  <div className="summary-number">1,200+</div>
                  <div className="summary-label">Beneficiados Directamente</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Project Detail Modal */}
      <Modal 
        show={showModal} 
        onHide={closeModal} 
        size="lg" 
        centered
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title-custom">
                {selectedProject.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="mb-4">
                <Col md={6}>
                  <div className="modal-image-container">
                    <div className="modal-image-placeholder">
                      <i className="bi bi-image"></i>
                      <span>Antes</span>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="modal-image-container">
                    <div className="modal-image-placeholder">
                      <i className="bi bi-image"></i>
                      <span>Después</span>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="project-details mb-4">
                <h4>Información del Proyecto</h4>
                <p>{selectedProject.description}</p>
                
                <Row className="project-details-grid mt-3">
                  <Col md={6}>
                    <div className="detail-item">
                      <i className="bi bi-geo-alt-fill"></i>
                      <div>
                        <strong>Ubicación:</strong> {selectedProject.location}
                      </div>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-calendar-fill"></i>
                      <div>
                        <strong>Fecha:</strong> {selectedProject.date}
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="detail-item">
                      <i className="bi bi-building"></i>
                      <div>
                        <strong>Tipo:</strong> {selectedProject.type}
                      </div>
                    </div>
                    <div className="detail-item">
                      <i className="bi bi-rulers"></i>
                      <div>
                        <strong>Área:</strong> {selectedProject.area}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="project-highlights mb-4">
                <h4>Características Destacadas</h4>
                <ul className="highlights-list">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle-fill text-success"></i>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.testimonio && (
                <div className="project-testimonial">
                  <h4>Testimonio</h4>
                  <div className="testimonial-content">
                    <blockquote className="testimonial-quote">
                      "{selectedProject.testimonio.texto}"
                    </blockquote>
                    <div className="testimonial-author">
                      <strong>{selectedProject.testimonio.nombre}</strong>
                      <span>{selectedProject.testimonio.rol}</span>
                    </div>
                  </div>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Cerrar
              </Button>
              <Button variant="primary">
                <i className="bi bi-download me-2"></i>
                Descargar Ficha Técnica
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default ProjectsGallery;