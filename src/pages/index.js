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
  <Grid>
    <Jumbotron>
      <h1>Welcome to my blog</h1>
      <p>Lessons learned from a junior dev</p>
  </Jumbotron>

</Grid>
)

export default IndexPage
