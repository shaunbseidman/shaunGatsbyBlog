import React from 'react'
import Link from 'gatsby-link'
import './index.css';
import Anime from 'react-anime';
import Particles from 'react-particles-js';

import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap'

// <Particles className='particles' params={{
//     particles: {
//       line_linked: {
//         shadow: {
//           enable: true,
//           color: "red",
//           blur: 5
//         }
//       }
//     }
//   }} style={{
//     backgroundColor: 'green',
//     position: 'absolute',
//     width: '100%',
//     height: '100&',
//     zIndex: '99999',
//   }}/>

const IndexPage = () => (<div>




  <Jumbotron>
    <h1 className='indexh1'>Welcome to my blog</h1>
    <p className='indexP'>Lessons learned from a junior dev</p>
  </Jumbotron>



</div>)

export default IndexPage
