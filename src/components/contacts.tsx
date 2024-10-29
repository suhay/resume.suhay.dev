import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLink, faFireAlt } from '@fortawesome/free-solid-svg-icons'

import './contacts.css'

const Contact = () => (
  <div className='contacts'>
    <ul>
      <li className='black'>
        <FontAwesomeIcon icon={faEnvelope} color='#FFF' width={14} />
        <a href='mailto:matt@suhay.dev'>matt@suhay.dev</a>
      </li>
      <li className='black'>
        <FontAwesomeIcon icon={faLink} color='#FFF' width={14} />
        <a href='https://suhay.dev'>https://suhay.dev</a>
      </li>
      <li className='black'>
        <FontAwesomeIcon icon={faLinkedin} color='#FFF' width={14} />
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
        Smoke Signals
      </li>
    </ul>
  </div>
)

export default Contact
