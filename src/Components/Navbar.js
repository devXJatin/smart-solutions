import React from "react";
import Logo from "../Assests/logo.png";
import "../App.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <header>
          <img className="logo"src ={Logo}/>
      </header>
      <ul className="nav-links">
          <NavLink to="/?" className="link" activeClassName="active" >Home</NavLink>
          <NavLink to="/about" className="link" activeClassName="active" >About</NavLink>
          <NavLink to="/contact" className="link" activeClassName="active">Contact</NavLink>
      </ul>
    </nav>
  );
}


export default Navbar;
