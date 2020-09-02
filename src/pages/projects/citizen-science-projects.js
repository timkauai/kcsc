import React from "react"
import { Link } from "gatsby"

import Nav from "../../modules/nav"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import greenSec from "../../modules/green-section"

const citizenSciencePage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div>
      <h1> citizen science projets </h1>{" "}
      <h3>
        {" "}
        When Citizens run experiments and colect data for scientists, even if
        you have never done a science experiement before in your life!{" "}
      </h3>{" "}
    </div>{" "}
    <greenSec title="test" message="test" imgCss="intern-img">
      {" "}
    </greenSec>{" "}
  </Layout>
)

export default citizenSciencePage
