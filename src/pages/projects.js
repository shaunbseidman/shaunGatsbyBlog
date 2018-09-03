import React from 'react';
import burger from './images/burger.png'
import calc from './images/calc.png'
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap'

const Projects = (props) => {
  return (<div>
    <h1
      style={{
        fontWeight: '200'
      }}
      >These are a few small projects that I've been working on to keep my brain sharp</h1>
    <hr />
    <br/>
      <Jumbotron style={{
          padding: "10px"
        }}>
        <Col xs={5} md={2}>
          <Image src={calc} thumbnail="thumbnail"/>
        </Col>
        <h1
          style={{
            display: 'flex',
            flexDirection: 'row',
            fontWeight: '290'
          }}
          >To Do or Not To Do</h1>
        <p>
          A full stack CRUD app built with PHP, Laravel, MySql and MAMP. This projected was created in three days having no previous experience in PHP. LOOK WHAT I CAN DO.
        </p>
        <p>
          <Button bsStyle="primary" href="https://github.com/shaunbseidman/reactcalc">GitHub</Button>
        </p>
      </Jumbotron>
    <Jumbotron style={{
        padding: "10px",
      }}>
      <Col xs={7} md={5}>
        <Image src={burger} thumbnail="thumbnail"/>
      </Col>
      <h1
        style={{
          display: 'flex',
          flexDirection: 'row',
          fontWeight: '290'
        }}
        >Shaun's Better Burger Builder</h1>
      <p style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
        A dynamic 'add to your order' burger web app built with React and Redux. Not vegan friendly
      </p>
      <p style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
        <Button bsStyle="primary" href="https://github.com/shaunbseidman/betterburgerbuilder">GitHub</Button>
      </p>
    </Jumbotron>
    <Jumbotron style={{
        padding: "10px"
      }}>
      <Col xs={5} md={2}>
        <Image src={calc} thumbnail="thumbnail"/>
      </Col>
      <h1
        style={{
          display: 'flex',
          flexDirection: 'row',
          fontWeight: '290'
        }}
        >iPhone Calculator Clone</h1>
      <p>
        Built with React, an iPhone calculator clone able to solve math problems. How meta.
      </p>
      <p>
        <Button bsStyle="primary" href="https://github.com/shaunbseidman/reactcalc">GitHub</Button>
      </p>
    </Jumbotron>
  </div>)
}

export default Projects
