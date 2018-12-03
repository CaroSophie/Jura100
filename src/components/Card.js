import React, { Component } from 'react'
import styled from 'styled-components'

const Stylecards = styled.div`
  height: 80px;
  color: black;
  margin: 10px;
  display: grid;
  align-items: center;
  text-align: center;
  box-shadow: 2px 2px 2px black;
  border-radius: 20px;
  border: 2px solid black;
`

export default class Cards extends Component {
  render() {
    return <Stylecards>{this.props.text}</Stylecards>
  }
}
