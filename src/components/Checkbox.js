import React, { Component } from 'react'
import styled from 'styled-components'

const Checkbutton = styled.input`
  width: 30px;
  height: 30px;
`

export default class Checkbox extends Component {
  render() {
    return (
      <Checkbutton
        type="checkbox"
        onClick={this.props.onToggle}
        className={this.props.done ? 'done' : ''}
      />
    )
  }
}
