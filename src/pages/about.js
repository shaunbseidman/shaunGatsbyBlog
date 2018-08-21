import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import shaun from './images/shaun2.jpg'
import './about.css';

const AboutPage = (props) => {
  return (<div className='aboutInfo'>
    <h1
      style={{
        fontWeight: '200'
      }}
      >About</h1>
    <Row>
      <Col xs={6} sm={4} className="sidebar-section">
        <Image src={shaun} rounded="rounded"/>
        <p>I'm Shaun. I am a full stack developer based in Denver, Colorado.</p>
        <p>The intent with creating this space in addition to my <a href="http://www.shaunseidman.com">personal website</a>, was to have a living breathing blog where I can document my experiences post-Galvanize. I hope to showcase some projects and new technologies that I have been working in as well as talk about the trials and tribulations of the job hunt. </p>
        <p>This blog was made using React and Gatsby, two technologies that are somewhat new to me</p>
      </Col>
      <Col xs={6} sm={4} className="main-section">
        <strong><p
          style={{
            fontWeight: '310'
          }}
          >My current stack includes: </p></strong>
        <hr />
        <i>
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
        </i>
      </Col>
      <Col xs={6} sm={4} className="main-section">
        <strong><p
          style={{
            fontWeight: '310'
          }}
          >Feel free to contact me at:</p></strong>
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
