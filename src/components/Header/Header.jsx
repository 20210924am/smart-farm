import React, { useState } from 'react';
import './Header.css';
import RefreshLogo from '../../assets/Refresh_Logo.png';
import { FaBars } from 'react-icons/fa';

function Header() {

const [isOpen, setIsOpen] = useState(false);
const toggleMenu =() =>{
setIsOpen(!isOpen)
}

  return (
    <header>
    <nav className="navbar">
      <div className='nav-logo'>
      <a href='#'>
        <img src={RefreshLogo} alt="Refresh_Logo" className="logo-img"/>
        Refresh
        </a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FaBars/>
      </div>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">MY PLANT</a></li>
        <li><a href="#">COMMUNITY</a></li>
        <li><a href="#">SETTINGS</a></li>
        <li><a href="#">LOGOUT</a></li>
        </ul>
      </div>
    </nav>
    </header>
  );
}

export default Header;