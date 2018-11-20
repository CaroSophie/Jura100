import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  height: 100vh;
  background: whitesmoke;
  display: grid;
  grid-gap: 20px;
  padding: 20px;
`
const Categories = styled.div`
  background: lightgrey;
  color: black;
  height: 50px;
  text-align: start;
  display: grid;
  align-items: center;
  padding: 10px;
  box-shadow: 2px 2px 5px black;
`

export default class Criminal extends Component {
  render() {
    return (
      <Wrapper>
        <Categories>Strafrecht</Categories>
        <Categories>Strafprozessrecht</Categories>
        <Categories>Familienrecht</Categories>
        <Categories>Vertragsrecht</Categories>
        <Categories>Schuldrecht</Categories>
        <Categories>Sachenrecht</Categories>
        <Categories>Verwaltungsrecht</Categories>
        <Categories>Verwaltungsrecht</Categories>
        <Categories>Verwaltungsrecht</Categories>
      </Wrapper>
    )
  }
}
