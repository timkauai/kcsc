import React from "react"
import { Link } from "gatsby"

import "../styles/main.scss"

const Nav = () => (
  <nav>
    <h1 className="main-logo">
      {" "}
      <Link to="/">Logo</Link>
    </h1>
    <div className="alternate-links">
      <h3>
        <Link to="/about">about</Link>
      </h3>
      <h3>
        <Link to="/internship">internship</Link>
      </h3>
      <h3>
        <Link to="/contact">contact</Link>
      </h3>
      <h3>
        <Link to="/projects">projects</Link>
      </h3>
      <h3 className="btn">
        <Link to="/donate">donate</Link>
      </h3>
    </div>
  </nav>
)

export default Nav
