import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClipboardCheck,
  faBookmark
} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faClipboardCheck, faBookmark)

const Navbar = styled.footer`
  background: #595959;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: white;

  a:any-link {
    text-decoration: none;
    padding: 8px;
  }
  .svg-inline--fa {
    height: 4em;
    color: white;
  }

  .svg-inline--fa.fa-w-12 {
    width: 2em;
  }
  .svg-inline--fa.fa-w-14 {
    width: 2em;
  }
`

export default class Footer extends Component {
  render() {
    return (
      <Navbar>
        <NavLink to="/">
          <FontAwesomeIcon icon="bars" />
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
