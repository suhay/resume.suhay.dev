import React from "react"

import Layout from "../../../src/components/layout"
import Header from '../../../src/components/header'
import Experience from '../../../src/components/experience'
import Education from '../../../src/components/education'
import Summary from '../../../src/components/summary'
import Skills from '../../../src/components/skills'
import Personal from '../../../src/components/experience/personal'
import Other from '../../../src/components/experience/other'
import SEO from '../../../src/components/seo'

import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Resume" />
    <Header />
    <div className="row">
      <aside className="col-md-4 order-2 order-md-0">
        <Skills />
        <Personal />
        <Other />
        <Education />
      </aside>
      <main className="col-md-8">
        <Summary />
        <Experience />
      </main>
    </div>
  </Layout>
)

export default IndexPage
