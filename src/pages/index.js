import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
