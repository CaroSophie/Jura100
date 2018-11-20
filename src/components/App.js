import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from '../Homescreen/Home'
import Categories from '../Screen2/Categories'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/categories" render={() => <Categories />} />
          <nav>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/categories">Categories</NavLink>
          </nav>
        </div>
      </Router>
    )
  }
}
