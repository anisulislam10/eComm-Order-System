import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/">Client Portal</Link>
      <Link to="/admin">Admin Portal</Link>
    </header>
  );
}

export default Navbar;
