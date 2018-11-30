import React, { Component } from 'react'
import Topic from '../components/Topic'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Wrapper = styled.section`
  min-height: 100vh;
`

export default class SubPage extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.topics.map(topic => (
          <Topic
            text={topic.text}
            key={topic.id}
            marked={topic.marked}
            done={topic.done}
            handleBookmark={() => this.props.bookmark(topic.id)}
            handleToggle={() => this.props.checked(topic.id)}
          />
        ))}
        <Footer />
      </Wrapper>
    )
  }
}
