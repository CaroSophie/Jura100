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
  background: linear-gradient(0.4turn, #000000, #a6aade);
  height: 100vh;

  a:any-link {
    text-decoration: none;
  }
`
const Cardcontainer = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Welcome />
        <Progressbar percentage={this.props.showprogress} />
        <Cardcontainer>
          <NavLink to="/private">
            <Card text="Zivilrecht" />
          </NavLink>{' '}
          <NavLink to="/public">
            <Card text="Öffentliches Recht" />
          </NavLink>
          <NavLink to="/criminal">
            <Card text="Strafrecht" />
          </NavLink>
        </Cardcontainer>
        <Instruction
          handleToggleButton={this.props.onToggle}
          showHelp={this.props.showHelp}
        />
        <Footer />
      </Wrapper>
    )
  }
}
