import React from "react"

import Layout from "../components/layout"
import Header from '../components/header'
import Experience from '../components/experience'
import Education from '../components/education'
import Summary from '../components/summary'
import Skills from '../components/skills'
import Personal from '../components/experience/personal'
import Other from '../components/experience/other'
import SEO from '../components/seo'

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
      </aside>
      <main className="col-md-8">
        <Summary />
        <Experience />
        <Education />
      </main>
    </div>
  </Layout>
)

export default IndexPage
