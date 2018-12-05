import React, { Component } from 'react'
import styled from 'styled-components'

import Topic from '../components/Topic'
import Footer from '../components/Footer'
import Overview from '../components/Overview'
import Header from '../components/Header'

const Wrapper = styled.section`
  background: whitesmoke;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px 60px 2px auto 50px;

  main {
    overflow-y: scroll;
    display: block;
    background-size: cover;
    background-image: url('https://images.unsplash.com/photo-1536821824982-ee7e97e7807d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  }
`
const Line = styled.div`
  width: 100%;
  height: 2px;
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
