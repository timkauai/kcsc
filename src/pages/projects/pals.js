import React from "react"
import { Link } from "gatsby"

import Nav from "../../modules/nav"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import greenSec from "../../modules/green-section"

const PALSPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div>
      <h1> Professionals And LearnerS </h1>{" "}
      <h3>
        When students can interact with professionals in fields related to their
        science fair projects or career interests they will have an opportunity
        for deeper learning and an enhanced experience.
      </h3>{" "}
    </div>{" "}
    <greenSec title="test" message="test" imgCss="intern-img">
      {" "}
    </greenSec>{" "}
  </Layout>
)

export default PALSPage
