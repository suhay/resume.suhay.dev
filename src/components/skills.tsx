import React from 'react'
import { Chip } from '@material-ui/core'

import './skills.css'

const Skills = () => {
  return (
    <section className='section'>
      <h2>Skills</h2>
      <section>
        <h3>Front-End</h3>
        <ul>
          <li>
            <Chip label='React' />
          </li>
          <li>
            <Chip label='React Native' />
          </li>
          <li>
            <Chip label='Flutter' />
          </li>
          <li>
            <Chip label='JavaScript' />
          </li>
          <li>
            <Chip label='CSS' />
          </li>
          <li>
            <Chip label='HTML' />
          </li>
          <li>
            <Chip label='WCAG' />
          </li>
          <li>
            <Chip label='SEO' />
          </li>
          <li>
            <Chip label='Tailwind' />
          </li>
          <li>
            <Chip label='SEO' />
          </li>
        </ul>
      </section>
      <section>
        <h3>Back-End</h3>
        <ul>
          <li>
            <Chip label='Node.js' />
          </li>
          <li>
            <Chip label='Next.js' />
          </li>
          <li>
            <Chip label='Nest.js' />
          </li>
          <li>
            <Chip label='TypeScript' />
          </li>
          <li>
            <Chip label='GraphQL' />
          </li>
          <li>
            <Chip label='REST' />
          </li>
          <li>
            <Chip label='Go' />
          </li>
          <li>
            <Chip label='C#' />
          </li>
          <li>
            <Chip label='Python' />
          </li>
          <li>
            <Chip label='GatsbyJS' />
          </li>
        </ul>
      </section>
      <section>
        <h3>Server · Database · CI · CD</h3>
        <ul>
          <li>
            <Chip label='Jest' />
          </li>
          <li>
            <Chip label='Cypress' />
          </li>
          <li>
            <Chip label='Docker' />
          </li>
          <li>
            <Chip label='Git' />
          </li>
          <li>
            <Chip label='SQL' />
          </li>
          <li>
            <Chip label='AWS' />
          </li>
          <li>
            <Chip label='Mongo' />
          </li>
          <li>
            <Chip label='PostgreSQL' />
          </li>
          <li>
            <Chip label='Expo' />
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Skills
