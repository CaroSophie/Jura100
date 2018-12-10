import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import img from '../images/holzhammer.jpg'

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 50px 2px auto 50px;

  main {
    overflow-y: scroll;
    display: block;
    /* background-size: cover;
    background: url(${img}); */
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

const Notice = styled.div`
  height: 100vh;
  color: black;
`

const List = styled.div`
  border: 1px solid lightgrey;
  margin: 10px;
  padding: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  opacity: 0.9;
`

const Deletebutton = styled.button`
  color: black;
  background: white;

  &:focus {
    outline: none;
  }
`

const Line = styled.div`
  width: 100%;
  background: darkgreen;
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
    <List key={notice.id} onClick={() => this.props.onDelete(notice.id)}>
      {notice.text} <Deletebutton>x</Deletebutton>
    </List>
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
