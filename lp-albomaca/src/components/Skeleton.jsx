import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skeleton.css';

const Skeleton = ({ type, count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'hero':
        return <HeroSkeleton />;
      case 'service-card':
        return <ServiceCardSkeleton />;
      case 'tramite-card':
        return <TramiteCardSkeleton />;
      case 'contact-card':
        return <ContactCardSkeleton />;
      case 'value-card':
        return <ValueCardSkeleton />;
      case 'stat-item':
        return <StatItemSkeleton />;
      case 'text':
        return <TextSkeleton />;
      case 'button':
        return <ButtonSkeleton />;
      case 'avatar':
        return <AvatarSkeleton />;
      default:
        return <DefaultSkeleton />;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-wrapper">
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

const HeroSkeleton = () => (
  <div className="hero-skeleton">
    <div className="skeleton skeleton-badge"></div>
    <div className="skeleton skeleton-title"></div>
    <div className="skeleton skeleton-subtitle"></div>
    <div className="skeleton skeleton-tagline"></div>
    <div className="hero-buttons-skeleton">
      <div className="skeleton skeleton-button"></div>
      <div className="skeleton skeleton-button-outline"></div>
    </div>
    <div className="hero-stats-skeleton">
      {[1, 2, 3].map(i => <StatItemSkeleton key={i} />)}
    </div>
  </div>
);

const ServiceCardSkeleton = () => (
  <div className="service-card-skeleton">
    <div className="skeleton skeleton-service-icon"></div>
    <div className="skeleton skeleton-service-title"></div>
    <div className="skeleton skeleton-service-text"></div>
    <div className="skeleton skeleton-service-text short"></div>
    <div className="skeleton skeleton-arrow"></div>
  </div>
);

const TramiteCardSkeleton = () => (
  <div className="tramite-card-skeleton">
    <div className="skeleton skeleton-tramite-icon"></div>
    <div className="skeleton skeleton-tramite-title"></div>
    <div className="skeleton skeleton-tramite-text"></div>
  </div>
);

const ContactCardSkeleton = () => (
  <div className="contact-card-skeleton">
    <div className="skeleton skeleton-contact-icon"></div>
    <div className="skeleton skeleton-contact-title"></div>
    <div className="skeleton skeleton-contact-text"></div>
    <div className="skeleton skeleton-contact-text short"></div>
  </div>
);

const ValueCardSkeleton = () => (
  <div className="value-card-skeleton">
    <div className="skeleton skeleton-value-icon"></div>
    <div className="skeleton skeleton-value-title"></div>
    <div className="skeleton skeleton-value-text"></div>
    <div className="skeleton skeleton-value-text short"></div>
  </div>
);

const StatItemSkeleton = () => (
  <div className="stat-item-skeleton">
    <div className="skeleton skeleton-stat-icon"></div>
    <div className="stat-content-skeleton">
      <div className="skeleton skeleton-stat-number"></div>
      <div className="skeleton skeleton-stat-label"></div>
    </div>
  </div>
);

const TextSkeleton = () => (
  <div className="text-skeleton">
    <div className="skeleton skeleton-line"></div>
    <div className="skeleton skeleton-line"></div>
    <div className="skeleton skeleton-line short"></div>
  </div>
);

const ButtonSkeleton = () => (
  <div className="skeleton skeleton-button"></div>
);

const AvatarSkeleton = () => (
  <div className="skeleton skeleton-avatar"></div>
);

const DefaultSkeleton = () => (
  <div className="skeleton skeleton-default"></div>
);

// Componente de contenedor para secciones completas
export const SectionSkeleton = ({ section }) => {
  const renderSectionSkeleton = () => {
    switch (section) {
      case 'about':
        return (
          <Container>
            <div className="section-header-skeleton text-center mb-5">
              <div className="skeleton skeleton-section-title"></div>
              <div className="skeleton skeleton-section-description"></div>
            </div>
            <Row className="mb-5">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="about-content-skeleton">
                  <TextSkeleton />
                </div>
              </Col>
              <Col lg={6}>
                <div className="skeleton skeleton-about-image"></div>
              </Col>
            </Row>
            <Row className="g-4">
              {[1, 2, 3].map(i => (
                <Col md={4} key={i}>
                  <ValueCardSkeleton />
                </Col>
              ))}
            </Row>
          </Container>
        );

      case 'services':
        return (
          <Container>
            <div className="section-header-skeleton text-center mb-5">
              <div className="skeleton skeleton-section-title"></div>
              <div className="skeleton skeleton-section-description"></div>
            </div>
            <Row className="g-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Col md={6} lg={4} key={i}>
                  <ServiceCardSkeleton />
                </Col>
              ))}
            </Row>
          </Container>
        );

      case 'tramites':
        return (
          <Container>
            <div className="section-header-skeleton text-center mb-5">
              <div className="skeleton skeleton-section-title"></div>
              <div className="skeleton skeleton-section-description"></div>
            </div>
            <Row className="g-4 mb-5">
              {[1, 2, 3, 4, 5].map(i => (
                <Col md={6} lg={4} key={i}>
                  <TramiteCardSkeleton />
                </Col>
              ))}
            </Row>
          </Container>
        );

      case 'contact':
        return (
          <Container>
            <div className="section-header-skeleton text-center mb-5">
              <div className="skeleton skeleton-section-title"></div>
              <div className="skeleton skeleton-section-description"></div>
            </div>
            <Row className="g-4 mb-5">
              {[1, 2, 3, 4].map(i => (
                <Col md={6} lg={3} key={i}>
                  <ContactCardSkeleton />
                </Col>
              ))}
            </Row>
          </Container>
        );

      default:
        return (
          <Container>
            <Row className="g-4">
              {[1, 2, 3, 4].map(i => (
                <Col md={6} lg={3} key={i}>
                  <DefaultSkeleton />
                </Col>
              ))}
            </Row>
          </Container>
        );
    }
  };

  return <div className="section-skeleton">{renderSectionSkeleton()}</div>;
};

export default Skeleton;