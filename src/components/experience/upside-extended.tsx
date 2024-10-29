import React from 'react'

const Upside = () => {
  return (
    <div className='job'>
      <h3 className='col-md-6'>Senior Full-Stack Engineer</h3>
      <h4 className='col-md-6'>
        Upside Business Travel // Remote <span>Aug 2020 - Aug 2021</span>
      </h4>
      <div className='w-100'></div>
      <p>
        Travel company based in DC focused on disrupting the industry with their React + Node
        microservice-based platform.
      </p>
      <ul>
        <li>
          <strong>Team lead </strong> for an autonomous group of engineers focused on
          future-proofing our products and creating company-wide coding standards. A few of our
          projects included upgrading our Material UI library to the latest version to allow for
          better TypeScript support and to better integrate it with the design team's initiative of
          creating a centralized design system.
        </li>
        <li>
          <strong>Led the development team</strong> with building a real-time profile sync system
          connecting to a Global Distribution System. I thoroughly documented architectural
          decisions such as using clean architecture, built a base suite of unit tests, provided
          tooling for localized feature testing, and hooked it up to our CI/CD platform.
        </li>
        <li>
          <strong>React and Node.js developer</strong> for a feature-rich trip approval process. I
          broke down the larger project into smaller pieces that other engineers on the team could
          easily pick up.
        </li>
        <li>
          Worked on <strong>addressing and fulfilling tech debt</strong> from transitioning
          JavaScript files to TypeScript or testing out new libraries and frameworks that would
          better help an already existing process.
        </li>
        <li>
          Provided <strong>troubleshooting expertise</strong> for our AWS microservices whenever
          something came up in production.
        </li>
      </ul>
    </div>
  )
}

export default Upside
