import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 50px 2px auto 50px;

  main {
    overflow-y: scroll;
    display: block;
  }
`

const Styledinput = styled.input`
  width: 150px;
  height: 20px;
  margin-left: 30px;
  margin-top: 15px;
  border: 1px solid grey;

  &:focus {
    outline: none;
  }
`

const Notice = styled.ul`
  background: whitesmoke;
  width: 100%;
  height: 100vh;
  color: black;
`

const Line = styled.div`
  width: 100%;
  background: lightgrey;
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

  renderNotices() {
    return this.props.noticeArray.map(this.renderSingleNotice)
  }

  renderSingleNotice = notice => (
    <li key={notice.id} onClick={() => this.props.onDelete(notice.id)}>
      {notice.text}
    </li>
  )

  render() {
    return (
      <Wrapper>
        <Header />
        <Styledinput
          placeholder="Füge eine Notiz hinzu..."
          onKeyUp={this.handleKeyUp}
        />
        <Line />
        <main>
          <Notice>{this.renderNotices()}</Notice>
        </main>
        <Footer />
      </Wrapper>
    )
  }
}
