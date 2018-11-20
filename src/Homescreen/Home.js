import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.main`
  background: whitesmoke;

  a:any-link {
    text-decoration: none;
  }
`

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <NavLink to="/Private">
          <Card text="Zivilrecht" />
        </NavLink>
        <NavLink to="/Public">
          <Card text="Öffentliches Recht" />
        </NavLink>
        <NavLink to="/Criminal">
          <Card text="Strafrecht" />
        </NavLink>
      </Wrapper>
    )
  }
}
