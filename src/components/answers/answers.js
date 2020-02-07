import React from 'react';

import AnswerItem from '../answer-item';

import ListGroup from 'react-bootstrap/ListGroup';

const Answers = ({ currentQuestionData, correctAnswer }) => {
  const renderListItems = currentQuestionData.map((item, idx) => {
    return (
      <AnswerItem key={idx} clickedOption={idx} correctAnswer={correctAnswer}>
        {item.name}
      </AnswerItem>
    );
  });
  return <ListGroup>{renderListItems}</ListGroup>;
};

export default Answers;
