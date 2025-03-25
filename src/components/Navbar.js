import React, { useState } from 'react';
import './Navbar.css';
import Hamburguesa from './Hamburguesa.js';
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";

function Navbar() {    
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <> 
      <nav className='nav'> 
        <img className='logo' src='../logo.jpg' alt='logo' />
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link className='alink' onClick={closeMenu} to='/'>Inicio</Link>
          <Link className='alink' onClick={closeMenu} to='/Testimonio'>Testimonio</Link>
          <Link className='alink' onClick={closeMenu} to='/Portafolio'>Portafolio</Link>
          <Link className='alink' onClick={closeMenu} to='/Nosotros'>Nosotros</Link>
        </div>

        {/* Contenedor de Login + Modo Oscuro */}
        <div className="nav-right">
          <MdDarkMode className="dark-mode-icon" />
          <Link className="login-button" to='/login'>Login</Link>
        </div>

        <div className='ocultar'>  
          <Hamburguesa clicked={clicked} handleClick={handleClick} />
        </div>

        <div className={`initial ${clicked ? 'active' : ''}`}></div>
      </nav>   
    </> 
  );
}

export default Navbar;
