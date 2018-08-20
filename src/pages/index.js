import React from 'react'
import Link from 'gatsby-link'
import './index.css';
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap'



const IndexPage = () => (
  <div>
    <Jumbotron>
      <h1 className='indexh1'>Welcome to my blog</h1>
      <p className='indexP'>Lessons learned from an unemployed junior dev</p>
  </Jumbotron>

</div>
)

export default IndexPage
