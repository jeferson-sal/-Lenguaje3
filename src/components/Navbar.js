import React, { useState } from 'react';
import './Navbar.css';
import Hamburguesa from './Hamburguesa.js';
import { Link } from 'react-router-dom';
import { BsTranslate } from 'react-icons/bs';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [language, setLanguage] = useState('es'); // El idioma por defecto es español

  const handleClick = () => {
    setClicked(!clicked); // Cambia el estado del menú hamburguesa
  };

  const closeMenu = () => {
    setClicked(false); // Cierra el menú cuando se hace clic en un enlace
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'es' ? 'en' : 'es'); // Cambia el idioma entre español e inglés
  };

  // Objeto con las traducciones de los textos
  const translations = {
    es: {
      inicio: 'Inicio',
      testimonio: 'Testimonio',
      portafolio: 'Portafolio',
      nosotros: 'Nosotros',
    },
    en: {
      inicio: 'Home',
      testimonio: 'Testimony',
      portafolio: 'Portfolio',
      nosotros: 'About Us',
    },
  };

  return (
    <>
      <nav className="nav">
        <img className="logo" src="../logo.jpg" alt="logo" />
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link className="alink" onClick={closeMenu} to="/">
            {translations[language].inicio}
          </Link>
          <Link className='alink' onAbort={closeMenu} to= '/login'>Login</Link>
          <Link className="alink" onClick={closeMenu} to="/Testimonio">
            {translations[language].testimonio}
          </Link>
          <Link className="alink" onClick={closeMenu} to="/Portafolio">
            {translations[language].portafolio}
          </Link>
          <Link className="alink" onClick={closeMenu} to="/Nosotros">
            {translations[language].nosotros}
          </Link>

          {/* Botón de traducción */}
          <button className="translate-btn" onClick={handleLanguageToggle}>
            <BsTranslate />
          </button>
        </div>

        <div className="ocultar">
          <Hamburguesa clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`initial ${clicked ? 'active' : ''}`}></div>
      </nav>
    </>
  );
}

export default Navbar;