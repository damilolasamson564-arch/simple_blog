
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-wrap">
        <span className="logo-mark">P</span>
        <span className="logo-text">Prime tech</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        {/* <Link to="/laptops">Laptops</Link> */}
        <Link to="/contact">Contact</Link>
        {/* <Link to="/admin/dashboard">Admin</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
