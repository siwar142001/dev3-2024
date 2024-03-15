// Sidebar.js

import React from 'react';
import './sidebar.css'; // Importer le fichier CSS pour le style de la barre latérale

function Sidebar() {
  return (
    <div className="sidebar">
      
      <button className='sidebar-button'>Mon compte</button>
      <button className='sidebar-button'>Mes espaces</button>
      <button className='sidebar-button'>Historique</button>
      <button className='sidebar-button'>Favoris</button>
      <button className='sidebar-button'>Poster</button>      
    </div>
  );
}

export default Sidebar;
