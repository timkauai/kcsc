import React from "react"
import { Link } from "gatsby"

import Nav from "../modules/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link as Scroll } from "react-scroll"

const InternshipPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div className="sub-pages-header">
      <h1> the KCSC Internship </h1>{" "}
      <h3>
        An Open - Ended internship for you to create content with KCSC and have
        an impact in the Kauai community{" "}
      </h3>{" "}
      <div className="intern circle-pic"> </div>{" "}
      <div className="btns">
        <Scroll spy={true} smooth="true" offset={-70} duration={500} to="loc">
          learn more{" "}
        </Scroll>{" "}
        <Link to="/apply"> apply to the internship </Link>{" "}
      </div>{" "}
    </div>{" "}
    <div id="loc"> </div>{" "}
    <div className="slanted-up-green slanted-first">
      <div className="pic intern-pic-left"> </div>{" "}
      <h3> You Generate STEAM content at KCSC </h3>{" "}
      <p>
        KCSC will provide you resources so you can persue your interests in
        STEAM, because research shows that work is more creative and rewarding
        when you can choose what you want to work on{" "}
      </p>{" "}
    </div>{" "}
    <div className="impact-statement">
      {" "}
      <h3> your work at KCSC has an impact </h3>{" "}
      <div className="line-of-3-pics">
        <div className="pic intern-pic"> </div>{" "}
        <div className="pic intern-pic"> </div>{" "}
        <div className="pic intern-pic"> </div>{" "}
      </div>{" "}
      <p>
        KCSC is a platform for making, collaborating, learning and
        sharing.Weather researching solutions to local climate change problems
        or making an arduino tutorial your work builds connections and fufills
        our mission of bringing science and community together{" "}
      </p>{" "}
    </div>{" "}
    <div className="slanted-up-green">
      <div className="pic intern-pic-right"> </div>{" "}
      <h3> Your work at KCSC has value </h3>{" "}
      <p>
        This internship will not only help you discover your likes and dislikes,
        it will also help you create a network of professionals in the field,
        build your resume and enhance your job and college applications{" "}
      </p>{" "}
    </div>{" "}
    <div className="section last-sec">
      <div className="pic intern-pic-left"> </div>{" "}
      <h3> What your work at KCSC entails </h3>{" "}
      <p>
        You will be help bring the{" "}
        <Link to="/projects/HOTspot">KCSC HOTspot</Link>, as mobile WIFI
        hotshot, maker space and STEAM resource to west Kauai, as well as
        helping us with our{" "}
        <Link to="/projects/sharing-science-programs">
          Sharing Science Program
        </Link>{" "}
        and <Link to="climate-connect"> Climate Connect Program. </Link>
        As an intern you will be doing all of this both virtually and in person
        (in accordance with social distancing guidelines)
      </p>{" "}
    </div>{" "}
  </Layout>
)

export default InternshipPage
