import React from 'react'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFireAlt, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './contacts.css'

const Contact = () => (
  <div className='contacts'>
    <h2>Contact</h2>
    <ul>
      <li className='black'>
        <FontAwesomeIcon icon={faEnvelope} width={14} />
        <a href='mailto:matthew.suhay@gmail.com'>matthew.suhay@gmail.com</a>
      </li>
      <li className='black'>
        <FontAwesomeIcon icon={faLink} width={14} />
        <a href='https://suhay.dev'>https://suhay.dev</a>
      </li>
      <li className='black'>
        <FontAwesomeIcon icon={faLinkedin} width={14} />
        <a href='https://www.linkedin.com/in/matthew-suhay'>
          https://www.linkedin.com/in/matthew-suhay
        </a>
      </li>
      <li className=''>
        <FontAwesomeIcon icon={faGithub} width={14} />
        <a href='https://github.com/suhay'>https://github.com/suhay</a>
      </li>
      <li>
        <FontAwesomeIcon icon={faFireAlt} width={14} />
        <span>Smoke Signals</span>
      </li>
    </ul>
  </div>
)

export default Contact
