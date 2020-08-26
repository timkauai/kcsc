import React from "react"
import { Link } from "gatsby"

import Nav from "../modules/nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div className="above-fold">
      <div className="pic science-svg"></div>
      <h3>
        A science center showcasing science and technology that is driven by
        student interests, supported by professionals and shared with the
        community.
      </h3>
      <div className="abv-fold-btns">
        <Link to="/#projects">
          <h3 className="filled-btn"> Check out our projects </h3>
        </Link>
        <Link to="/internship">
          <h3 className="hollow-btn"> Apply to the internship </h3>
        </Link>
      </div>
    </div>
    <div>
      <div>
        <h3> Sign up for the newsletter </h3> <p> Form goes here </p>
      </div>
      <div>
        <h3> Check us out on social media </h3> <div> all socials go here </div>
      </div>
    </div>
    <div id="projects">
      <h3> Our Projects </h3>{" "}
      <div>
        <div>
          hotspot img <h3> KCSC HOTspot </h3>{" "}
        </div>{" "}
        <div>
          Students Sharing Science img <h3> Students Sharing Science </h3>{" "}
        </div>{" "}
        <div>
          Climate Connect img <h3> Climate Connect </h3>{" "}
        </div>{" "}
        <div>
          Citizen Science Projects img <h3> Citizen Science Projects </h3>{" "}
        </div>{" "}
        <div>
          PALS img <h3> Professionals And LearnerS </h3>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div>
      <div> an image </div>{" "}
      <h3> A Science Center Bringing Science & Community Together </h3>{" "}
    </div>{" "}
    <div>
      <h1> The Newsletter </h1> <h3> Past Issues </h3>{" "}
      <div>
        <Link> July 2020 </Link> <Link> April 2020 </Link>{" "}
        <Link> January 2020 </Link> <Link> October 2019 </Link>{" "}
      </div>{" "}
      <div>
        <h3> Sign Up for the Newsletter </h3> <p> here is the form </p>{" "}
      </div>{" "}
    </div>{" "}
    <div>
      <h3> Upcoming Events and Activities </h3>{" "}
      <b> Currently no upcoming events! </b>{" "}
    </div>{" "}
    <div>
      A SPECIAL SECTION TO POST ABOUT HOW AWESOME WE ARE WITH SOME COOL PICS{" "}
    </div>{" "}
    <div>
      <h3> Partners and Afflictions </h3>{" "}
      <p> Wow look at all of these people we have affiliations with </p>{" "}
    </div>{" "}
    <div>
      <div> logo </div> <p> GIVE US MONEY WE NEED IT / </p>{" "}
      <Link to="/donate"> donate </Link>{" "}
    </div>{" "}
    <div>An Idea. Add a scroll animation at the top to encourage scrolling</div>
  </Layout>
)

export default IndexPage
