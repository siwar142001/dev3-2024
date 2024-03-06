import React from 'react';
import './navbar.css';
import { FaBars } from 'react-icons/fa'; 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./logo.png" alt="Logo" className="logo" />
      </div>
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a href="Accueil" className="nav-link">Accueil</a>
        </li>
        
        <li className="nav-item">
          <a href="Connexion" className="nav-link">Connexion</a>
        </li>
        <li className="nav-item icon">
          <a href="menu" className="nav-link">
            <FaBars /> 
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
