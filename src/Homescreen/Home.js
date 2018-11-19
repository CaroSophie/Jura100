import React, { Component } from 'react'
import Header from './Header'
import Cards from './Cards'
import styled from 'styled-components'

const Wrapper = styled.main`
  display: grid;
  background: whitesmoke;
`

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Cards text="Zivilrecht" />
        <Cards text="Öffentliches Recht" />
        <Cards text="Strafrecht" />
      </Wrapper>
    )
  }
}
