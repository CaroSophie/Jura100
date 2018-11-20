import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from '../Homescreen/Home'
import Zivilrecht from '../Screen2/Zivilrecht'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/zivilrecht" render={() => <Zivilrecht />} />
        </div>
      </Router>
    )
  }
}
