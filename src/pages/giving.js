import React, { Component } from "react"
import Nav from "../modules/nav"
import Layout from "../components/layout"

export class giving extends Component {
  render() {
    return (
      <Layout>       
         <Nav />    
      <div className="giving-page">

      <h1 className="giving-title">Ways to Give</h1>
      <div className="giving-container">
        <div className="giving-containers donation"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> <h3>Donation</h3> <div className="copy"></div> <a className="btn" href="https://google.com">Donate Now</a></div>
        <div className="giving-containers volunteer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg><h3>Volunteer</h3>
<div className="copy"></div>
          <a className="btn" href="https://google.com">Contact Us</a>
        </div>
      </div>
      <div className="volunteer-container"></div>
    </div>
    </Layout>

    )
  }
}

export default giving
