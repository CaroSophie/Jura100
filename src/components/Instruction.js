import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Toggle = styled.button`
  color: white;
  background: green;
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
  font-weight: bold;
  background: white;
  border: 5px solid black;
`

const Closehelp = styled.button`
  color: white;
  font-weight: bold;
  background: grey;

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
          HELP
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
            Verschaffe dir einen Überblick über alle relevanten Lernthemen!
          </li>
          <li>
            Markiere dir relevante Themen und solche, die du dir noch intensiv
            anschauen musst.
          </li>
          <li>
            Hake gelernte Themen ab und speicher sie dir in einer extra Seite!
          </li>
          <li>
            Beobachte deinen stets wachsenden prozentualen Lernerfolg!{' '}
            <Closehelp onClick={this.props.handleToggleButton}>X</Closehelp>
          </li>
        </ol>
      </Helptext>
    )
  }
}
