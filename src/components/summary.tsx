import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './summary.css'

const Summary = () => {
  return (
    <section className='summary'>
      <h2>Summary</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faChevronRight} width={14} />
          <span>Lead Engineer with over 15 years of experience.</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faChevronRight} width={14} />
          <span>Launched own startup in 2024.</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faChevronRight} width={14} />
          <span>
            Rebuilt a React Native app from the ground up, resulting in 30% increased user
            engagement.
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faChevronRight} width={14} />
          <span>Conducted A/B testing, increasing user conversion and revenue by 8%.</span>
        </li>
      </ul>
    </section>
  )
}

export default Summary
