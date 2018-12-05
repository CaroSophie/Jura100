import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Progressbar from '../components/Progressbar'
import Instruction from '../components/Instruction'
import Welcome from '../components/Welcome'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: 40px 40px 2px auto 50px;

  main {
    overflow-y: scroll;
    display: block;
    background-image: url('https://images.unsplash.com/photo-1536821824982-ee7e97e7807d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
    background-size: cover;
  }

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
  background: darkgreen;
`

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Welcome />
        <Line />
        <main>
          <Progressbar percentage={this.props.showprogress} />
          <Container>
            <NavLink to="/private">
              <Card text="Zivilrecht" />
            </NavLink>
            <NavLink to="/public">
              <Card text="Öffentliches Recht" />
            </NavLink>
            <NavLink to="/criminal">
              <Card text="Strafrecht" />
            </NavLink>
            <Instruction
              handleToggleButton={this.props.onToggle}
              showHelp={this.props.showHelp}
            />
          </Container>
        </main>
        <Footer />
      </Wrapper>
    )
  }
}
