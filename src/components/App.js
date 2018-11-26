import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uid from 'uid'

import Home from '../Homescreen/Home'
import Private from '../Screen2/Private'
import Public from '../Screen2/Public'
import Criminal from '../Screen2/Criminal'

export default class App extends Component {
  state = {
    Private: [
      { text: 'Arbeitsrecht', marked: false, id: uid },
      { text: 'Erbrecht', marked: false },
      { text: 'Familienrecht', marked: false },
      { text: 'Schuldrecht', marked: false },
      { text: 'Sachenrecht', marked: false },
      { text: 'Arbeitsrecht', marked: false, id: uid },
      { text: 'Erbrecht', marked: false },
      { text: 'Familienrecht', marked: false },
      { text: 'Schuldrecht', marked: false },
      { text: 'Sachenrecht', marked: false },
      { text: 'Vertragsrecht', marked: false }
    ],
    Public: [
      { text: 'Verwaltungsrecht', marked: false },
      { text: 'Baurecht', marked: false },
      { text: 'Polizeirecht', marked: false },
      { text: 'Wirtschaftsverwaltungsrecht', marked: false },
      { text: 'Verwaltungsrecht', marked: false },
      { text: 'Baurecht', marked: false },
      { text: 'Polizeirecht', marked: false },
      { text: 'Wirtschaftsverwaltungsrecht', marked: false },
      { text: 'Verwaltungsrecht', marked: false },
      { text: 'Baurecht', marked: false },
      { text: 'Polizeirecht', marked: false },
      { text: 'Wirtschaftsverwaltungsrecht', marked: false },
      { text: 'Umweltrecht', marked: false }
    ],
    Criminal: [
      { text: 'Strafrecht AT', marked: false },
      { text: 'Strafrecht BT', marked: false },
      { text: 'Strafrecht AT', marked: false },
      { text: 'Strafrecht BT', marked: false },
      { text: 'Strafrecht AT', marked: false },
      { text: 'Strafrecht BT', marked: false },
      { text: 'Strafrecht AT', marked: false },
      { text: 'Strafrecht BT', marked: false },
      { text: 'Strafprozessrecht', marked: false }
    ]
  }

  renderPrivate() {
    return this.state.Private.map(item => (
      <Private text={item.text} key={uid()} />
    ))
  }

  renderPublic() {
    return this.state.Public.map(item => (
      <Public text={item.text} key={uid()} />
    ))
  }

  renderCriminal() {
    return this.state.Criminal.map(item => (
      <Criminal text={item.text} key={uid()} />
    ))
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/private" render={() => this.renderPrivate()} />
          <Route path="/public" render={() => this.renderPublic()} />
          <Route path="/criminal" render={() => this.renderCriminal()} />
        </div>
      </Router>
    )
  }
}
