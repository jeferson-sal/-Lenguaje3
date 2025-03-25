import React, { useState } from 'react';
import './LandingPage1.css';
import { useNavigate } from 'react-router-dom';

const LandingPage1 = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('inicio');
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleStart = () => {
    setShowMoreOptions(true);
  };

  return (
    <div className="landing-container">
      {/* Barra de navegación superior */}
      <nav className="navbar">
        <ul className="nav-links">
          <li className={`nav-item ${activeTab === 'inicio' ? 'active' : ''}`} onClick={() => setActiveTab('inicio')}>
            Inicio
          </li>
          <li className={`nav-item ${activeTab === 'testimonio' ? 'active' : ''}`} onClick={() => setActiveTab('testimonio')}>
            Testimonios
          </li>
          <li className={`nav-item ${activeTab === 'portafolio' ? 'active' : ''}`} onClick={() => setActiveTab('portafolio')}>
            Portafolios
          </li>
          <li className={`nav-item ${activeTab === 'nosotros' ? 'active' : ''}`} onClick={() => setActiveTab('nosotros')}>
            Nosotros
          </li>
        </ul>
      </nav>

      {/* Pestaña Inicio (original, sin cambios) */}
      {activeTab === 'inicio' && (
        <div className="landing-content">
          <h1 className="landing-title">Crea tu Portafolio Profesional</h1>
          <p className="landing-description">
            La herramienta definitiva para mostrar tu trabajo al mundo
          </p>

          {/* Botón que desaparece al hacer clic */}
          {!showMoreOptions && (
            <button className="landing-button" onClick={handleStart}>
              Comenzar Ahora
            </button>
          )}

          {/* Sección de información principal */}
          <div className="info-section">
            <h2>Beneficios Exclusivos</h2>
            <div className="info-grid">
              <div className="info-card">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Diseño profesional" className="card-image" />
                <h3>Diseño Profesional</h3>
                <p>Plantillas creadas por diseñadores expertos para impresionar a tus clientes.</p>
              </div>
              <div className="info-card">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Personalización" className="card-image" />
                <h3>Personalización Total</h3>
                <p>Adapta cada detalle a tu estilo personal y necesidades profesionales.</p>
              </div>
              <div className="info-card">
                <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Analíticas" className="card-image" />
                <h3>Analíticas Avanzadas</h3>
                <p>Mide el impacto de tu portafolio y optimiza tu presencia en línea.</p>
              </div>
            </div>
          </div>

          {/* Más opciones al dar clic en "Comenzar" */}
          {showMoreOptions && (
            <div className="more-options-section">
              <h2 className="options-title">Selecciona tu método de creación</h2>
              <div className="options-grid">
                <div className="option-card" onClick={() => navigate('/blank-template')}>
                  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Desde cero" className="card-image" />
                  <h3>Desde Cero</h3>
                  <p>Libertad total para diseñar cada elemento a tu gusto.</p>
                  <div className="card-hover-effect">Comenzar diseño →</div>
                </div>
                <div className="option-card" onClick={() => navigate('/profession-templates')}>
                  <img src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Por profesión" className="card-image" />
                  <h3>Por Profesión</h3>
                  <p>Plantillas especializadas para tu área profesional.</p>
                  <div className="card-hover-effect">Ver opciones →</div>
                </div>
                <div className="option-card" onClick={() => navigate('/color-themes')}>
                  <img src="https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80" alt="Por color" className="card-image" />
                  <h3>Por Estilo de Color</h3>
                  <p>Elige primero la paleta de colores que te identifica.</p>
                  <div className="card-hover-effect">Explorar colores →</div>
                </div>
                <div className="option-card" onClick={() => navigate('/import-data')}>
                  <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Importar" className="card-image" />
                  <h3>Importar Datos</h3>
                  <p>Conecta con LinkedIn o sube tu CV para empezar rápido.</p>
                  <div className="card-hover-effect">Importar ahora →</div>
                </div>
                <div className="option-card" onClick={() => navigate('/ai-assistant')}>
                  <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80" alt="IA" className="card-image" />
                  <h3>Asistente de IA</h3>
                  <p>Nuestra inteligencia artificial crea un diseño perfecto para ti.</p>
                  <div className="card-hover-effect">Probar IA →</div>
                </div>
                <div className="option-card" onClick={() => navigate('/portfolio-examples')}>
                  <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Ejemplos" className="card-image" />
                  <h3>Inspírate</h3>
                  <p>Explora portafolios destacados para encontrar ideas.</p>
                  <div className="card-hover-effect">Ver ejemplos →</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Pestaña Testimonios (sin cambios) */}
      {activeTab === 'testimonio' && (
        <div className="other-tab-content">
          <h2>Historias de Éxito</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Usuario" className="testimonial-img" />
              <h3>María González</h3>
              <p className="testimonial-role">Diseñadora UX/UI</p>
              <p className="testimonial-text">"Gracias a esta plataforma conseguí mi trabajo soñado en Google. Mi portafolio impresionó a los reclutadores."</p>
            </div>
            <div className="testimonial-card">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Usuario" className="testimonial-img" />
              <h3>Carlos Mendoza</h3>
              <p className="testimonial-role">Desarrollador Full Stack</p>
              <p className="testimonial-text">"El proceso fue tan sencillo que pude concentrarme en lo importante: mostrar mis proyectos."</p>
            </div>
            <div className="testimonial-card">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Usuario" className="testimonial-img" />
              <h3>Ana Lucía Ramírez</h3>
              <p className="testimonial-role">Fotógrafa Profesional</p>
              <p className="testimonial-text">"Las plantillas para artistas visuales son perfectas. Ahora mis clientes pueden ver mi trabajo de forma profesional."</p>
            </div>
          </div>
        </div>
      )}

      {/* Pestaña Portafolios (versión mejorada) */}
      {activeTab === 'portafolio' && (
        <div className="other-tab-content">
          <h2 className="portfolio-title">Portafolios Destacados</h2>
          <p className="portfolio-subtitle">Explora nuestros mejores diseños y encuentra inspiración</p>
          <div className="portfolio-showcase">
            <div className="portfolio-card">
              <div className="portfolio-image-container">
                <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Portafolio 1" className="portfolio-image" />
                <div className="portfolio-overlay">
                  <button className="view-button">Ver Detalles</button>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>Diseño Minimalista</h3>
                <p className="portfolio-description">Perfecto para diseñadores y artistas visuales</p>
                <div className="portfolio-tags">
                  <span className="tag">Moderno</span>
                  <span className="tag">Elegante</span>
                  <span className="tag">Responsive</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-image-container">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Portafolio 2" className="portfolio-image" />
                <div className="portfolio-overlay">
                  <button className="view-button">Ver Detalles</button>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>Estilo Corporativo</h3>
                <p className="portfolio-description">Ideal para profesionales de negocios y tecnología</p>
                <div className="portfolio-tags">
                  <span className="tag">Profesional</span>
                  <span className="tag">Sobrio</span>
                  <span className="tag">Estructurado</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-image-container">
                <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Portafolio 3" className="portfolio-image" />
                <div className="portfolio-overlay">
                  <button className="view-button">Ver Detalles</button>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>Portafolio Creativo</h3>
                <p className="portfolio-description">Para quienes quieren destacar con un estilo único</p>
                <div className="portfolio-tags">
                  <span className="tag">Innovador</span>
                  <span className="tag">Colorido</span>
                  <span className="tag">Dinámico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pestaña Nosotros (sin cambios) */}
      {activeTab === 'nosotros' && (
        <div className="other-tab-content">
          <h2>Nuestro Equipo</h2>
          <div className="team-section">
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Equipo" className="team-img" />
              <h3>Luis Martínez</h3>
              <p>Fundador & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="Equipo" className="team-img" />
              <h3>Daniela Rojas</h3>
              <p>Diseñadora Principal</p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Equipo" className="team-img" />
              <h3>Andrés López</h3>
              <p>Ingeniero Frontend</p>
            </div>
          </div>
          <div className="mission-section">
            <h3>Nuestra Misión</h3>
            <p>Empoderar a profesionales de todas las áreas para que muestren su trabajo al mundo con herramientas sencillas pero poderosas.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage1;