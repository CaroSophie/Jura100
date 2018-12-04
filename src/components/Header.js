import React, { Component } from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: white;
  background: lightseagreen;
  margin: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  text-transform: uppercase;
  font-size: 1em;
`

export default class Header extends Component {
  render() {
    return <Heading>§§ Jura 100 </Heading>
  }
}
