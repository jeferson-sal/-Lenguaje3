import React, { useState } from 'react';
import './Navbar.css';
import Hamburguesa from './Hamburguesa.js';
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [isMonochrome, setIsMonochrome] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const toggleMonochrome = () => {
    setIsMonochrome(!isMonochrome);
    document.body.classList.toggle('monochrome-mode');
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <nav className='nav'>
      <img className='logo' src='../logo.jpg' alt='logo' />

      {/* Contenedor derecho con Login y Luna */}
      <div className="right-section">
        <button className="dark-mode-button" onClick={toggleMonochrome}>
          <MdDarkMode className="dark-mode-icon" />
        </button>
        <Link className='alink' onClick={closeMenu} to='/Login'>Login</Link>
      </div>

      {/* Contenedor de los enlaces principales */}
      <div className={`links ${clicked ? 'active' : ''}`}>
        <Link className='alink' onClick={closeMenu} to='/'>Inicio</Link>
        <Link className='alink' onClick={closeMenu} to='/Testimonio'>Testimonio</Link>
        <Link className='alink' onClick={closeMenu} to='/Portafolio'>Portafolio</Link>
        <Link className='alink' onClick={closeMenu} to='/Nosotros'>Nosotros</Link>
      </div>

      <div className='ocultar'>
        <Hamburguesa clicked={clicked} handleClick={handleClick} />
      </div>
    </nav>
  );
}

export default Navbar;

