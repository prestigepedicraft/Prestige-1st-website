import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-header.png'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Prestige Pedicraft Logo" className="logo-header"/>
      </Link>
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
