import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">Literary Magazine</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/article">Articles</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
