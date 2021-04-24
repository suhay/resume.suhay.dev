import React from 'react'

import Thought from './thought-industries'
import Escalade from './escalade'
import Ohio from './ohio-university'
import Upside from './upside'

import './experience.css'

const Experience = () => (
  <section className="experience">
    <h2>Recent Experiences</h2>
    <Upside />
    <Thought />
    <Escalade />
    <Ohio />
  </section>
)

export default Experience
