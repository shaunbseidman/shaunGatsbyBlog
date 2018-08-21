
import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import './menu.css'
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
        <NavItem className='navItem' eventKey={1} componentClass={Link} href='/' to='/'>
          Home
        </NavItem>
        <NavItem className='navItem' eventKey={2} componentClass={Link} href='/' to='/about'>
          About
        </NavItem>
        <NavItem className='navItem' eventKey={2} componentClass={Link} href='/' to='/projects'>
          Projects
        </NavItem>
        <NavItem className='navItem' eventKey={2} componentClass={Link} href='/' to='/blog'>
          Blog
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem className='navItem' eventKey={1} href="http://www.shaunseidman.com">
          My Personal Website
        </NavItem>
        <NavItem className='navItem' eventKey={2} href="https://github.com/shaunbseidman">
          GitHub
        </NavItem>
        <NavItem className='navItem' eventKey={3} href="https://www.linkedin.com/in/shaun-seidman/">
          LinkedIn
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Menu
