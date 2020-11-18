import React, { Component } from "react"
import Nav from "../modules/nav"
import Layout from "../components/layout"
import axios from "axios"

export class calendar extends Component {
    state = {
        res: null
      }
    
      postEmail = async emailInput => {
        console.log('hello')
        let res = await axios.get(
          "https://protected-atoll-55720.herokuapp.com/calendar"
        )
        this.setState({
          res: res.data,
        })

        console.log(res)
      }

      componentDidMount() {
        this.postEmail()
      }

  render() {
    let loadedCalendar = this.state.res ? (
    // this.state.res.map((event) => (
    //   <div className="startup" key={`elem-loaded-${event[0]}`}>
    //     <div className="img"></div>{" "}
    //     <div className="startup-copy">
    //       {" "}
    //       <h3>{event[0]}</h3>
    //       <p>startup Description</p>
    //       <div className="tags">
    //         <p className="lightblue tag">Oahu 2019</p>
    //         <p className="green tag">App</p>
    //       </div>
    //     </div>
    //   </div>
    // ))
      <div key={`elem-loaded-${this.state.res[0]}`}>{this.state.res[0]}</div>
  ) : (
    <p key="elem-loading">loading...</p>
  );
    return (
    <Layout>       
        <Nav />
        <div>{loadedCalendar}</div>
    </Layout>

    )
  }
}

export default calendar
