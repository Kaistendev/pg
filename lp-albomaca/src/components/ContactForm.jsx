import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoConsulta: '',
    mensaje: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [touched, setTouched] = useState({});

  const tiposConsulta = [
    { value: 'permiso-construccion', label: 'Permiso de Construcción' },
    { value: 'actualizacion-catastral', label: 'Actualización Catastral' },
    { value: 'zonificacion', label: 'Constancia de Zonificación' },
    { value: 'denuncia', label: 'Denuncia Ciudadana' },
    { value: 'asesoria', label: 'Asesoría Técnica' },
    { value: 'otro', label: 'Otra Consulta' }
  ];

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'nombre':
        if (!value.trim()) {
          error = 'El nombre es obligatorio';
        } else if (value.length < 3) {
          error = 'El nombre debe tener al menos 3 caracteres';
        }
        break;
        
      case 'email':
        if (!value.trim()) {
          error = 'El email es obligatorio';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'El email no es válido';
        }
        break;
        
      case 'telefono':
        if (!value.trim()) {
          error = 'El teléfono es obligatorio';
        } else if (!/^[0-9+\-\s()]+$/.test(value)) {
          error = 'El teléfono solo puede contener números, +, -, () y espacios';
        } else if (value.replace(/\D/g, '').length < 10) {
          error = 'El teléfono debe tener al menos 10 dígitos';
        }
        break;
        
      case 'tipoConsulta':
        if (!value) {
          error = 'Seleccione un tipo de consulta';
        }
        break;
        
      case 'mensaje':
        if (!value.trim()) {
          error = 'El mensaje es obligatorio';
        } else if (value.length < 10) {
          error = 'El mensaje debe tener al menos 10 caracteres';
        } else if (value.length > 500) {
          error = 'El mensaje no puede exceder 500 caracteres';
        }
        break;
        
      default:
        break;
    }
    
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // En un caso real, aquí iría la llamada a la API
      console.log('Formulario enviado:', formData);
      
      // Resetear formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tipoConsulta: '',
        mensaje: ''
      });
      setErrors({});
      setTouched({});
      setShowSuccess(true);
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCharacterCount = () => {
    return `${formData.mensaje.length}/500`;
  };

  return (
    <section className="contact-form-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Escríbenos Directamente</h2>
          <p className="section-description">
            Completa el formulario y te responderemos a la brevedad posible
          </p>
        </div>

        {showSuccess && (
          <Alert variant="success" className="success-alert fade-in">
            <div className="alert-content">
              <i className="bi bi-check-circle-fill me-2"></i>
              <div>
                <Alert.Heading>¡Mensaje enviado con éxito!</Alert.Heading>
                <p className="mb-0">Nos pondremos en contacto contigo dentro de 24-48 horas hábiles.</p>
              </div>
            </div>
          </Alert>
        )}

        <Row className="justify-content-center">
          <Col lg={8}>
            <Form onSubmit={handleSubmit} className="contact-form" noValidate>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group className="form-floating">
                    <Form.Control
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      isInvalid={touched.nombre && !!errors.nombre}
                      isValid={touched.nombre && !errors.nombre}
                      placeholder="Nombre completo"
                      className="form-control-custom"
                    />
                    <Form.Label htmlFor="nombre">
                      <i className="bi bi-person me-1"></i>
                      Nombre completo *
                    </Form.Label>
                    <Form.Control.Feedback type="invalid">
                      {errors.nombre}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="form-floating">
                    <Form.Control
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && !!errors.email}
                      isValid={touched.email && !errors.email}
                      placeholder="Correo electrónico"
                      className="form-control-custom"
                    />
                    <Form.Label htmlFor="email">
                      <i className="bi bi-envelope me-1"></i>
                      Correo electrónico *
                    </Form.Label>
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="form-floating">
                    <Form.Control
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      isInvalid={touched.telefono && !!errors.telefono}
                      isValid={touched.telefono && !errors.telefono}
                      placeholder="Teléfono"
                      className="form-control-custom"
                    />
                    <Form.Label htmlFor="telefono">
                      <i className="bi bi-telephone me-1"></i>
                      Teléfono *
                    </Form.Label>
                    <Form.Control.Feedback type="invalid">
                      {errors.telefono}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="form-floating">
                    <Form.Select
                      id="tipoConsulta"
                      name="tipoConsulta"
                      value={formData.tipoConsulta}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      isInvalid={touched.tipoConsulta && !!errors.tipoConsulta}
                      isValid={touched.tipoConsulta && !errors.tipoConsulta}
                      className="form-control-custom"
                    >
                      <option value="">Seleccione...</option>
                      {tiposConsulta.map(tipo => (
                        <option key={tipo.value} value={tipo.value}>
                          {tipo.label}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Label htmlFor="tipoConsulta">
                      <i className="bi bi-chat-dots me-1"></i>
                      Tipo de consulta *
                    </Form.Label>
                    <Form.Control.Feedback type="invalid">
                      {errors.tipoConsulta}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group className="form-floating">
                    <Form.Control
                      as="textarea"
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      isInvalid={touched.mensaje && !!errors.mensaje}
                      isValid={touched.mensaje && !errors.mensaje}
                      placeholder="Describe tu consulta"
                      style={{ height: '120px', resize: 'none' }}
                      className="form-control-custom"
                      maxLength={500}
                    />
                    <Form.Label htmlFor="mensaje">
                      <i className="bi bi-text-paragraph me-1"></i>
                      Describe tu consulta *
                    </Form.Label>
                    <div className="character-count">
                      {getCharacterCount()}
                    </div>
                    <Form.Control.Feedback type="invalid">
                      {errors.mensaje}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col xs={12} className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="btn-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <div className="contact-info-banners mt-5">
          <Row className="g-3">
            <Col md={4}>
              <div className="info-banner">
                <i className="bi bi-clock-history"></i>
                <h5>Tiempo de Respuesta</h5>
                <p>Respondemos en 24-48 horas hábiles</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-banner">
                <i className="bi bi-shield-check"></i>
                <h5>Información Segura</h5>
                <p>Tus datos están protegidos y confidenciales</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-banner">
                <i className="bi bi-headset"></i>
                <h5>Soporte Personalizado</h5>
                <p>Atención especializada para cada caso</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;