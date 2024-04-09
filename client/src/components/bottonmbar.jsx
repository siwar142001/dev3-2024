import React from 'react';
import './bottombar.css';
function BottomNavbar() {
  return (
    <nav class="navbar1 navbar-expand-lg ">
  <div class="container-fluid">    
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/apropos">A propos</a>
        </li>
        
        
      </ul>
  </div>
</nav>
  );
}

export default BottomNavbar;
