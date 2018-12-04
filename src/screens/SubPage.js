import React, { Component } from 'react'
import styled from 'styled-components'

import Topic from '../components/Topic'
import Footer from '../components/Footer'
import Overview from '../components/Overview'
import Header from '../components/Header'

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 40px 40px auto 40px;
  /* min-height: 100vh; */
  background: lightgrey;
  /* overflow: scroll; */

  main {
    /* height: 100%; */
    overflow-y: scroll;
    display: block;
  }
`

export default class SubPage extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Overview showRoute={this.props.getRoute} />
        <main>
          {this.props.topics.map(topic => (
            <Topic
              text={topic.text}
              key={topic.id}
              marked={topic.marked}
              done={topic.done}
              hideIcons={this.props.handleHiding}
              handleBookmark={() => this.props.bookmark(topic.id)}
              handleToggle={() => this.props.checked(topic.id)}
            />
          ))}
        </main>
        <Footer />
      </Wrapper>
    )
  }
}
