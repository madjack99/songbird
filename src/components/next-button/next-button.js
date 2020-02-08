import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NextButton = ({
  isQuestionAnswered,
  currentQuestion,
  setCurrentQuestion,
}) => {
  const updateCurrentQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
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
