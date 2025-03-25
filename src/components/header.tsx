import React from 'react'

import './header.css'

const Header = () => (
  <header
    className=''
    style={{
      position: 'relative',
    }}
  >
    <div className=''>
      <h1>Matthew Suhay</h1>
      <div>
        <h2>
          <span style={{ color: '#666' }}>Founder</span> <span>· Tech Lead ·</span>{' '}
          <span style={{ color: '#666' }}>Full-Stack Engineer</span>
        </h2>
      </div>
    </div>
  </header>
)

export default Header
