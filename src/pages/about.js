import React from "react"
import { Link } from "gatsby"

import Nav from "../modules/nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <h1> About page </h1>
    <div>Talk about why</div>
    <div>Talk about other links to look at</div>
    <div>Documents</div>
  </Layout>
)

export default AboutPage
