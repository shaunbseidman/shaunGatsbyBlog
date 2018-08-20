import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

import './about.css';

const AboutPage = (props) => {
  return (
    <div className = 'aboutInfo'>
      <h2>About</h2>
      <Row>
        <Col xs={12} sm={4} className="sidebar-section">
          <Image src="./assets/images/shaun2.jpg" rounded/>
          <img src={"assets/shaun2.jpg"} />
          <p>I'm Shaun. I am a junior developer based in Denver, Colorado.</p>
          <p>I have recently graduated from Galvanize's six month Web Development Immersive course. The intent with creating this blogspace in addition to my personal website, <a href="http://www.shaunseidman.com">shaunseidman.com</a> was to have a living breathing blog where I can document my struggles finding a job.</p>
          <p>This blog was made using React and Gatsby, two technologies that are somewhat new to me</p>
        </Col>
        <Col xs={12} sm={8} className="main-section">
          <p>My current stack includes and is not limited to:
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
          </p>
        </Col>
      </Row>
  </div>);
}
export default AboutPage
