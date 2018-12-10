import React, { Component } from 'react'
import styled from 'styled-components'

const Contents = styled.div`
  color: red;
`

export default class Content extends Component {
  render() {
    return (
      <Contents>
        {this.props.content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Contents>
    )
  }
}
