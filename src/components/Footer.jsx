import React from 'react'
import logoFooter from '../assets/logo-footer.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logoFooter} alt="Prestige Pedicraft Footer Logo" />
      </div>
      <div className="footer-text">© {new Date().getFullYear()} Prestige Pedicraft. All rights reserved.</div>
    </footer>
  )
}

export default Footer
