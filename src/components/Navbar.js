import React, {useState} from 'react'
import './Navbar.css'
import Hamburguesa from './Hamburguesa.js';

function Navbar () {
  const [clicked,setclicked] = useState(false)
  const handleClick = () => {
    // cuando esta true lo pasa a false y viseversa
     setclicked(!clicked);
  };
 
  
    return(
       <> 
      <nav className='nav'> 
     <img className='logo'src='../logo.jpg' alt= 'logo'/>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a className='alink' onClick={handleClick} href='/'>Inicio</a>
        <a className='alink' onClick={handleClick} href='/'>Testimonio</a>
        <a className='alink' onClick={handleClick} href='/'>Portafolio</a>
        <a className='alink' onClick={handleClick} href='/'>Nosotros</a>
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