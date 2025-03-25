import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import Skills from '../components/skills'
import Education from '../components/education'
import Experience from '../components/experience'

import './index.css'
import Contact from '../components/contacts'
import Summary from '../components/summary'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <div className='d-flex' style={{ paddingTop: '20px' }}>
        <aside className='mr-5' style={{ flexBasis: '31%' }}>
          <Contact />
          <Summary />
          <Skills />
          <Education />
        </aside>
        <main style={{ flexBasis: '69%' }}>
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
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      <link
        href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap'
        rel='stylesheet'
      />
    </>
  )
}
