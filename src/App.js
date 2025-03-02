import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
   <Router>
      <Navbar/>
    <Routes>
      <Route path='/' exact Component={Home}/>
    </Routes> 
 </Router>
    </>
    
  );
}

export default App;
