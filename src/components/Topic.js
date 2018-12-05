import React, { Component } from 'react'
import styled from 'styled-components'
import Bookmark from './Bookmark'
import Checkbox from './Checkbox'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.section`
  padding: 5px;
`

const Topics = styled.div`
  background: whitesmoke;
  color: black;
  height: 50px;
  text-align: start;
  display: flex;
  align-items: center;
  padding: 5px;
  box-shadow: 2px 2px 2px grey;
  /* margin: 5px; */
  /* font-size: 1em; */
  border-radius: 10px;
  /* font-weight: bold; */

  a:any-link {
    text-decoration: none;
    color: black;
  }
`

export default class Topic extends Component {
  render() {
    const { handleBookmark, marked, done, handleToggle, hideIcons } = this.props
    return (
      <Wrapper>
        <Topics>
          {hideIcons ? <Checkbox done={done} onToggle={handleToggle} /> : null}
          <NavLink to="/content">{this.props.text}</NavLink>
          {hideIcons ? (
            <Bookmark marked={marked} handleOnClick={handleBookmark} />
          ) : null}
        </Topics>
      </Wrapper>
    )
  }
}
