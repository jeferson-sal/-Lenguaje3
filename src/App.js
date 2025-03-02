import './App.css';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import LandingPage from './components/LandingPage'; 
import './components/LandingPage.css';
import Hero from './components/Hero';
import './components/Hero.css';
import Footer from './components/Footer';
import './components/Footer.css';
import './components/Tarjeta';
import Tarjeta from './components/Tarjeta';







function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Tarjeta/>
      <Footer/>
    </div>
    
  );
}

export default App;
