import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLink, faFireAlt } from '@fortawesome/free-solid-svg-icons'

import './contacts.css'

const Contact = () => (
  <div className="order-md-0 col-md-4 contacts">
    <h2 className="sr-only">How to contact me</h2>
    <ul>
      <li className="secret"><a href="mailto:matt@suhay.dev">matt@suhay.dev</a> <FontAwesomeIcon icon={faEnvelope} /></li>
      <li className="secret"><a href="https://suhay.dev">https://suhay.dev</a> <FontAwesomeIcon icon={faLink} /></li>
      <li className="secret"><a href="https://www.linkedin.com/in/matthew-suhay">https://www.linkedin.com/in/matthew-suhay</a> <FontAwesomeIcon icon={faLinkedin} /></li>
      <li className=""><a href="https://github.com/suhay">https://github.com/suhay</a> <FontAwesomeIcon icon={faGithub} /></li>
      <li>Smoke Signals <FontAwesomeIcon icon={faFireAlt} /></li>
    </ul>
  </div>
)

export default Contact
