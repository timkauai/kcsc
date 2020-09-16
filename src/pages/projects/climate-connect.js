import React from "react"
import { Link } from "gatsby"

import Nav from "../../modules/nav"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import greenSec from "../../modules/green-section"
import { Link as Scroll } from "react-scroll"

const climateConnectPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div className="sub-pages-header">
      <h1> Climate Connect </h1>{" "}
      <h3>
        {" "}
        At the KCSC, we take time during every project to connect it to the
        current Climate Crisis
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
      <div className="pic intern-pic-left"> </div> <h3> The Connection </h3>{" "}
      <p>
        The connection can be anywhere from learning the impact of astro-turf vs
        grass on the environment while doing a project on Football helmets.
      </p>{" "}
    </div>{" "}
    <div className="section last-sec">
      <div className="pic intern-pic-right"> </div> <h3> Our Logo </h3>{" "}
      <p>
        Our Logo was designed by Brynn Lee Hirata from Waimea Canyon Middle
        School!
      </p>{" "}
    </div>{" "}
  </Layout>
)

export default climateConnectPage
