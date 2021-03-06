import React from "react"
import { Link } from "gatsby"

import "../styles/main.scss"

const Nav = () => (
  <nav id="top">
    <h1 className="main-logo">
      {" "}
      <Link to="/">
        <div className="kcsc-logo"> </div>{" "}
      </Link>{" "}
    </h1>{" "}
    <div className="alternate-links">
      <h3>
        <Link to="/about"> about </Link>{" "}
      </h3>{" "}
      <h3>
        <Link to="/internship"> internship </Link>{" "}
      </h3>{" "}
      <h3>
        <Link to="/contact"> contact </Link>{" "}
      </h3>{" "}
      <h3>
        <Link to="/projects"> projects </Link>{" "}
      </h3>{" "}
      <h3 className="btn">
        <Link to="/giving"> Giving </Link>{" "}
      </h3>{" "}
    </div>{" "}
  </nav>
)

export default Nav
