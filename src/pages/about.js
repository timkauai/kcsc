import React from "react"
import { Link } from "gatsby"

import Nav from "../modules/nav"
import Layout from "../components/layout"
import { Link as Scroll } from "react-scroll"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div className="sub-pages-header">
      <h1> what we are about </h1>{" "}
      <h3>
        We are a community science center built to help grow science literacy,
        because every career has an element of science.{" "}
      </h3>{" "}
      <div className="circle-pic about"> </div>{" "}
      <div className="btns">
        <Scroll spy={true} smooth="true" offset={-70} duration={500} to="learn">
          learn more{" "}
        </Scroll>{" "}
        <Link to="/apply"> apply to the internship </Link>{" "}
      </div>{" "}
    </div>{" "}
    <div id="learn" className="slanted-up-green slanted-first">
      <div className="pic intern-pic-left"> </div>{" "}
      <h3> Why support science literacy ? </h3>{" "}
      <p>
        The Founders of the Kauai Community Science Center, KCSC, see an
        opportunity to support the exciting educational transformation happening
        on Kauai and grow science awareness and literacy in the community at the
        same time.Science is part of every industry sector and the rich natural
        environment on Kauai.However, Science is not a strength for Hawaii
        Students.{" "}
      </p>{" "}
    </div>{" "}
    <div className="section">
      <div className="pic intern-pic-right"> </div>{" "}
      <h3> Every career has an element of science </h3>{" "}
      <p>
        No matter the career aspirations of students, there is an element of
        science within that career pathway.The role of the KCSC is not to create
        more scientists, but to support development of well - rounded and
        informed professionals who are aware of the role that science plays in
        their everyday.{" "}
      </p>{" "}
    </div>{" "}
    <div className="slanted-up-green">
      <div className="pic intern-pic-left"> </div>{" "}
      <h3> Student Driven Content </h3>{" "}
      <p>
        The student generated display / hands on activity will be shared with
        the public.Students will gain valuable experience and skills working
        with the professionals, learning about the career, developing the
        displays / hands on activities and learning about science.KCSC also
        plans to offer student led activities on a wide array of science topics
        for other students, the community and visitors.{" "}
      </p>{" "}
    </div>{" "}
    <div className="section last-sec only-p">
      <div className="pic intern-pic-right"> </div>{" "}
      <p>
        KCSC is working to build on the successes and find new ways to ensure
        that Hawaii is effectively preparing all students to be ready for the
        career and / or college of their choosing.{" "}
      </p>{" "}
    </div>{" "}
  </Layout>
)

export default AboutPage
