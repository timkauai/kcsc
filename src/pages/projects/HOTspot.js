import React from "react"
import { Link } from "gatsby"

import Nav from "../../modules/nav"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { Link as Scroll } from "react-scroll"

const HOTspotPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div className="sub-pages-header">
      <h1> the KCSC HOTspot </h1>{" "}
      <h3>a mobile van bringing WiFi and STEAM activities to you</h3>{" "}
      <div className="intern circle-pic"> </div>{" "}
      <div className="btns">
        <Scroll spy={true} smooth="true" offset={-70} duration={500} to="loc">
          learn more{" "}
        </Scroll>{" "}
        <Link to="/apply"> apply to the internship </Link>{" "}
      </div>{" "}
    </div>{" "}
    <div id="loc"> </div>{" "}
    <div className="slanted-up-green slanted-first larger-p">
      <div className="pic intern-pic-left"> </div>{" "}
      <h3> WiFi + STEAM = HOTspot</h3>{" "}
      <p>
        COVID-19 has made learning challenging for everyone involved; students,
        teachers and parents. KCSC wants to support students, teachers and
        parents by bringing resources to their neighborhoods with KCSC HOTspot.
        KCSC HOTspot will come to neighborhoods and the students, teachers and
        parents can gather, adhering to social distancing, have access to wifi
        and connect with each other. Via KCSC HOTspot KCSC will share
        information, resources as well as fun science related activities and
        content.
      </p>{" "}
    </div>{" "}
    <div className="impact-statement">
      {" "}
      <h3> Come for the WiFi stay for the STEAM </h3>{" "}
      <div className="line-of-3-pics">
        <div className="pic intern-pic"> </div>{" "}
        <div className="pic intern-pic"> </div>{" "}
        <div className="pic intern-pic"> </div>{" "}
      </div>{" "}
      <p>
        At the HOTspots, we will plan to have STEAM activies and programs. STEAM
        is Science, Technology, Engineering, Art and Math. Here you can learn
        about anything from the science of Kauai’s Climate Change to how to make
        a website like this one
      </p>{" "}
    </div>{" "}
    <div className="slanted-up-green">
      <div className="pic intern-pic-right"> </div>{" "}
      <h3> Where will we be when? </h3>{" "}
      <p>
        We are still in the planning stage, and currently haven't scheduled any
        HOTspot meet ups.
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

export default HOTspotPage
