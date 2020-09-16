import React from "react"
import { Link } from "gatsby"

import Nav from "../../modules/nav"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import greenSec from "../../modules/green-section"
import { Link as Scroll } from "react-scroll"

const citizenSciencePage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div className="sub-pages-header">
      <h1> Citizen Science Projects </h1>{" "}
      <h3>
        When citzens run experiments and collect data for scientists, even if
        you have never done a science experiment before in your life!
      </h3>{" "}
      <div className="intern circle-pic"> </div>{" "}
      <div className="btns">
        <Scroll spy={true} smooth="true" offset={-70} duration={500} to="loc">
          our citizen science projects
        </Scroll>{" "}
        <Link to="/donate"> donate </Link>{" "}
      </div>{" "}
    </div>{" "}
    <div id="loc"> </div>{" "}
    <div className="slanted-up-green slanted-first last-sec">
      <div className="pic intern-pic-left"> </div>{" "}
      <h3> The Wild Sourdough Project </h3>{" "}
      <p>
        The first Citizen Science project we are promoting is The Wild Sourdough
        Project. This project is run by Scientists from North Carolina State
        University and it is a great way to learn about the science behind
        bread. Not only can you produce valuable data for the scientists at NC
        State, but you can make delicious sourdough bread too! We tried it and
        we know that it works, so we are excited to share it with you.
      </p>{" "}
    </div>{" "}
  </Layout>
)

export default citizenSciencePage
