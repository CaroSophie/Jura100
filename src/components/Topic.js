import React, { Component } from 'react'
import styled from 'styled-components'
import Bookmark from './Bookmark'
import Checkbox from './Checkbox'

const Wrapper = styled.section`
  background: lightgrey;
  padding: 15px;
`

const Topics = styled.div`
  background: white;
  color: black;
  height: 50px;
  text-align: start;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 2px 2px 5px black;
  font-size: 1em;
`

export default class Topic extends Component {
  render() {
    const { handleBookmark, marked, done, handleToggle } = this.props
    return (
      <Wrapper>
        <Topics>
          <Checkbox done={done} onToggle={handleToggle} />
          {this.props.text}
          <Bookmark marked={marked} handleOnClick={handleBookmark} />
        </Topics>
      </Wrapper>
    )
  }
}
