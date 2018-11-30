import React, { Component } from 'react'
import styled from 'styled-components'

const Navbar = styled.footer`
  background: #595959;
  height: 3em;
  margin: 0;
  position: sticky;
  bottom: 0;
  color: white;
`

export default class Footer extends Component {
  render() {
    return <Navbar />
  }
}
