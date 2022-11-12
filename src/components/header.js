import React from "react"

import Contact from './contacts'

import "./header.css"

const Header = () => (
  <header className="row">
    <div className="header-bar"></div>
    <div className="order-md-2 col-md-8">
      <h1>Matthew Suhay</h1>
      <h2>Tech Lead Full-Stack Engineer</h2>
    </div>
    <Contact />
  </header>
)

export default Header
