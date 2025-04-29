
import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <a href="#">
          <img src={logo} alt="GeekFood Logo" />
          <span>GeekFood</span>
        </a>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link to="/foods">Foods</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>

      <div className="cta-button">
        <button>Get Started</button>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
