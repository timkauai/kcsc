import React from "react"
import { Link } from "gatsby"

import Nav from "../modules/nav"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <div>
      <div>picture</div>
      <h3>
        A science center showcasing science and technology that is driven by
        student interests, supported by professionals and shared with the
        community.
      </h3>
      <div>
        <Link>
          <h3>Check out our products</h3>
        </Link>
        <Link>
          <h3>Apply to the internship</h3>
        </Link>
      </div>
    </div>
    <div>
      <div>
        <h3>Sign up for the newsletter</h3>
        <p>Form goes here</p>
      </div>
      <div>
        <h3>Check us out on scial media</h3>
        <div>all socials go here</div>
      </div>
    </div>
    <div>
      <h3>Our Projects</h3>
      <div>
        <div>
          hotspot img <h3>KCSC HOTspot</h3>
        </div>
        <div>
          Students Sharing Science img <h3>Students Sharing Science</h3>
        </div>
        <div>
          Climate Connect img <h3>Climate Connect</h3>
        </div>
        <div>
          Citizen Science Projects img<h3>Citizen Science Projects</h3>
        </div>
        <div>
          PALS img <h3>Professionals And LearnerS</h3>
        </div>
      </div>
    </div>
    <div>
      <div>an image</div>
      <h3>A Science Center Bringing Science & Community Together</h3>
    </div>
    <div>
      <h1>The Newsletter</h1>
      <h3>Past Issues</h3>
      <div>
        <Link>July 2020</Link>
        <Link>April 2020</Link>
        <Link>January 2020</Link>
        <Link>October 2019</Link>
      </div>
      <div>
        <h3>Sign Up for the Newsletter</h3>
        <p>here is the form</p>
      </div>
    </div>
    <div>
      <h3>Upcoming Events and Activities</h3>
      <b>Currently no upcoming events!</b>
    </div>
    <div>
      A SPECIAL SECTION TO POST ABOUT HOW AWESOME WE ARE WITH SOME COOL PICS
    </div>
    <div>
      <h3>Partners and Afflictions</h3>
      <p>Wow look at all of these people we have affiliations with</p>
    </div>
    <div>
      <div>logo</div>
      <p>GIVE US MONEY WE NEED IT/</p>
      <Link to="/donate">donate</Link>
    </div>
  </Layout>
)

export default IndexPage
