import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Climb Buddy
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/create">Create A Buddy</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;