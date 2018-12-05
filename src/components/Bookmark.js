import React, { Component } from 'react'
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

library.add(faBookmark)

const Icon = styled.div`
  margin-left: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  color: grey;

  &.marked {
    color: darkgreen;
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
        <FontAwesomeIcon icon="bookmark" />
      </Icon>
    )
  }
}
