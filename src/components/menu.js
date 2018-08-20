import React from 'react';
import Link from 'gatsby-link'



const Menu  = (props) => {
  return (
    <div style={{
        background:'#f4f4f4',
        paddingTop:'10px',
      }}>
      <ul style={{
          listStyle:'none',
          display: 'flex',
          justifyContent: 'space-evenly'
        }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </div>
  );
}

export default Menu
