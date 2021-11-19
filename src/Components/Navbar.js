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
          <NavLink to="/" style={styles.link} activeStyle={{color:"black"}} exact>Home</NavLink>
          <NavLink to="/about" exact style={styles.link} activeClassName="is-active">About</NavLink>
          <NavLink to="/contact" exact style={styles.link} activeClassName="is-active">Contact</NavLink>
      </ul>
    </nav>
  );
}

const styles={
    link:{
        textDecoration:'none',
        color:'white',
        fontSize: '20px',
        fontWeight: '500',
        paddingLeft: '70px'
    },
}

export default Navbar;
