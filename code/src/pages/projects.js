import React from "react"
import { Link } from "gatsby"

import Nav from "../modules/nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <h1> Projects </h1> <p> Welcome to your new Gatsby site. </p>{" "}
    <p> Now go build something great. </p>{" "}
    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
      }}
    >
      <Image />
    </div>{" "}
    <Link to="/page-2/"> Go to page 2 </Link> <br />
    <Link to="/using-typescript/"> Go to "Using TypeScript" </Link>{" "}
  </Layout>
)

export default ProjectsPage
