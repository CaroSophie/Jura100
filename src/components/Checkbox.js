import React, { Component } from 'react'
import styled from 'styled-components'

const Checkbutton = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  margin-left: 10px;
  &.done {
    width: 30px;
    height: 30px;
  }
`

export default class Checkbox extends Component {
  render() {
    return (
      <Checkbutton
        type="checkbox"
        onClick={this.props.onToggle}
        defaultChecked={this.props.done ? true : false}
        className={this.props.done ? 'done' : ''}
      />
    )
  }
}
