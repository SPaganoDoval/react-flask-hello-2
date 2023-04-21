import React from "react";
import {Link} from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
    return ( 

	<>	
	<div className="grad-bar"></div>
  	<nav className="navbar">
    <h4>Sonia Pagano Doval</h4>
    
    <ul className="nav no-search">
      <li className="nav-item"><a href="#">Home</a></li>
      <li className="nav-item"><a href="#">Registro/Login</a></li>
      <li className="nav-item"><a href="#">Logout</a></li>
      
	</ul>
	</nav>
	</>
	);
};