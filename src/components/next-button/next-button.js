import React from 'react';
import PropTypes from 'prop-types';

import { generateRandomAnswer } from '../../utils';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NextButton = ({
  isQuestionAnswered,
  currentQuestion,
  setCurrentQuestion,
  setIsQuestionAnswered,
  setCorrectAnswer,
  setSelectedAnswer,
  totalScore,
  setTotalScore,
  setCurrentScore,
  currentScore,
  children,
}) => {
  const updateCurrentQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setIsQuestionAnswered(false);
    setCorrectAnswer(generateRandomAnswer());
    setTotalScore(totalScore + currentScore);
    setCurrentScore(5);
  };

  return (
    <Container>
      <Button
        variant="primary"
        size="lg"
        block
        disabled={!isQuestionAnswered}
        onClick={updateCurrentQuestion}
        className="mt-4"
      >
        {children}
      </Button>
    </Container>
  );
};

NextButton.propTypes = {
  isQuestionAnswered: PropTypes.bool,
  currentQuestion: PropTypes.number,
  setCurrentQuestion: PropTypes.func,
  setIsQuestionAnswered: PropTypes.func,
  setCorrectAnswer: PropTypes.func,
  setSelectedAnswer: PropTypes.func,
  totalScore: PropTypes.number,
  setTotalScore: PropTypes.func,
  setCurrentScore: PropTypes.func,
  currentScore: PropTypes.number,
  children: PropTypes.node,
};

export default NextButton;
