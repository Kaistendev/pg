import React, { useEffect, useState } from 'react';

// Hook personalizado para animaciones de scroll
export const useScrollAnimation = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Para animaciones escalonadas
            if (entry.target.dataset.stagger) {
              const children = entry.target.children;
              Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('animate-in');
                }, index * 100);
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observar elementos con las clases de animación
    const animatedElements = document.querySelectorAll('.scroll-reveal, .fade-in-up, .slide-in-left, .slide-in-right, .scale-in');
    
    animatedElements.forEach((el) => {
      observer.observe(el);
      setElements(prev => [...prev, el]);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return elements;
};

// Hook para efecto parallax
export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

// Componente de contenedor con animación
export const ScrollReveal = ({ 
  children, 
  animation = 'fade-in-up',
  delay = 0,
  stagger = false,
  className = '',
  threshold = 0.1
}) => {
  const animationClasses = {
    'fade-in-up': 'scroll-reveal fade-in-up',
    'slide-in-left': 'scroll-reveal slide-in-left',
    'slide-in-right': 'scroll-reveal slide-in-right',
    'scale-in': 'scroll-reveal scale-in',
    'fade-in': 'scroll-reveal fade-in'
  };

  return (
    <div 
      className={`${animationClasses[animation]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      data-stagger={stagger}
    >
      {children}
    </div>
  );
};

// Componente para efecto parallax
export const ParallaxContainer = ({ 
  children, 
  speed = 0.5,
  className = '',
  height = '400px'
}) => {
  return (
    <div 
      className={`parallax-container ${className}`}
      style={{ height }}
    >
      <div 
        className="parallax"
        data-speed={speed}
      >
        {children}
      </div>
    </div>
  );
};

// Componente para contador animado
export const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Componente para texto con efecto de escritura
export const TypewriterText = ({ 
  text, 
  speed = 50, 
  delay = 0,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const textRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [isVisible, currentIndex, text, speed, delay]);

  return (
    <span ref={textRef} className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="cursor">|</span>
      )}
    </span>
  );
};

// Componente para进度条 animada
export const AnimatedProgress = ({ 
  percentage, 
  duration = 1500, 
  color = 'primary',
  height = 8,
  className = ''
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentProgress = easeOutQuart * percentage;
      
      setProgress(currentProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, percentage, duration]);

  return (
    <div ref={progressRef} className={`animated-progress ${className}`}>
      <div 
        className={`progress-fill progress-${color}`}
        style={{ 
          width: `${progress}%`,
          height: `${height}px`,
          transition: 'width 0.3s ease'
        }}
      />
      <span className="progress-text">{Math.round(progress)}%</span>
    </div>
  );
};

// Hook para smooth scrolling
export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Navbar height
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

// Componente para revelación gradual de elementos
export const StaggerReveal = ({ 
  children, 
  className = '',
  staggerDelay = 100 
}) => {
  return (
    <div 
      className={`stagger-reveal ${className}`}
      data-stagger-delay={staggerDelay}
    >
      {children}
    </div>
  );
};

export default {
  useScrollAnimation,
  useParallax,
  ScrollReveal,
  ParallaxContainer,
  AnimatedCounter,
  TypewriterText,
  AnimatedProgress,
  useSmoothScroll,
  StaggerReveal
};