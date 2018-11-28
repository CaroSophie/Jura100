import React, { Component } from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  border: 2px solid black;
  font-size: 2em;
  margin-left: auto;
  width: 40px;
  display: grid;
  justify-content: center;
  align-items: center;

  &.marked {
    background: red;
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
