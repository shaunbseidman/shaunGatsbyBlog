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
      <p>Detailing my struggle to find a job.</p>
      <p>Listen to me bitch and complain about nonsense</p>
      <small>i built this with React!</small>
  </Jumbotron>

</Grid>
)

export default IndexPage
