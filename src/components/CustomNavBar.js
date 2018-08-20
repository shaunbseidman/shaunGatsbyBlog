import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import './CustomNavbar.css'
import Link from 'gatsby-link'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} componentClass={Link} href='/' to='/'>
            Home
          </NavItem>
          <NavItem eventKey={2} componentClass={Link} href='/' to='/about'>
            About
          </NavItem>
          <NavItem eventKey={2} componentClass={Link} href='/' to='/blog'>
            Blog
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="http://www.shaunseidman.com">
            shaunseidman.com
          </NavItem>
          <NavItem eventKey={2} href="https://github.com/shaunbseidman">
            GitHub
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>)
  }
}
