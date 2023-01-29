import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import "../styles/App.css";
import logo from "../assets/white-logo.png";

export default function Navbar() {

  function handleClick() {
    document.getElementByClassName(".menu").addAttribute("display", "none");
  }

  return (
    <div>
      <nav className="main-navigation">
        <div className="nav-wrapper">
          <img src={logo} alt="logo" />
          <input id="menu-checkbox" type="checkbox" className="menu-checkbox" />
          <label htmlFor="menu-checkbox" className="menu-toggle">&equiv; Menu</label>
          <ul className="menu">
            <li>
              <Link to="/" onClick={handleClick}>Accueil</Link>
            </li>
            <li>
              <Link to="/spa" onClick={handleClick}>Spa</Link>
            </li>
            <li>
              <Link to="/massages" onClick={handleClick}>Massages</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleClick}>Nous contacter</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
