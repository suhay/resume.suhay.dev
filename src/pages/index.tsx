import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import Skills from '../components/skills'
import Personal from '../components/experience/personal'
import Other from '../components/experience/other'
import Education from '../components/education'
// import Summary from '../components/summary'
import Experience from '../components/experience'

import './index.css'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <div className='row'>
        {/* <aside className='col-md-4 order-2 order-md-0'>
          <Skills />
          <Personal />
          <Other />
          <Education />
        </aside> */}
        <main className='col-md-8'>
          {/* <Summary /> */}
          <Experience />
        </main>
      </div>
    </Layout>
  )
}

export default IndexPage

export function Head() {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
        crossOrigin='anonymous'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Open+Sans|Oswald&display=swap'
        rel='stylesheet'
      ></link>
    </>
  )
}
