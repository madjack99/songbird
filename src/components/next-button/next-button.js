import React from 'react';

import { generateRandomAnswer } from '../../utils';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NextButton = ({
  isQuestionAnswered,
  currentQuestion,
  setCurrentQuestion,
  setIsQuestionAnswered,
  setCorrectAnswer,
}) => {
  const updateCurrentQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setIsQuestionAnswered(false);
    setCorrectAnswer(generateRandomAnswer());
  };

  return (
    <Container>
      <Button
        variant="primary"
        size="lg"
        block
        disabled={!isQuestionAnswered}
        onClick={updateCurrentQuestion}
      >
        Next question
      </Button>
    </Container>
  );
};

export default NextButton;
