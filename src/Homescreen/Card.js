import React, { Component } from 'react'
import styled from 'styled-components'

const Stylecards = styled.section`
  height: 150px;
  background: lightgrey;
  color: black;
  margin: 30px;
  display: grid;
  align-items: center;
  text-align: center;
  box-shadow: 2px 2px 5px black;
  font-size: 3em;
`

export default class Cards extends Component {
  render() {
    return (
      <main>
        <Stylecards>{this.props.text}</Stylecards>
      </main>
    )
  }
}
