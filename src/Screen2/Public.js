import React, { Component } from 'react'
import styled from 'styled-components'
import Bookmark from './Bookmark'

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
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 2px 2px 5px black;
`

export default class Public extends Component {
  render() {
    return (
      <Wrapper>
        <Categories>
          Verwaltungsrecht
          <Bookmark />
        </Categories>
        <Categories>
          Polizeirecht
          <Bookmark />
        </Categories>
        <Categories>
          Familienrecht
          <Bookmark />
        </Categories>
        <Categories>
          Vertragsrecht
          <Bookmark />
        </Categories>
        <Categories>
          Schuldrecht
          <Bookmark />
        </Categories>
        <Categories>
          Sachenrecht
          <Bookmark />
        </Categories>
        <Categories>
          Verwaltungsrecht
          <Bookmark />
        </Categories>
        <Categories>
          Verwaltungsrecht
          <Bookmark />
        </Categories>
        <Categories>
          Verwaltungsrecht
          <Bookmark />
        </Categories>
      </Wrapper>
    )
  }
}
