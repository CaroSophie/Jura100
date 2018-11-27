import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uid from 'uid'

import Home from '../screens/Home'
import SubPage from '../screens/SubPage'

export default class App extends Component {
  state = {
    topics: [
      { text: 'Arbeitsrecht', marked: false, id: uid(), area: 'private' },
      { text: 'Erbrecht', marked: false, id: uid(), area: 'private' },
      { text: 'Familienrecht', marked: false, id: uid(), area: 'private' },
      { text: 'Schuldrecht', marked: false, id: uid(), area: 'private' },
      { text: 'Sachenrecht', marked: false, id: uid(), area: 'private' },
      { text: 'Vertragsrecht', marked: false, id: uid(), area: 'private' },
      { text: 'Verwaltungsrecht', marked: false, id: uid(), area: 'public' },
      { text: 'Baurecht', marked: false, id: uid(), area: 'public' },
      { text: 'Polizeirecht', marked: false, id: uid(), area: 'public' },
      {
        text: 'Wirtschaftsverwaltungsrecht',
        marked: false,
        id: uid(),
        area: 'public'
      },
      { text: 'Verwaltungsrecht', marked: false, id: uid(), area: 'public' },
      { text: 'Baurecht', marked: false, id: uid(), area: 'public' },
      { text: 'Polizeirecht', marked: false, id: uid(), area: 'public' },
      {
        text: 'Wirtschaftsverwaltungsrecht',
        marked: false,
        id: uid(),
        area: 'public'
      },
      { text: 'Verwaltungsrecht', marked: false, id: uid(), area: 'public' },
      { text: 'Baurecht', marked: false, id: uid(), area: 'public' },
      { text: 'Polizeirecht', marked: false, id: uid(), area: 'public' },
      {
        text: 'Wirtschaftsverwaltungsrecht',
        marked: false,
        id: uid(),
        area: 'public'
      },
      { text: 'Umweltrecht', marked: false, id: uid(), area: 'public' },
      { text: 'Strafrecht AT', marked: false, id: uid(), area: 'criminal' },
      { text: 'Strafrecht BT', marked: false, id: uid(), area: 'criminal' },
      { text: 'Strafrecht AT', marked: false, id: uid(), area: 'criminal' },
      { text: 'Strafrecht BT', marked: false, id: uid(), area: 'criminal' },
      { text: 'Strafrecht AT', marked: false, id: uid(), area: 'criminal' },
      { text: 'Strafrecht BT', marked: false, id: uid(), area: 'criminal' },
      { text: 'Strafrecht AT', marked: false, id: uid(), area: 'criminal' },
      { text: 'Strafrecht BT', marked: false, id: uid(), area: 'criminal' },
      { text: 'Strafprozessrecht', marked: false, id: uid(), area: 'criminal' }
    ]
  }

  fillBookmarkIcon = id => {
    const { topics } = this.state
    const index = topics.findIndex(text => text.id === id)
    const topic = topics[index]

    this.setState({
      topics: [
        ...topics.slice(0, index),
        { ...topic, marked: !topic.marked },
        ...topics.slice(index + 1)
      ]
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/private"
            render={() => (
              <SubPage
                topics={this.state.topics.filter(
                  topic => topic.area === 'private'
                )}
                bookmark={this.fillBookmarkIcon}
              />
            )}
          />
          <Route
            path="/public"
            render={() => (
              <SubPage
                topics={this.state.topics.filter(
                  topic => topic.area === 'public'
                )}
                bookmark={this.fillBookmarkIcon}
              />
            )}
          />
          <Route
            path="/criminal"
            render={() => (
              <SubPage
                topics={this.state.topics.filter(
                  topic => topic.area === 'criminal'
                )}
                bookmark={this.fillBookmarkIcon}
              />
            )}
          />
        </div>
      </Router>
    )
  }
}
