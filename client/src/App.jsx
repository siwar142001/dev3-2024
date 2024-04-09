
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import monImage from './bg.jpg';
//import './components/navbar.css';
import Navbar from './components/navbar';
import Bottombar from './components/bottonmbar';
import Accueil from './pages/Accueil';
import Apropos from './pages/apropos';
import Contact from './pages/contact';
import Connexion from './pages/connexion';
import Poster from './pages/poster';
import Home from './pages/home';
import apropos from './pages/apropos'

function App() {
  const handleSubmit = (data) => {
    console.log('Données soumises :', data);
  };
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/home' Component={Home}/>
          <Route path='/accueil' Component={Accueil}/>
          <Route path='/connexion' Component={Connexion}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/apropos' Component={apropos}/>
          <Route path='/poster' element={<Poster onSubmit={handleSubmit} />} />

        </Routes>
      </Router>
      <Bottombar />

      {/*<Accueil/> */}

    
    </div>
  );
}

export default App;

