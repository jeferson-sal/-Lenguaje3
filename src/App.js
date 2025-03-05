import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Testimonio from './components/Testimonio';
import Portafolio from './components/Portafolio';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <>
   <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/Testimonio' element={<Testimonio/>}/>
      <Route path='/Portafolio' element={<Portafolio/>}/>
      <Route path='/Nosotros' element={<Nosotros/>}/>
    </Routes> 
 </Router>
    </>
    
  );
}

export default App;
