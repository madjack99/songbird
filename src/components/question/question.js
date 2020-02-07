import React from 'react';

import QuestionAudio from '../question-audio';
import QuestionInfo from '../question-info';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './question.css';

const Question = ({
  currentQuestionData,
  correctAnswer,
  isQuestionAnswered,
}) => {
  const { audio, name, image } = currentQuestionData[correctAnswer];

  return (
    <Container className="question">
      <Row>
        <Col>
          <QuestionInfo
            name={name}
            image={image}
            isQuestionAnswered={isQuestionAnswered}
          />
        </Col>
        <Col>
          <QuestionAudio src={audio} />
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
