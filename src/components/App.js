import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uid from 'uid'

import Home from '../screens/Home'
import SubPage from '../screens/SubPage'
import Contentpage from '../screens/Contentpage'
import Noticepage from '../screens/Noticepage'
import Defaulttopics from '../data/Defaulttopics'

export default class App extends Component {
  state = {
    topics: this.load(),
    showHelp: false,
    notices: this.loadNotices()
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

  toggleDone = id => {
    const { topics } = this.state
    const index = topics.findIndex(done => done.id === id)
    const toggleDone = [
      ...topics.slice(0, index),
      { ...topics[index], done: !topics[index].done },
      ...topics.slice(index + 1)
    ]

    this.setState({
      topics: toggleDone
    })
  }

  showProgress() {
    const { topics } = this.state
    const doneTopics = topics.filter(t => t.done)
    return doneTopics.length / topics.length
  }

  expandInstruction = () => {
    this.setState({
      showHelp: !this.state.showHelp
    })
  }

  addNotice = text => {
    this.setState({
      notices: [{ text, id: uid() }, ...this.state.notices]
    })
  }

  deleteNotice = id => {
    const { notices } = this.state
    const index = notices.findIndex(notice => notice.id === id)

    this.setState({
      notices: [...notices.slice(0, index), ...notices.slice(index + 1)]
    })
  }

  render() {
    this.save()
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                showprogress={this.showProgress()}
                onToggle={this.expandInstruction}
                showHelp={this.state.showHelp}
              />
            )}
          />
          <Route
            path="/private"
            render={() => (
              <SubPage
                topics={this.state.topics.filter(
                  topic => topic.area === 'private'
                )}
                bookmark={this.fillBookmarkIcon}
                checked={this.toggleDone}
                handleHiding={true}
                getRoute="Zivilrecht"
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
                checked={this.toggleDone}
                handleHiding={true}
                getRoute="Öffentliches Recht"
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
                checked={this.toggleDone}
                handleHiding={true}
                getRoute="Strafrecht"
              />
            )}
          />
          <Route
            path="/marked"
            render={() => (
              <SubPage
                topics={this.state.topics.filter(topic => topic.marked)}
                bookmark={this.fillBookmarkIcon}
                checked={this.toggleDone}
                handleHiding={false}
                getRoute="Wichtige Themen"
              />
            )}
          />
          <Route
            path="/checked"
            render={() => (
              <SubPage
                topics={this.state.topics.filter(topic => topic.done)}
                bookmark={this.fillBookmarkIcon}
                checked={this.toggleDone}
                handleHiding={false}
                getRoute="Gelernte Themen"
              />
            )}
          />
          <Route
            path="/content/:id"
            render={({ match }) => (
              <Contentpage
                topics={this.state.topics.filter(
                  topic => topic.id === match.params.id
                )}
              />
            )}
          />
          <Route
            path="/notices"
            render={() => (
              <Noticepage
                onEnter={this.addNotice}
                noticeArray={this.state.notices}
                onDelete={id => this.deleteNotice(id)}
              />
            )}
          />
        </div>
      </Router>
    )
  }
  save() {
    localStorage.setItem('jura-app-topics', JSON.stringify(this.state.topics))
    localStorage.setItem('jura-app-notices', JSON.stringify(this.state.notices))
  }

  load() {
    try {
      return (
        JSON.parse(localStorage.getItem('jura-app-topics')) || Defaulttopics
      )
    } catch (err) {
      return []
    }
  }

  loadNotices() {
    try {
      return JSON.parse(localStorage.getItem('jura-app-notices')) || []
    } catch (err) {
      return []
    }
  }
}
