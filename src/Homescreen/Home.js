import React, { Component } from 'react'
import Header from './Header'
import Cards from './Cards'
import styled from 'styled-components'

const Wrapper = styled.main`
  display: grid;
  background: grey;
`

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Cards />
      </Wrapper>
    )
  }
}
