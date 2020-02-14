import React from 'react';

import Card from 'react-bootstrap/Card';
import defaultBird from './default-bird.jpg';

import './question-info.css';

const QuestionInfo = ({ image, name, isQuestionAnswered }) => {
  const curName = isQuestionAnswered ? name : '*****';
  const curImage = isQuestionAnswered ? image : defaultBird;

  return (
    <Card>
      <Card.Header as="h5" className="text-dark">
        {curName}
      </Card.Header>
      <img
        variant="bottom"
        src={curImage}
        className="my-image mx-auto d-block"
        alt="bird"
      />
    </Card>
  );
};

export default QuestionInfo;
