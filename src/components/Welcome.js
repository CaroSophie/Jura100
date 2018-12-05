import React, { Component } from 'react'
import styled from 'styled-components'

const Hello = styled.div`
  text-align: center;
  color: darkgreen;
`

export default class Welcome extends Component {
  render() {
    return (
      <Hello>Willkommen User! Mit 100% ins Staatsexamen, los gehts'!</Hello>
    )
  }
}
