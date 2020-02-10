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

export default NextButton;
