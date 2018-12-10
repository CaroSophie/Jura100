import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Contentoverview from '../components/Contentoverview'
import img from '../images/holzhammer.jpg'

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 60px 2px auto 50px;

  main {
    overflow-y: scroll;
    display: block;
    /* background-size: cover;
    background: url(${img}); */
    background: whitesmoke;
  }
`

const Line = styled.div`
  width: 100%;
  background: darkgreen;
`

export default class Contentpage extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Contentoverview />
        <Line />
        <main>
          {this.props.topics.map(topic => (
            <Content content={topic.content} key={topic.id} />
          ))}
        </main>
        <Footer />
      </Wrapper>
    )
  }
}
