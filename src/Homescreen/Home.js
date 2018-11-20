import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.main`
  display: grid;
  background: whitesmoke;
`

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <NavLink to="/Zivilrecht">
          <Card text="Zivilrecht" />
        </NavLink>
        <Card text="Öffentliches Recht" />
        <Card text="Strafrecht" />
      </Wrapper>
    )
  }
}
