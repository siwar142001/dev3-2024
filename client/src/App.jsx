
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import monImage from './bg.jpg';
import './components/navbar.css';
import Navbar from './components/navbar';
import Bottombar from './components/bottonmbar';
import Accueil from './pages/Accueil';
import Apropos from './pages/about';
import Contact from './pages/contact';
import Connexion from './pages/connexion';
import Home from './pages/home';
import Menu from './pages/menu'
import Poster from './pages/poster';

function App() {

  // Fonction de soumission du formulaire
  const handleSubmit = (data) => {
    console.log('Données soumises :', data);
  };

  return (
    <div className="App">
      <Poster onSubmit={handleSubmit} />
    </div>
  );
}

export default App; 

