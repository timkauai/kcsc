/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import { Link as Scroll } from "react-scroll"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main> {children} </main>
        <footer>
          <div className="kcsc-logo logobox"></div>
          <div className="footer-item socialbox">
            <h3>Social Media</h3>
            <div>
              <a href="https://www.instagram.com/kauaicsc">insta</a>
              <a href="https://www.facebook.com/kauaicsc">facebook</a>
              <a href="https://twitter.com/kauaicsc">twitter</a>
              <a href="https://www.linkedin.com/company/64640520/admin/">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="footer-item pagesbox">
            <h3>Pages</h3>
            <div>
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
              <Link to="/internship">internship</Link>
              <Link to="contact">contact</Link>
              <Link to="/projects">projects</Link>
              <Link to="/donate">donate</Link>
            </div>
          </div>

          <div className="footer-item contactbox">
            <h3>Contact Information</h3>
            <p>
              Address: West Kaua`i Technology Center, Unit 102A, 9565 Kaumuali`i
              Highway, P.O. Box 60, Waimea, Hawaii 96796
            </p>
            <p>
              Phone: <a href="tel:+1(808)645-6017">(808)645-6017</a>
            </p>
            <p>
              Email: <a href="mailto:info@kauaicsc.org">info@kauaicsc.org</a>
            </p>
            <p>
              Contact Form: <Link to="/contact">Contact</Link>
            </p>
          </div>
          <Scroll
            className="footer-top totopbox"
            spy={true}
            smooth="true"
            offset={-70}
            duration={500}
            to="top"
          >
            back to top
          </Scroll>
          <div className="copyright">
            Copyright © 2018 KAUAICSC - All Rights Reserved.
          </div>
        </footer>
      </div>{" "}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
