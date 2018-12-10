import React, { Component } from 'react'
import styled from 'styled-components'

import Topic from '../components/Topic'
import Footer from '../components/Footer'
import Overview from '../components/Overview'
import Header from '../components/Header'
import img from '../images/background.jpeg'

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 60px 2px auto 50px;

  main {
    overflow-y: scroll;
    display: block;
    background-size: cover;
    background: url(${img});
  }
`
const Line = styled.div`
  width: 100%;
  background: darkgreen;
`

export default class SubPage extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Overview showRoute={this.props.getRoute} />
        <Line />
        <main>
          {this.props.topics.map(topic => (
            <Topic
              key={topic.id}
              text={topic.text}
              id={topic.id}
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
