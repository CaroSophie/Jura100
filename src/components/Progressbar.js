import React, { Component } from 'react'
import styled from 'styled-components'

const Progress = styled.div`
  background: lightgrey;
  margin: 10px;
  margin-top: 20px;
  border-radius: 10px 10px 10px;
  border: 5px solid white;
  color: red;
  display: grid;
  text-align: start;
  font-weight: bold;
  padding: 2px;
  font-size: 20px;

  &::after {
    content: '';
    display: block;
    width: ${props => props.percentage * 100}%;
    background: darkgrey;
    height: 50px;
    margin-top: 10px;
    border-radius: inherit;
  }
`
class Progressbar extends Component {
  render() {
    return (
      <Progress percentage={this.props.percentage}>
        {'Dein bisheriger Lernfortschritt: '}
        {Math.round(this.props.percentage * 100)}%
      </Progress>
    )
  }
}

export default Progressbar
