import React from 'react'

import Thought from './thought-industries'
import Escalade from './escalade'
import Upside from './upside'
import RocketMoney from './rocket-money'

import './experience.css'

const Experience = () => (
  <section className='experience'>
    <h2>Professional Experience</h2>
    <RocketMoney />
    <Upside />
    <Thought />
    <Escalade />
  </section>
)

export default Experience
