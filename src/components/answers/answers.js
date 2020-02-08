import React from 'react';

import AnswerItem from '../answer-item';

import ListGroup from 'react-bootstrap/ListGroup';

const Answers = ({
  currentQuestionData,
  correctAnswer,
  setSelectedAnswer,
  setIsQuestionAnswered,
}) => {
  const renderListItems = currentQuestionData.map((item, idx) => {
    return (
      <AnswerItem
        key={idx}
        clickedOption={idx}
        correctAnswer={correctAnswer}
        setSelectedAnswer={setSelectedAnswer}
        setIsQuestionAnswered={setIsQuestionAnswered}
      >
        {item.name}
      </AnswerItem>
    );
  });
  return <ListGroup>{renderListItems}</ListGroup>;
};

export default Answers;
