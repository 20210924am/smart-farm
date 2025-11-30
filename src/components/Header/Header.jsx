import React from 'react';
import './Header.css';
import RefreshLogo from '../../assets/Refresh_Logo.png';

function Header() {
  return (
    <header>
    <nav className="navbar">
      <div className='nav-logo'>
      <a href='#'>
        <img src={RefreshLogo} alt="Refresh_Logo" className="logo-img"/>
        Refresh
        </a>
      </div>
      <div className='navbar-menu'>
        <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">DASHBOARD</a></li>
        <li><a href="#">SETTINGS</a></li>
        <li><a href="#">LOGOUT</a></li>
        </ul>
      </div>
    </nav>
    </header>
  );
}

export default Header;