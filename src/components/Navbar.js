import React, {useState} from 'react'
import './Navbar.css'
import Hamburguesa from './Hamburguesa.js';
import { Link } from 'react-router-dom';

function Navbar () {
  const [clicked,setclicked] = useState(false)
  const handleClick = () => {
    // cuando esta true lo pasa a false y viseversa
     setclicked(!clicked);
  };
 
  const closeMenu = () => {
    setclicked(false); // Cierra el menú siempre al hacer click en un link
};
  
    return(
       <> 
      <nav className='nav'> 
     <img className='logo'src='../logo.jpg' alt= 'logo'/>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <Link className='alink' onClick={closeMenu} to='/'>Inicio</Link>
        <Link className='alink' onClick={closeMenu} to='/Testimonio'>Testimonio</Link>
        <Link className='alink' onClick={closeMenu} to='/Portafolio'>Portafolio</Link>
        <Link className='alink' onClick={closeMenu} to='/Nosotros'>Nosotros</Link>
      </div>

      <div className='ocultar'>  
        <Hamburguesa clicked={clicked}  handleClick={handleClick}/>
      </div>
      <div className={`initial ${clicked ? 'active' : ''}`}></div>
     </nav>   
      </> 
    );
}

export default Navbar;