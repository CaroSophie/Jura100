import React, { Component } from 'react'
import styled from 'styled-components'

const Checkbutton = styled.input`
  width: 50px;
  height: 50px;
`

export default class Checkbox extends Component {
  render() {
    return <Checkbutton type="checkbox" />
  }
}
