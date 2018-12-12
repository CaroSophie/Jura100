import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  height: 100vh;
`

const Contents = styled.div`
  background: white;
  height: 40px;
  padding: 5px;
  border: 0.5px solid lightgrey;
  opacity: 0.9;
`

export default class Content extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.content.map((item, index) => (
          <Contents key={index}>{item}</Contents>
        ))}
      </Wrapper>
    )
  }
}
