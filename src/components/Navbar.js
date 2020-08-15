import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import TokenService from '../services/token-service'
import './Navbar.css'

class Navbar extends Component {

render() {
  return <>
    <header>  
    <div className="appName"><NavLink
        to='/cocktails'>
        Imbibe
      </NavLink></div>
    
    <nav className="navigation"> 
      <ul className="siteNav">
        <li><NavLink
        to='/addcocktail'>
        Add Cocktail
      </NavLink></li>
        <li><a href="#logout">Logout</a></li>
        <li><a href="#signup">Sign Up</a></li>
      </ul>
      </nav>
    </header>
  </>
}
}
export default Navbar;