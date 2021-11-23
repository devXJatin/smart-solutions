import React from "react";
import Logo from "../Assests/logo3.png";
import "../App.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <header>
          <img className="logo"src ={Logo}/>
          <h2 className="logoHeading">Smart Solutions</h2>
      </header>
      <ul className="nav-links">
          <NavLink to="/" className="link" activeClassName="active" >Home</NavLink>
          <NavLink to="/about" className="link" activeClassName="active" >About</NavLink>
          <NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink>
      </ul>
    </nav>
  );
}


export default Navbar;
