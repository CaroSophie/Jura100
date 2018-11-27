import React, { Component } from 'react'
import Topic from '../components/Topic'

export default class SubPage extends Component {
  render() {
    return this.props.topics.map(topic => (
      <Topic
        text={topic.text}
        key={topic.id}
        marked={topic.marked}
        handleBookmark={() => this.props.bookmark(topic.id)}
      />
    ))
  }
}
