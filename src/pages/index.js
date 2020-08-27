import React from "react"
import { Link } from "gatsby"

import Nav from "../modules/nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/main.scss"

const API_KEY =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTYfgjmQVcBupdKIl9qeuSs-NNPYl5SaB1xlRnY005LPcsoHykZ-96MAseAt2rvbf9mkeC9EcCD1x7z/pub?gid=0&single=true&output=csv"

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
    <div className="green-section split-2">
      <div className="newsletter">
        <h3> sign up for the newsletter </h3> <input type="text" />{" "}
        <button>Submit</button>
      </div>
      <div className="socials">
        <h3> check us out on social media </h3>{" "}
        <div className="soc-links">
          <a href="">
            <h3>insta</h3>
          </a>
          <a href="">
            <h3>facebook</h3>
          </a>
          <a href="">
            <h3>twitter</h3>
          </a>
          <a href="">
            <h3>LinkedIn</h3>
          </a>
        </div>
      </div>
    </div>
    <div id="projects">
      <h3 className="title"> Our Projects </h3>
      <div className="projects-grid">
        <Link to="/hotspot" className="grid">
          <div className="pic hotspot-pic"></div>
          <h3> KCSC HOTspot </h3>
        </Link>
        <Link to="/students-sharing-science" className="grid">
          <div className="pic SSS-pic"></div>{" "}
          <h3> Students Sharing Science </h3> <div className="inner"></div>
        </Link>
        <Link to="/climate-connect" className="grid">
          <div className="pic CC-pic"></div> <h3> Climate Connect </h3>{" "}
        </Link>{" "}
        <Link to="/citzen-science-project" className="grid">
          <div className="pic CSP-pic"></div>{" "}
          <h3> Citizen Science Projects </h3>{" "}
        </Link>{" "}
        <Link to="/professionals-and-learners" className="grid">
          <div className="pic PALS-pic"></div>{" "}
          <h3> Professionals And LearnerS </h3>{" "}
        </Link>{" "}
      </div>{" "}
    </div>{" "}
    <div className="green-section">
      <h3 className="title">
        {" "}
        A Science Center Bringing Science & Community Together{" "}
      </h3>{" "}
    </div>{" "}
    <div className="newsletter-section">
      <h1 className="title"> The Newsletter </h1> <h3> Past Issues </h3>{" "}
      <div className="newsletter-links">
        <Link>
          {" "}
          <div className="pic july-2020-news"></div> <p>July 2020</p>
        </Link>{" "}
        <Link>
          {" "}
          <div className="pic april-2020-news"></div> <p>April 2020</p>{" "}
        </Link>{" "}
        <Link>
          {" "}
          <div className="pic"></div> <p>January 2020</p>{" "}
        </Link>{" "}
        <Link>
          <div className="pic"></div> <p className="news">October 2019</p>{" "}
        </Link>{" "}
      </div>{" "}
      <div>
        <h3> Sign Up for the Newsletter </h3> <p> here is the form </p>{" "}
      </div>{" "}
    </div>{" "}
    <div className="green-section events-sec">
      <h3 className="title"> Upcoming Events and Activities </h3>{" "}
      <h4> Currently no upcoming events! </h4>{" "}
    </div>{" "}
    <div className="empty-currently">
      A SPECIAL SECTION TO POST ABOUT HOW AWESOME WE ARE WITH SOME COOL PICS{" "}
    </div>{" "}
    <div className="green-section partners">
      <h3 className="title"> Partners and Afflictions </h3>{" "}
      <p> Wow look at all of these people we have affiliations with </p>{" "}
    </div>{" "}
    <div className="donate-section">
      <div className="pic logo"></div> <p> GIVE US MONEY WE NEED IT / </p>{" "}
      <Link to="/donate"> donate </Link>{" "}
    </div>
  </Layout>
)

export default IndexPage
