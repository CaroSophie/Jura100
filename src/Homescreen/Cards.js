import React, { Component } from 'react'
import styled from 'styled-components'

const Stylecards = styled.section`
  height: 150px;
  background: whitesmoke;
  color: black;
  margin: 50px;
  display: grid;
  justify-content: center;
  align-items: center;
  border: 2px solid darkslateblue;
`

export default class Cards extends Component {
  render() {
    return (
      <main>
        <Stylecards>Zivilrecht</Stylecards>
        <Stylecards>Öffentliches Recht</Stylecards>
        <Stylecards>Strafrecht</Stylecards>
        <Stylecards>Zivilrecht</Stylecards>
        <Stylecards>Öffentliches Recht</Stylecards>
        <Stylecards>Strafrecht</Stylecards>
      </main>
    )
  }
}
