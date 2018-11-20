import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from '../Homescreen/Home'
import Private from '../Screen2/Private'
import Public from '../Screen2/Public'
import Criminal from '../Screen2/Criminal'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/private" render={() => <Private />} />
          <Route path="/public" render={() => <Public />} />
          <Route path="/criminal" render={() => <Criminal />} />
        </div>
      </Router>
    )
  }
}
