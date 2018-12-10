import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import img from '../images/background.jpeg'

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 40px auto 50px;

  main {
    overflow-y: scroll;
    display: block;
    background-size: cover;
    background: url(${img});
  }
`

const Styledinput = styled.input`
  width: 150px;
  height: 20px;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
`

const Notice = styled.section`
  background: whitesmoke;
  width: 100%;
  height: 100%;
  color: black;
`

export default class Noticepage extends Component {
  handleKeyUp = event => {
    const input = event.target
    if (event.key === 'Enter') {
      this.props.onEnter(input.value)
      input.value = ''
      input.focus()
    }
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <main>
          <Styledinput
            // key={noticeArray.id}
            placeholder="Füge eine Notiz hinzu..."
            onKeyUp={this.handleKeyUp}
          />
          <Notice>{this.renderNotices()}</Notice>
        </main>
        <Footer />
      </Wrapper>
    )
  }

  renderNotices() {
    console.log(this.props.noticeArray)
    return this.props.noticeArray.map(this.renderSingleNotice)
  }

  renderSingleNotice = notice => (
    <ul>
      <li>{notice}</li>
    </ul>
  )
}
