import React from "react"
import { Link } from "gatsby"

import Nav from "../../modules/nav"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import greenSec from "../../modules/green-section"
import { Link as Scroll } from "react-scroll"

const sharingSciencePage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div className="sub-pages-header">
      <h1> the Sharing Science Program </h1>{" "}
      <h3>
        {" "}
        We have 3 main ways we promote the sharing of science: Student Sharing
        Science, Teachers Sharing Science and Students Teaching Science{" "}
      </h3>{" "}
      <div className="intern circle-pic"> </div>{" "}
      <div className="btns">
        <Scroll spy={true} smooth="true" offset={-70} duration={500} to="loc">
          learn more{" "}
        </Scroll>{" "}
        <Link to="/donate"> donate to the cause </Link>{" "}
      </div>{" "}
    </div>{" "}
    <div id="loc"> </div>{" "}
    <div className="slanted-up-green slanted-first">
      <div className="pic intern-pic-left"> </div>{" "}
      <h3> Teachers Sharing Science </h3>{" "}
      <p>
        To encourage teachers to share science, KCSC is building a Science
        Teacher Collaborative during 2020 - 2021 school year.{" "}
      </p>{" "}
    </div>{" "}
    <div className="section">
      <div className="pic intern-pic-right"> </div>{" "}
      <h3> Students Sharing Science </h3>{" "}
      <p>
        The Students Sharing Science pilot project provides the Kauai Community
        Science Center, KCSC, with an opportunity to pilot their student
        generated display/hands-on-activity concept by collaborating with the
        Integrated Science Class at Waimea Canyon Middle School, WCMS, and
        Sciencenter in Ithaca, NY.
      </p>
    </div>{" "}
    <div className="slanted-up-green last-sec">
      <div className="pic intern-pic-left"> </div>{" "}
      <h3> Students Teaching Science </h3>{" "}
      <p>
        Our 2020-2021 KCSC Student Internship program will be the kick-off of
        our student lead activities projects, where students teach other
        students and the community.
      </p>{" "}
    </div>{" "}
  </Layout>
)

export default sharingSciencePage
