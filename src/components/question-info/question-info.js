import React from 'react';

import Card from 'react-bootstrap/Card';
import defaultBird from './default-bird.jpg';

import './question-info.css';

const QuestionInfo = ({ imageSrc = defaultBird }) => {
  return (
    <Card>
      <Card.Header as="h5" className="text-dark">
        Featured
      </Card.Header>
      <img
        variant="bottom"
        src={imageSrc}
        className="my-image mx-auto d-block"
        alt="bird"
      />
    </Card>
  );
};

export default QuestionInfo;
