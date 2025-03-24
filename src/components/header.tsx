import React from 'react'

import Contact from './contacts'

import './header.css'

const Header = () => (
  <header
    className=''
    style={{
      position: 'relative',
    }}
  >
    <div className=''>
      <h1 className='pl-5'>Matthew Suhay</h1>
      <div>
        <h2 className='pl-5'>
          Engineering Leader <span style={{ color: 'black' }}>· Lifelong Learner</span>
        </h2>
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 100,
      }}
    >
      <Contact />
    </div>
  </header>
)

export default Header
