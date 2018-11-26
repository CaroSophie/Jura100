import React, { Component } from 'react'
import styled from 'styled-components'
import Bookmark from './Bookmark'

const Wrapper = styled.section`
  background: whitesmoke;
  padding: 15px;
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
          {this.props.text}
          <Bookmark />
        </Categories>
      </Wrapper>
    )
  }
}
