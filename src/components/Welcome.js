import React, { Component } from 'react'
import styled from 'styled-components'

const Welcome = styled.h2`
  color: white;
  margin: 30px;
  display: flex;
  justify-content: center;
`

export default class Profile extends Component {
  render() {
    return (
      <Welcome>Hallo User! Mit 100% ins 1. Staatsexamen, los geht's!</Welcome>
    )
  }
}
