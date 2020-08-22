import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import TokenService from '../services/token-service'
import './Navbar.css'

class Navbar extends Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.assign('/');
  }
  
  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <NavLink
          to='/addcocktail'>
          Add Cocktail
        </NavLink>
        <NavLink
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </NavLink>
      </div>
    )
  }
  
  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <NavLink
          to='/login'>
          Log in
        </NavLink>
        <NavLink
          to='/register'>
          Register
        </NavLink>
      </div>
    )
  }
  
  render() {
    return <>
      <nav className='Header'>
        <h1 className="header_link">
          <NavLink to='/cocktails'>
            Imbibe
          </NavLink>
        </h1>
        <span className='Header__tagline--wide'>Your cocktail caddy.</span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
  
      <span className='Header__tagline--narrow'>Your cocktail caddy.</span>
    </>
  }
}
export default Navbar;