import React from "react"
import { Link } from "gatsby"

import "../styles/main.scss"

export default function greenSec({ props }) {
  const propsImg = "pic" + props.imgCss
  return (
    <div className="slanted-down-green">
      <div className={propsImg}></div>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </div>
  )
}
