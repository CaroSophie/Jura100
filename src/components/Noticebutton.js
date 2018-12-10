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
  box-shadow: 2px 2px 2px grey;
`

export default class Noticebutton extends Component {
  render() {
    return (
      <Wrapper>
        <Click>Mach dir Notizen!</Click>
      </Wrapper>
    )
  }
}
