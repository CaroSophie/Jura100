import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: lightgrey;
  color: black;

  height: 50px;
  display: grid;
  justify-content: center;
  text-align: center;
  align-items: center;
`

const Bodystyle = styled.section`
  height: 100vh;
  background: whitesmoke;
  display: grid;
  grid-gap: 20px;
  padding: 20px;
`

export default class Zivilrecht extends Component {
  render() {
    return (
      <Bodystyle>
        <Wrapper>Arbeitsrecht</Wrapper>
        <Wrapper>Erbrecht</Wrapper>
        <Wrapper>Familienrecht</Wrapper>
        <Wrapper>Vertragsrecht</Wrapper>
        <Wrapper>Schuldrecht</Wrapper>
        <Wrapper>Sachenrecht</Wrapper>
        <Wrapper>Arbeitsrecht</Wrapper>
        <Wrapper>Arbeitsrecht</Wrapper>
        <Wrapper>Arbeitsrecht</Wrapper>
      </Bodystyle>
    )
  }
}
