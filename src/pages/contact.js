import React from "react"
import { Link } from "gatsby"

import Nav from "../modules/nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div className="contact-page">
      <div className="contact-form">
        <form>
          <h5> your name </h5>{" "}
          <input
            className="name-input text-input"
            placeholder="Johnnie Appleseed"
            type="text"
          />
          <h5> your email(so we can get back to you) </h5>{" "}
          <input
            placeholder="john@appleseed.com"
            className="email-input text-input"
            type="text"
          />
          <h5> your message </h5>{" "}
          <textarea
            placeholder="I love Kauai Community Science Center"
            type="text"
            rows="3"
            className="message-input text-input"
          ></textarea>{" "}
          <br />
          <input
            className="submit-btn-contact"
            type="submit"
            value="send message"
          />
        </form>{" "}
      </div>{" "}
      <h1> Contact </h1>{" "}
      <h3> either fill out the form, or email us at info @kauaicsc.org </h3>{" "}
      <div className="contact-img pic-no-s"> </div>{" "}
    </div>{" "}
  </Layout>
)

export default ContactPage
