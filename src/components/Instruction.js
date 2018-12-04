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
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: center;
  padding-top: 30px;
  width: 100%;
`

const Toggle = styled.button`
  border-radius: 50%;
  border: 2px solid lightseagreen;
  color: black;
  font-size: 1em;
  height: 80px;
  width: 80px;

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

  ul {
    list-style-type: none;
  }

  .svg-inline--fa {
    color: black;
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
        <ul>
          <li>
            <FontAwesomeIcon icon="bookmark" />
            Markiere dir wichtige Lernthemen!
          </li>
          <li>
            <FontAwesomeIcon icon="clipboard-check" />
            Speicher schon gelernte Themen ab!
          </li>
          <li>
            Beobachte deinen stets wachsenden prozentualen Lernerfolg!
            <Closehelp onClick={this.props.handleToggleButton}>X</Closehelp>
          </li>
        </ul>
      </Helptext>
    )
  }
}
