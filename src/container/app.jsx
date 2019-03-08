import React, { Component } from 'react'
import "common/css/bootstrap.min.css"
import "common/css/style.css"
import "common/css/common.css"
import RouterView from "../router/map"
import { BrowserRouter as Router } from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <div className='wrap'>
       <header>123</header>
        <Router>
          <RouterView/>
        </Router>
      </div>
    )
  }
}
