import React from 'react';
import './navbar.css';
import { FaBars } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">Spaces</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/accueil">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/connexion">Connexion</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/compte">Mon compte</a></li>
            <li><a class="dropdown-item" href="/espaces">Mes espaces</a></li>
            <li><a class="dropdown-item" href="/loues">Loués</a></li>
            <li><a class="dropdown-item" href="/favoris">Favoris</a></li>
            <li><a class="dropdown-item" href="/poster">Poster</a></li>


          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;