import React, { Component } from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  font-size: 1em;
  margin-left: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &.marked {
    color: red;
    font-size: 2em;
  }
`

export default class Bookmark extends Component {
  render() {
    return (
      <Icon
        onClick={this.props.handleOnClick}
        className={this.props.marked ? 'marked' : ''}
      >
        {'*'}
      </Icon>
    )
  }
}
