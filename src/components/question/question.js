import React from 'react';
import PropTypes from 'prop-types';

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
        <Col className="question-col">
          <QuestionInfo
            name={name}
            image={image}
            isQuestionAnswered={isQuestionAnswered}
          />
        </Col>
        <Col className="question-col">
          <QuestionAudio src={audio} />
        </Col>
      </Row>
    </Container>
  );
};

Question.propTypes = {
  currentQuestionData: PropTypes.array.isRequired,
  correctAnswer: PropTypes.number.isRequired,
  isQuestionAnswered: PropTypes.bool.isRequired,
};

export default Question;
