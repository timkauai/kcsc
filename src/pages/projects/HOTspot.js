import React from "react"
import { Link } from "gatsby"

import Nav from "../../modules/nav"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import greenSec from "../../modules/green-section"

const HOTspotPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div>
      <h1> the KCSC HOTspot </h1>{" "}
      <h3>a mobile van bringing WiFi and STEAM activities to you</h3>{" "}
    </div>{" "}
    <greenSec title="test" message="test" imgCss="intern-img"></greenSec>
  </Layout>
)

export default HOTspotPage
