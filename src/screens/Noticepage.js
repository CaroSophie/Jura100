import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import img from '../images/background.jpeg'

const Wrapper = styled.section`
  background: whitesmoke;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px auto 50px;

  main {
    overflow-y: scroll;
    display: block;
    background-size: cover;
    background: url(${img});
  }
`

const Styledinput = styled.input`
  width: 100px;
  height: 20px;

  &:focus {
    outline: none;
  }
`

export default class Noticepage extends Component {
  handleKeyUp = event => {
    const input = event.target
    if (event.key === 'Enter') {
      this.props.onEnter(input.value)
      input.value = ''
      input.focus()
    }
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <main>
          <Styledinput placeholder="Add a notice" onKeyUp={this.handleKeyUp} />
        </main>
        <Footer />
      </Wrapper>
    )
  }
}
