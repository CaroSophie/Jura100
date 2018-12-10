import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import img from '../images/background.jpeg'

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px auto 50px;

  main {
    overflow-y: scroll;
    display: block;
    background-size: cover;
    background: url(${img});
  }
`

export default class Contentpage extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
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
