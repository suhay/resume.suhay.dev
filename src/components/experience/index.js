import React from 'react'

import Thought from './thought-industries'
import Escalade from './escalade'
import Ohio from './ohio-university'

import './experience.css'

const Experience = () => (
  <section className="experience">
    <h2>Recent Experiences</h2>
    <Thought />
    <Escalade />
    <Ohio />
  </section>
)

export default Experience
