import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Testimonio from './components/Testimonio';
import Portafolio from './components/Portafolio';
import Nosotros from './components/Nosotros';
import ProjectForm from './components/ProjectForm';

function App() {
  return (
    <>
   <Router>
      <Navbar/>
    <Routes>
    <Route path='/' element ={<ProjectForm/>}/>
      <Route path='/Home' element ={<Home/>}/>
      <Route path='/Testimonio' element={<Testimonio/>}/>
      <Route path='/Portafolio' element={<Portafolio/>}/>
      <Route path='/Nosotros' element={<Nosotros/>}/>
    </Routes> 
 </Router>
    </>
    
  );
}

export default App;
