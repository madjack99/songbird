import React, { useState, useEffect } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

const AnswerItem = props => {
  const {
    clickedOption,
    correctAnswer,
    setSelectedAnswer,
    setIsQuestionAnswered,
    currentQuestion,
    isQuestionAnswered,
    setCurrentScore,
    currentScore,
  } = props;
  const [variant, setVariant] = useState('light');
  const [itemClicked, setItemClicked] = useState(false);
  console.log('answer item');

  useEffect(() => {
    setVariant('light');
  }, [currentQuestion]);

  const handleOptionSelection = () => {
    setSelectedAnswer(clickedOption);
    if (clickedOption !== correctAnswer) {
      setVariant('danger');
      if (!itemClicked) {
        setCurrentScore(currentScore - 1);
        setItemClicked(true);
      }
    } else {
      setIsQuestionAnswered(true);
      setVariant('success');
    }
  };

  return (
    <ListGroup.Item
      variant={variant}
      onClick={isQuestionAnswered ? null : handleOptionSelection}
    >
      {props.children}
    </ListGroup.Item>
  );
};

export default AnswerItem;
