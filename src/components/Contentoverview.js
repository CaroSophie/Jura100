import React, { Component } from 'react'
import styled from 'styled-components'

const Overview = styled.h3`
  color: darkgreen;
  margin: 20px;
`

export default class Contentoverview extends Component {
  render() {
    return <Overview>Übersicht über relevante Lernthemen</Overview>
  }
}
