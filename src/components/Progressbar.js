import React, { Component } from 'react'
import styled from 'styled-components'

const Progress = styled.div`
  background: white;
  color: black;
  display: grid;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin: 40px;
  padding: 2px;

  &::after {
    content: '';
    display: block;
    width: ${props => props.percentage * 100}%;
    background: grey;
    height: 10px;
    margin-top: 10px;
    border-radius: 30px;
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
