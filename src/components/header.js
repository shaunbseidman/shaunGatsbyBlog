import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#333',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '300'
          }}
        >
        Shaun Seidman
        <br />
        <small
          style={{
            color:'#E8DADA',
            fontWeight: '210'
          }}
          >Full Stack Developer</small>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
