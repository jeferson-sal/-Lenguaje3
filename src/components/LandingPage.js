import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="encabezado">
        <h1>Bienvenido a Nuestra LandingPage</h1>
        <p>Un lugar donde encontrarás soluciones increíbles.</p>
        <button className="cta-button">¡Comienza ahora!</button>
      </header>
          
      <section className="tarjetas">  
        <div className="tarjeta">
          <h3>Característica 1</h3>
          <p>Descripción de la característica 1.</p>
        </div>
        <div className="tarjeta">
          <h3>Característica 2</h3>
          <p>Descripción de la característica 2.</p>
        </div>
        <div className="tarjeta">
          <h3>Característica 3</h3>
          <p>Descripción de la característica 3.</p>
        </div>
      </section>

      <section className="testimonios">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonio">
          <p>"Excelente servicio, muy recomendado."</p>
          <p>- Cliente Satisfecho</p>
        </div>
        <div className="testimonio">
          <p>"Me encanta la facilidad de uso."</p>
          <p>- Otro Cliente Satisfecho</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default LandingPage;