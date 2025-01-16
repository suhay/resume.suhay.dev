import React from 'react'

import Thought from './thought-industries'
import Upside from './upside'
import RocketMoney from './rocket-money'

import './experience.css'
import ZeroIn from './zeroin'
import DashboardEarth from './dashboard-earth'

const Experience = () => (
  <section className='experience'>
    <h2>Professional Experience</h2>
    <ZeroIn />
    <DashboardEarth />
    <RocketMoney />
    <Upside />
    <Thought />
  </section>
)

export default Experience
