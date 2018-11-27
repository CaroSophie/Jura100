import React, { Component } from 'react'
import styled from 'styled-components'
import Bookmark from './Bookmark'

const Wrapper = styled.section`
  background: whitesmoke;
  padding: 15px;
`

const Topics = styled.div`
  background: lightgrey;
  color: black;
  height: 50px;
  text-align: start;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 2px 2px 5px black;
`

export default class Topic extends Component {
  render() {
    const { handleBookmark, marked } = this.props
    return (
      <Wrapper>
        <Topics>
          {this.props.text}
          <Bookmark marked={marked} handleOnClick={handleBookmark} />
        </Topics>
      </Wrapper>
    )
  }
}
