import React from 'react'

import Contact from './contacts'

import './header.css'

const Header = () => (
  <header className='row'>
    <div className='order-md-2 col-md-8'>
      <h1>Matthew Suhay</h1>
      <h2>Climatebase Fellow</h2> · <h2>Engineering Lead</h2>
    </div>
    <Contact />
  </header>
)

export default Header
