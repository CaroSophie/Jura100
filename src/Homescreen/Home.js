import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'
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
        <Card text="Zivilrecht" />
        <Card text="Öffentliches Recht" />
        <Card text="Strafrecht" />
      </Wrapper>
    )
  }
}
