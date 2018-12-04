import React, { Component } from 'react'
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookmark,
  faInfo,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons'

library.add(faBookmark, faInfo, faClipboardCheck)

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`

const Toggle = styled.button`
  color: black;
  font-size: 1em;
  height: 100px;
  width: 100px;
  border-radius: 50%;

  &:focus {
    outline: none;
  }

  &.active {
    z-index: -1;
  }
`
const Helptext = styled.div`
  color: red;
  background: whitesmoke;
  border: 5px solid black;

  .svg-inline--fa {
    color: black;
    height: 1em;
  }
`

const Closehelp = styled.button`
  color: grey;
  font-weight: bold;
  border: 2px solid grey;
  background: white;

  &:focus {
    outline: none;
  }
`

export default class Instruction extends Component {
  render() {
    return (
      <Wrapper>
        <Toggle
          onClick={this.props.handleToggleButton}
          className={this.props.showHelp ? 'active' : ''}
        >
          <FontAwesomeIcon icon="info" />
        </Toggle>
        {this.props.showHelp ? this.renderHelp() : null}
      </Wrapper>
    )
  }

  renderHelp() {
    return (
      <Helptext>
        <ol>
          <li>
            Markiere dir wichtige Lernthemen!
            <FontAwesomeIcon icon="bookmark" />
          </li>
          <li>
            Speicher schon gelernte Themen!
            <FontAwesomeIcon icon="clipboard-check" />
          </li>
          <li>
            Beobachte deinen stets wachsenden prozentualen Lernerfolg!
            <Closehelp onClick={this.props.handleToggleButton}>X</Closehelp>
          </li>
        </ol>
      </Helptext>
    )
  }
}
