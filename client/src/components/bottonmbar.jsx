import React from 'react';
import './bottombar.css';
function BottomNavbar() {
  return (
    <nav className="bottom-navbar">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a href="Apropos" className="nav-link">A propos</a>
        </li>
        <li className="nav-item">
          <a href="Contact" className="nav-link">Contact</a>
        </li>
        
      </ul>
    </nav>
  );
}

export default BottomNavbar;
