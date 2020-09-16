import React from "react"
import { Link } from "gatsby"

import Nav from "../../modules/nav"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import greenSec from "../../modules/green-section"
import { Link as Scroll } from "react-scroll"

const PALSPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div className="sub-pages-header">
      <h1> Professionals And LearnerS </h1>{" "}
      <h3>
        When students can interact with professionals in fields related to their
        science fair projects or career interests they will have an opportunity
        for deeper learning and an enhanced experience.
      </h3>{" "}
      <div className="intern circle-pic"> </div>{" "}
      <div className="btns">
        <Scroll spy={true} smooth="true" offset={-70} duration={500} to="loc">
          learn more{" "}
        </Scroll>{" "}
        <Link to="/donate"> donate </Link>{" "}
      </div>{" "}
    </div>{" "}
    <div id="loc"> </div>{" "}
    <div className="slanted-up-green slanted-first">
      <div className="pic intern-pic-left"> </div> <h3> Professionals </h3>{" "}
      <p>
        If you are a professional interested in working with students please
        contact us. You do not have to be on Kauai to participate.
      </p>{" "}
      <Link to="/contact">Contact Us</Link>
    </div>{" "}
    <div className="section">
      <div className="pic intern-pic-right"> </div> <h3> Students </h3>{" "}
      <p>
        Are you working on a science fair project or want to learn about a
        career you are interested in? Contact us and see how we can work
        together
      </p>{" "}
      <Link to="/contact">Contact Us</Link>
    </div>{" "}
    <div className="slanted-up-green last-sec">
      <div className="pic intern-pic-left"> </div> <h3> Teachers </h3>{" "}
      <p>
        We can’t do this without you! We need your expertise and experience to
        ensure that we are supporting all of your work in the classroom. Please
        contact us if you are interested in working with professionals or have a
        student that might be.
      </p>{" "}
      <Link to="/contact">Contact Us</Link>
    </div>{" "}
  </Layout>
)

export default PALSPage
