import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Nav from "../modules/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ApplyPage extends React.Component {
  state = {
    name: "",
    school: "",
    schoolyear: "",
    age: "",
    email: "",
    parentname: "",
    parentemail: "",
    parentphone: "",
    question: "",
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
    let input = this.state
    console.log(input)
    this.postEmail(input)
  }

  postEmail = async input => {
    let res = await axios.post(
      "https://protected-atoll-55720.herokuapp.com/internship",
      {
        name: input.name,
        school: input.school,
        schoolyear: input.schoolyear,
        age: input.age,
        email: input.email,
        parentname: input.parentname,
        parentemail: input.parentemail,
        parentphone: input.parentphone,
        question: input.question,
      }
    )
    console.log(res)
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Nav />
        <div className="contact-page">
          <div className="contact-form">
            <form onSubmit={this.handleSubmit}>
              <h5> your name </h5>{" "}
              <input
                className="name-input text-input"
                placeholder="Johnnie Appleseed"
                value={this.state.name}
                onChange={this.handleInputChange}
                type="text"
                name="name"
              />
              <h5> your email(so we can get back to you) </h5>{" "}
              <input
                placeholder="john@appleseed.com"
                className="email-input text-input"
                value={this.state.email}
                onChange={this.handleInputChange}
                type="text"
                name="email"
              />
              <h5> your school </h5>{" "}
              <input
                placeholder="Jefferson High School"
                className="email-input text-input"
                value={this.state.school}
                onChange={this.handleInputChange}
                type="text"
                name="school"
              />
              <h5> School Year </h5>{" "}
              <input
                placeholder="Class of 2021"
                className="email-input text-input"
                value={this.state.schoolyear}
                onChange={this.handleInputChange}
                type="text"
                name="schoolyear"
              />
              <h5> Age </h5>{" "}
              <input
                placeholder="17 Years Old"
                className="email-input text-input"
                value={this.state.age}
                onChange={this.handleInputChange}
                type="text"
                name="age"
              />
              <h5> Parent Name </h5>{" "}
              <input
                placeholder="Phil Appleseed"
                className="email-input text-input"
                value={this.state.parentname}
                onChange={this.handleInputChange}
                name="parentname"
                type="text"
              />
              <h5> Parent Email </h5>{" "}
              <input
                placeholder="phil@appleseed.com"
                className="email-input text-input"
                value={this.state.parentemail}
                onChange={this.handleInputChange}
                name="parentemail"
                type="text"
              />
              <h5> Parent Phone Number </h5>{" "}
              <input
                placeholder="(808)APP-LES"
                className="email-input text-input"
                type="text"
                value={this.state.parentphone}
                onChange={this.handleInputChange}
                name="parentphone"
              />
              <h5>
                {" "}
                Based on the description of the internship, which aspects appeal
                most to you?{" "}
              </h5>{" "}
              <textarea
                type="text"
                rows="3"
                className="message-input text-input"
                value={this.state.question}
                onChange={this.handleInputChange}
                name="question"
              ></textarea>{" "}
              <br />
              <input
                className="submit-btn-contact"
                type="submit"
                value="send message"
              />
            </form>{" "}
          </div>{" "}
          <h1> Apply to Internship </h1>{" "}
          <h3> either fill out the form, or email us at info @kauaicsc.org </h3>{" "}
          <div className="contact-img pic-no-s"> </div>{" "}
        </div>{" "}
        <div className="big-bottom-margin"></div>
      </Layout>
    )
  }
}

export default ApplyPage
