import React, { Component } from 'react'
import styled from 'styled-components'

const Text = styled.ul`
  color: white;
`

export default class Instruction extends Component {
  render() {
    return (
      <Text>
        <li>Überblick über alle relevanten Lernthemen!</li>
        <li>Merke dir wichtige Lernthemen!</li>
        <li>Beobachte deinen stets wachsenden prozentualen Lernfortschritt!</li>
      </Text>
    )
  }
}
