import React from 'react'
import Link from 'gatsby-link'
import './index.css';
import Anime from 'react-anime';
import Typed from 'react-typed';

import Particles from 'react-particles-js';
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap'

const IndexPage = () => (<div>

  <Typed
    style={{
    }}
    strings={['Welcome to my blog']} typeSpeed={40}/>
  <br/>
    <Typed strings={['Lessons learned from a junior developer']} typeSpeed={90}/>

</div>)

export default IndexPage
