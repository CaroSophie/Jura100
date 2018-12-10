import React, { Component } from 'react'
import styled from 'styled-components'

const Overview = styled.h3`
  color: darkgreen;
  margin: 20px;
  font-size: 1em;
`

export default class Contentoverview extends Component {
  render() {
    return <Overview>Einteilung der Unterthemen nach Gesetzen</Overview>
  }
}
