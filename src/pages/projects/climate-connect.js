import React from "react"
import { Link } from "gatsby"

import Nav from "../../modules/nav"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import greenSec from "../../modules/green-section"

const climateConnectPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div>
      <h1> Climate Connect </h1>{" "}
      <h3>
        {" "}
        At the KCSC, we take time during every project to connect it to the
        current Climate Crisis{" "}
      </h3>{" "}
    </div>{" "}
    <greenSec title="test" message="test" imgCss="intern-img">
      {" "}
    </greenSec>{" "}
  </Layout>
)

export default climateConnectPage
