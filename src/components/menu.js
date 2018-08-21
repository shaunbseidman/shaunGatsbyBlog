
import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
// import './menu.css'
import Link from 'gatsby-link'

const Menu = (props) => {
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
        <NavItem eventKey={2} componentClass={Link} href='/' to='/projects'>
          Projects I'm Working On
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="http://www.shaunseidman.com">
          My Personal Website
        </NavItem>
        <NavItem eventKey={2} href="https://github.com/shaunbseidman">
          GitHub
        </NavItem>
        <NavItem eventKey={3} href="https://www.linkedin.com/in/shaun-seidman/">
          LinkedIn
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Menu
