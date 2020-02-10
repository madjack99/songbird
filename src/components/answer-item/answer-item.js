import React, { useState, useEffect } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import './answer-item.css';

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

  useEffect(() => {
    setVariant('light');
    setItemClicked(false);
  }, [currentQuestion]);

  const handleOptionSelection = () => {
    setSelectedAnswer(clickedOption);
    if (clickedOption !== correctAnswer) {
      setVariant('danger');
      console.log('itemClicked', itemClicked);
      if (!itemClicked) {
        console.log('click');
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
      onClick={
        isQuestionAnswered
          ? () => setSelectedAnswer(clickedOption)
          : handleOptionSelection
      }
    >
      {props.children}
    </ListGroup.Item>
  );
};

export default AnswerItem;
