import React from "react"
import { Link } from "gatsby"

import Nav from "../../modules/nav"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import greenSec from "../../modules/green-section"

const sharingSciencePage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div>
      <h1> sharing science program </h1>{" "}
      <h3>
        We have 3 main ways we promote the sharing of science: Student Sharing
        Science, Teachers Sharing Science and Students Teaching Science{" "}
      </h3>{" "}
    </div>{" "}
    <greenSec title="test" message="test" imgCss="intern-img">
      {" "}
    </greenSec>{" "}
  </Layout>
)

export default sharingSciencePage
