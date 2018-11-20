import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from '../Homescreen/Home'
import Categories from '../Screen2/Categories'
import uid from 'uid'

export default class App extends Component {
  zivilrecht = [
    {
      id: uid(),
      theme: 'Arbeitsrecht'
    },

    {
      id: uid(),
      theme: 'Familienrecht'
    }
  ]

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <Home zivilrecht={this.zivilrecht} />}
          />
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
