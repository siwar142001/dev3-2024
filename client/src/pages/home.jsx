import './home.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import monImage from '../bg.jpg'; 
import '../components/navbar.css';
import Navbar from '../components/navbar';
import Bottombar from '../components/bottonmbar';


function App() {
  return (
    <div className="App">
      <header className="Spaces"></header>
      <body>
        <div>
          <Navbar />
          <h2>Bienvenue dans notre application de location d'espaces</h2>
          <img src={monImage} alt="Description" style={{ width: '1530px', height: '500px' }}/>

          <Bottombar />
        </div>
        
      </body>
    </div>
  );
}

export default App; 