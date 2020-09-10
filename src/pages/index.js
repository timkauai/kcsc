import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Nav from "../modules/nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link as Scroll } from "react-scroll"
import Slideshow from "../modules/slideshow"

import "../styles/main.scss"

export default class IndexPage extends React.Component {
  state = {
    email: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let emailInput = this.state.email
    console.log(emailInput)
    this.postEmail(emailInput)
  }

  postEmail = async emailInput => {
    let res = await axios.post("http://localhost:3000/emails", {
      email: emailInput,
    })
    console.log(res)
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Nav />
        <div className="above-fold">
          <div className="pic science-svg"> </div>{" "}
          <h3>
            A science center showcasing science and technology that is driven by
            student interests, supported by professionals and shared with the
            community.{" "}
          </h3>{" "}
          <div className="abv-fold-btns">
            <Scroll
              spy={true}
              smooth="true"
              offset={-70}
              duration={500}
              to="projects"
            >
              <h3 className="filled-btn"> Check out our projects </h3>{" "}
            </Scroll>{" "}
            <Link to="/internship">
              <h3 className="hollow-btn"> Apply to the internship </h3>{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="green-section split-2">
          <div className="newsletter">
            <h3> sign up for the newsletter </h3> <b>email</b>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="youremail@email.com"
              />{" "}
              <button type="submit"> Submit </button>{" "}
            </form>{" "}
          </div>{" "}
          <div className="socials">
            <h3> check us out on social media </h3>{" "}
            <div className="soc-links">
              <a href="https://www.instagram.com/kauaicsc">
                <h3> insta </h3>{" "}
              </a>{" "}
              <a href="https://www.facebook.com/kauaicsc">
                <h3> facebook </h3>{" "}
              </a>{" "}
              <a href="https://twitter.com/kauaicsc">
                <h3> twitter </h3>{" "}
              </a>{" "}
              <a href="https://www.linkedin.com/company/64640520/admin/">
                <h3> LinkedIn </h3>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div id="projects">
          <h3 className="title"> Our Projects </h3>{" "}
          <div className="projects-grid">
            <Link to="/projects/HOTspot" className="grid">
              <div className="pic hotspot-pic"> </div> <h3> KCSC HOTspot </h3>{" "}
            </Link>{" "}
            <Link to="/projects/sharing-science-programs" className="grid">
              <div className="pic SSS-pic"> </div>{" "}
              <h3> Students Sharing Science </h3> <div className="inner"></div>
            </Link>{" "}
            <Link to="/projects/climate-connect" className="grid">
              <div className="pic CC-pic"> </div> <h3> Climate Connect </h3>{" "}
            </Link>{" "}
            <Link to="/projects/citizen-science-projects" className="grid">
              <div className="pic CSP-pic"> </div>{" "}
              <h3> Citizen Science Projects </h3>{" "}
            </Link>{" "}
            <Link to="/projects/pals" className="grid">
              <div className="pic PALS-pic"> </div>{" "}
              <h3> Professionals And LearnerS </h3>{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="green-section motto-sec">
          <div className="motto-img"></div>
          <h3 className="motto title">
            {" "}
            A Science Center Bringing Science & Community Together{" "}
          </h3>{" "}
        </div>{" "}
        <div className="newsletter-section">
          <h1 className="title"> The Newsletter </h1> <h3> Past Issues </h3>{" "}
          <div className="newsletter-links">
            <Link>
              {" "}
              <p>July 2020</p>
            </Link>{" "}
            <Link>
              {" "}
              <p>April 2020</p>{" "}
            </Link>{" "}
            <Link>
              {" "}
              <p>January 2020</p>{" "}
            </Link>{" "}
            <Link>
              <p className="news">October 2019</p>{" "}
            </Link>{" "}
          </div>{" "}
          <div className="signup-newsletter">
            <h3> Sign Up for the Newsletter </h3>{" "}
            <div className="newsletter bottom-10">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="youremail@email.com"
                />{" "}
                <button type="submit"> Submit </button>{" "}
              </form>
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="green-section events-sec">
          <h3 className="title"> Upcoming Events and Activities </h3>{" "}
          <h4> Currently no upcoming events! </h4>{" "}
        </div>{" "}
        <div className="testimonials">
          <h3 className="title">Testimonials</h3>
          <div className="testa">
            <div></div>
            <h3>James</h3>
            <h2>
              "Standing there, watching these kids learn how to do multivariable
              calculous I could literally see the difference it was making in
              them"
            </h2>
          </div>
          <div className="testa">
            {" "}
            <div></div>
            <h3>Corey</h3>
            <h2>
              "A kid proved the string theory in front of me, and I didn't even
              need to help him"
            </h2>
          </div>
          <div className="testa">
            {" "}
            <div></div>
            <h3>Max</h3>
            <h2>
              "A 5th grader just developed a wormhole to the future, and I'm not
              even mad..."
            </h2>
          </div>
        </div>{" "}
        <div className="green-section partners">
          <h3 className="title"> Partners and Afflictions </h3>{" "}
          <div className="imgs">
            <div className="partner1"></div>
            <div className="partner2"></div>
            <div className="partner3"></div>
            <div className="partner4"></div>
            <div className="partner5"></div>
            <div className="partner6"></div>
            <div className="partner7"></div>
            <div className="partner8"></div>
            <div className="partner9"></div>
            <div className="partner10"></div>
            <div className="partner11"></div>
          </div>
        </div>
        <div className="donate-section">
          <div className="kcsc-logo"> </div>{" "}
          <p>
            {" "}
            This copy needs some work: We are working to make West Side of Kauai
            have more Science LIteracey tax deductible, lalalala{" "}
          </p>{" "}
          <Link className="filled-btn" to="/donate">
            {" "}
            donate{" "}
          </Link>{" "}
        </div>{" "}
      </Layout>
    )
  }
}
