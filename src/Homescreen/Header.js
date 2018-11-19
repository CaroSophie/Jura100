import React, { Component } from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: white;
  background: darkslateblue;
  margin: 0;
  height: 4em;
  display: grid;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  text-transform: uppercase;
`

export default class Home extends Component {
  render() {
    return <Heading>Jura 100</Heading>
  }
}
