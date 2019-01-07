import React, { Component } from 'react'
import '../comon/index.css'
import RouterView from "../router/map"
import { BrowserRouter as Router} from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <div className='wrap'>
        <Router>
          <RouterView></RouterView>
        </Router>
       
      </div>
    )
  }
}
