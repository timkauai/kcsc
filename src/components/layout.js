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
          <div></div>
          <div>
            <div className="socials"></div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              Our Adress: West Kaua`i Technology Center, Unit 102A, 9565
              Kaumuali`i Highway, P.O. Box 60, Waimea, Hawaii 96796,
            </div>
            <div>Phone</div>
          </div>
          <div>Copyright © 2018 KAUAICSC - All Rights Reserved.</div>
        </footer>
      </div>{" "}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
