import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Progressbar from '../components/Progressbar'
import Welcome from '../components/Welcome'
import Instruction from '../components/Instruction'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.main`
  background: linear-gradient(0.4turn, #ff8100, #ffe213);
  height: 100vh;

  a:any-link {
    text-decoration: none;
  }
`
const Container = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`
const Line = styled.div`
  width: 100%;
  height: 2px;
  background: white;
`

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Line />
        <Welcome />
        <Progressbar percentage={this.props.showprogress} />
        <Container>
          <NavLink to="/private">
            <Card text="Zivilrecht" />
          </NavLink>{' '}
          <NavLink to="/public">
            <Card text="Öffentliches Recht" />
          </NavLink>
          <NavLink to="/criminal">
            <Card text="Strafrecht" />
          </NavLink>
        </Container>
        <Instruction
          handleToggleButton={this.props.onToggle}
          showHelp={this.props.showHelp}
        />
        <Footer />
      </Wrapper>
    )
  }
}
