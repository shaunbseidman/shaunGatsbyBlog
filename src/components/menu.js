// import React from 'react';
// import Link from 'gatsby-link'
//
//
//
// const Menu  = (props) => {
//   return (
//     <div style={{
//         background:'#f4f4f4',
//         paddingTop:'10px',
//       }}>
//       <ul style={{
//           listStyle:'none',
//           display: 'flex',
//           justifyContent: 'space-evenly'
//         }}>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/about'>About</Link></li>
//         <li><Link to='/skills'>Skills</Link></li>
//         <li><Link to='/blog'>Blog</Link></li>
//       </ul>
//     </div>
//   );
// }
//
// export default Menu
import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import './customnavbar.css'
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

export default Menu
