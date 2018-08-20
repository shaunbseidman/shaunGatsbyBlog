import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import './customnavbar.css'
import Link from 'gatsby-link'

const CustomNavbar  = (props) => {
  return (
    <Navbar staticTop default collapseOnSelect>
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
          My Personal Website
        </NavItem>
        <NavItem eventKey={2} href="https://github.com/shaunbseidman">
          GitHub
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default CustomNavbar
