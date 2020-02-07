import React from 'react';

import Card from 'react-bootstrap/Card';
import defaultBird from './default-bird.jpg';

import './question-info.css';

const QuestionInfo = ({ image, name }) => {
  return (
    <Card>
      <Card.Header as="h5" className="text-dark">
        {name}
      </Card.Header>
      <img
        variant="bottom"
        src={image}
        className="my-image mx-auto d-block"
        alt="bird"
      />
    </Card>
  );
};

export default QuestionInfo;
