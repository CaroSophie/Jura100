import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 5px;
  background: whitesmoke;
`

export default class Content extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.content.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Wrapper>
    )
  }
}
