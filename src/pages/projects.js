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
    <div className="projects-header">
      <h1>Projects</h1>
      <h3>
        We a community science center built to help grow science literacy,
        because every career has an element of science. We work on projects to
        help grow science literacy on Kauai.
      </h3>
    </div>
    <div id="projects">
      <div className="projects-grid">
        <Link to="/hotspot" className="grid">
          <div className="pic hotspot-pic"> </div> <h3> KCSC HOTspot </h3>{" "}
        </Link>{" "}
        <Link to="/students-sharing-science" className="grid">
          <div className="pic SSS-pic"> </div>{" "}
          <h3> Students Sharing Science </h3> <div className="inner"></div>
        </Link>{" "}
        <Link to="/climate-connect" className="grid">
          <div className="pic CC-pic"> </div> <h3> Climate Connect </h3>{" "}
        </Link>{" "}
        <Link to="/citzen-science-project" className="grid">
          <div className="pic CSP-pic"> </div>{" "}
          <h3> Citizen Science Projects </h3>{" "}
        </Link>{" "}
        <Link to="/professionals-and-learners" className="grid">
          <div className="pic PALS-pic"> </div>{" "}
          <h3> Professionals And LearnerS </h3>{" "}
        </Link>{" "}
      </div>{" "}
    </div>{" "}
  </Layout>
)

export default ProjectsPage
