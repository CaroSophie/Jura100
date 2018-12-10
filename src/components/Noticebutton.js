import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Click = styled.button`
  height: 50px;
  width: 150px;
  background: whitesmoke;
  margin-top: 50px;
`

export default class Noticebutton extends Component {
  render() {
    return (
      <Wrapper>
        <Click>Make notices</Click>
      </Wrapper>
    )
  }
}
