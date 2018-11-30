import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = styled.footer`
  background: #595959;
  margin: 0;
  position: fixed;
  bottom: 0;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  a:any-link {
    text-decoration: none;
  }
`

const Menu = styled.div`
  width: 30px;
  height: 30px;
  background: white;
  margin: 5px;
  display: grid;
  justify-content: center;
  align-items: center;
`

export default class Footer extends Component {
  render() {
    return (
      <Navbar>
        <NavLink to="/checked">
          <Menu>{'!'}</Menu>
        </NavLink>
        <NavLink to="/marked">
          <Menu>{'*'}</Menu>
        </NavLink>
      </Navbar>
    )
  }
}
