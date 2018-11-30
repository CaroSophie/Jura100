import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.main`
  background: lightgrey;
  height: 100vh;

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
        <Footer />
      </Wrapper>
    )
  }
}
