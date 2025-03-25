import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage1 from './components/LandingPage1';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
   <Router>
      <Navbar/>
    <Routes>
      <Route path='/' exact Component={LandingPage1}/>
    </Routes> 
 </Router>
    </>
    
  );
}

export default App;

