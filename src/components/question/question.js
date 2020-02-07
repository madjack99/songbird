import React from 'react';

import QuestionAudio from '../question-audio';
import QuestionInfo from '../question-info';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './question.css';

const Question = () => {
  return (
    <Container className="question">
      <Row>
        <Col>
          <QuestionInfo />
        </Col>
        <Col>
          <QuestionAudio />
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
