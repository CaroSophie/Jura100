import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  /* padding: 5px; */
  height: 100vh;
`

const Contents = styled.div`
  margin: 10px;
  background: white;
  opacity: 0.9;
  color: black;
  height: 50px;
  text-align: start;
  display: flex;
  align-items: center;
  padding: 5px;
  box-shadow: 2px 2px 2px grey;
  border-radius: 10px;
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
