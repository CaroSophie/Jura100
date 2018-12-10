import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClipboardCheck,
  faBookmark,
  faEdit
} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faClipboardCheck, faBookmark, faEdit)

const Navbar = styled.footer`
  /* background: #595959; */
  background: lightseagreen;
  /* position: fixed;
  bottom: 0; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  color: white;

  a:any-link {
    text-decoration: none;
    padding: 5px;
    margin: 5px;
  }
  .svg-inline--fa {
    color: white;
    height: 2em;
  }
  .svg-inline--fa.fa-w-12 {
    width: 1em;
  }
  .svg-inline--fa.fa-w-14 {
    width: 1em;
  }
  .svg-inline--fa.fa-w-18 {
    width: 1.4em;
  }
`

export default class Footer extends Component {
  render() {
    return (
      <Navbar>
        <NavLink to="/">
          <FontAwesomeIcon icon="bars" />
        </NavLink>
        <NavLink to="/notices">
          <FontAwesomeIcon icon="edit" />
        </NavLink>
        <NavLink to="/checked">
          <FontAwesomeIcon icon="clipboard-check" />
        </NavLink>
        <NavLink to="/marked">
          <FontAwesomeIcon icon="bookmark" />
        </NavLink>
      </Navbar>
    )
  }
}
