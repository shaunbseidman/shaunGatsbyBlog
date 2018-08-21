import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import shaun from './images/shaun2.jpg'
import './about.css';

const AboutPage = (props) => {
  return (<div className='aboutInfo'>
    <h1>About</h1>
    <Row>
      <Col xs={6} sm={4} className="sidebar-section">
        <Image src={shaun} rounded="rounded"/>
        <p>I'm Shaun. I am a junior developer based in Denver, Colorado.</p>
        <p>I have recently graduated from Galvanize's six month Web Development Immersive course. The intent with creating this blogspace in addition to my personal website: <a href="http://www.shaunseidman.com">shaunseidman.com</a> was to have a living breathing blog where I can document my struggles finding a job.</p>
        <p>This blog was made using React and Gatsby, two technologies that are somewhat new to me</p>
      </Col>
      <Col xs={6} sm={4} className="main-section">
        <strong><p>My current stack includes: </p></strong>
        <hr />
          <ul>
            <li>React</li>
            <li>Vue.Js</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Express</li>
            <li>Knex</li>
            <li>Cypress</li>
            <li>Git</li>
            <li>Python</li>
            <li>Agile</li>
            <li>Swift</li>
            <li>Node.Js</li>
            <li>PostgreSQL</li>
          </ul>
      </Col>
      <Col xs={6} sm={4} className="main-section">
        <strong><p>Feel free to contact me at:</p></strong>
        <hr />
          <ul>
            <li>949.599.4271</li>
            <li>shaunseidman@gmail.com</li>
            <li><a href="http://www.shaunseidman.com">shaunseidman.com</a></li>
          </ul>
      </Col>
    </Row>
  </div>);
}
export default AboutPage
