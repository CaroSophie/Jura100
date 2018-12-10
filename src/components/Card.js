import React, { Component } from 'react'
import styled from 'styled-components'

const Stylecards = styled.div`
  height: 80px;
  color: black;
  margin: 10px;
  display: grid;
  align-items: center;
  text-align: center;
  box-shadow: 2px 2px 2px grey;
  background: white;
  font-weight: bold;
  opacity: 0.9;
`

export default class Cards extends Component {
  render() {
    return <Stylecards>{this.props.text}</Stylecards>
  }
}
