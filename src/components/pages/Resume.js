import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Resume() {
    const onButtonClick = () => {

      fetch('Resume.pdf').then(response => {
          response.blob().then(blob => {
              const fileURL = window.URL.createObjectURL(blob);
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Resume.pdf';
              alink.click();
          })
        })
      }
  return (

    <Container>
      <h1>Resume</h1>

      <button onClick={onButtonClick} type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Downloadable Resume</button>

      <Row className='rows'>
        <Col>
          <li>JavaScript</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Insomnia</li>
        </Col>
        <Col>
          <li>MySQL</li>
          <li>MVC</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>Object-oriented programming</li>
        </Col>
      </Row>
    </Container>
  );
  };
