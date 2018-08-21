import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Menu from '../components/menu'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import anime from 'animejs'
import {PageHeader} from 'react-bootstrap'
//
// <PageHeader
//   style={{
//     margin: '0 auto',
//     marginBottom: '0',
//     padding: '15px',
//     backgroundColor: '#fffff3'
//   }}
//   >
//   Shaun Seidman
//   <br />
// <small>Full Stack Developer</small>
// </PageHeader>


const Layout = ({children, data}) => (<div>
  <Helmet title={data.site.siteMetadata.title} meta={[
      {
        name: 'description',
        content: 'This is my blog'
      }, {
        name: 'keywords',
        content: 'Gatsby, React, Blog'
      }
    ]}/>
  <Header />
  <Menu/>
  <div style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0
    }}>
    {children()}
  </div>
</div>)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql `
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
