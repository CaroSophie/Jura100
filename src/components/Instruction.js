import React, { Component } from 'react'
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookmark,
  faInfo,
  faClipboardCheck,
  faPercentage,
  faEdit
} from '@fortawesome/free-solid-svg-icons'

library.add(faBookmark, faInfo, faClipboardCheck, faPercentage, faEdit)

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const Toggle = styled.button`
  border-radius: 50%;
  border: 2px solid grey;
  color: black;
  font-size: 1em;
  height: 60px;
  width: 60px;
  background: whitesmoke;
  opacity: 0.8;

  &:focus {
    outline: none;
  }

  &.active {
    z-index: -1;
  }
`
const Helptext = styled.div`
  color: black;
  background: white;
  border: 5px solid lightseagreen;
  margin-right: 10px;

  ul {
    list-style-type: none;
  }

  .svg-inline--fa {
    color: black;
    padding-right: 10px;
  }
`

const Closehelp = styled.button`
  color: black;
  font-weight: bold;
  background: white;
  margin-left: 45%;
  margin-bottom: 10px;

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
            <FontAwesomeIcon icon="edit" />
            Mach dir Notizen!
          </li>
          {/* <li>
            <FontAwesomeIcon icon="percentage" />
            Beobachte deinen stets wachsenden prozentualen Lernerfolg!
          </li> */}
        </ul>
        <Closehelp onClick={this.props.handleToggleButton}>X</Closehelp>
      </Helptext>
    )
  }
}
