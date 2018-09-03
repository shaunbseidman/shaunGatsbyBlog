import React from 'react'
import Link from 'gatsby-link'
import './index.css';
import Anime from 'react-anime';
import Typed from 'react-typed';
import posed from "react-pose";
import pose from 'popmotion-pose'

import Particles from 'react-particles-js';
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap'
//



// const circleDiv = document.querySelector('.test')
// const DraggableCircle = posed.circle({
//   draggable: 'x',
//   dragBounds: { left: 0, right: 100 }
// })
//
//
// const Circle = posed.div({
//   attention: {
//     scale: 1.3,
//     transition: {
//       type: 'spring',
//       stiffness: 200,
//       damping: 0
//     }
//   }
// })
//
// const buttonWorks = () =>{
//   console.log(DraggableCircle)
// }

// <div
//   style={{
//     width: '100px',
//     height: '100px',
//     background: 'red',
//     transformOrigin: '50% 50%',
//   }}
//   className='test'>
// </div>
//
// <button onClick={buttonWorks}></button>


const IndexPage=(props)=>{
  return(
    <div>
      <Typed
        style={{
        }}
        strings={['Welcome to my blog']} typeSpeed={40}/>
      <br/>
      <Typed strings={['Lessons learned from a junior developer']} typeSpeed={90}/>
   </div>
  )
}

export default IndexPage
