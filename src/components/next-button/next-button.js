import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NextButton = () => {
  return (
    <Container>
      <Button variant="primary" size="lg" block disabled>
        Next question
      </Button>
    </Container>
  );
};

export default NextButton;
