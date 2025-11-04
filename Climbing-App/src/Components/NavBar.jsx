import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      Climb Buddy
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/create">Create A Buddy</a>
      </li>
      <li>
        <a href="/signUp">Sign Up</a>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;