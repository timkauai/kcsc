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
    <h1> Contact </h1>
    <h3>either fill out the form, or email us at info@kauaicsc.org</h3>
    <div>Here is an image</div>
    <div>and here is a form</div>
  </Layout>
)

export default ContactPage
