import React, { Component } from 'react'
import styled from 'styled-components'

const Progress = styled.div`
  height: 100px;
  width: 100px;
  background: lightgrey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin: 20px;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: ${props => props.percentage * 100}%;
    background: blue;
    transition: width 0.3s ease;
  }
`
class Progressbar extends Component {
  render() {
    return <Progress percentage={this.props.percentage} />
  }
}

export default Progressbar
