import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 40px auto 50px;

  main {
    overflow-y: scroll;
    display: block;
    background-image: url('https://images.unsplash.com/photo-1536821824982-ee7e97e7807d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
    background-size: cover;
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
