import React, { Component } from 'react'
import styled from 'styled-components'

const Progress = styled.div`
  background: lightgrey;
  border-radius: 10px 10px 10px;
  border: 5px solid white;
  color: red;
  display: grid;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  margin: 10px;
  padding: 2px;

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
