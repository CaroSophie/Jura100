import React, { Component } from 'react'
import styled from 'styled-components'

const Overview = styled.h3`
  color: darkgreen;
  margin: 20px;
`

export default class Routeheader extends Component {
  render() {
    return (
      <Overview>
        {'> '}
        {this.props.showRoute}
      </Overview>
    )
  }
}
