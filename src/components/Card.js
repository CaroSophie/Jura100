import React, { Component } from 'react'
import styled from 'styled-components'

const Stylecards = styled.section`
  height: 80px;
  background: white;
  color: black;
  margin: 30px;
  display: grid;
  align-items: center;
  text-align: center;
  box-shadow: 2px 2px 2px black;
  font-size: 2em;
  border-radius: 20px;
`

export default class Cards extends Component {
  render() {
    return <Stylecards>{this.props.text}</Stylecards>
  }
}
