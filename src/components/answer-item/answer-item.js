import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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

AnswerItem.propTypes = {
  clickedOption: PropTypes.number,
  correctAnswer: PropTypes.number,
  setSelectedAnswer: PropTypes.func,
  setIsQuestionAnswered: PropTypes.func,
  currentQuestion: PropTypes.number,
  isQuestionAnswered: PropTypes.bool,
  setCurrentScore: PropTypes.func,
  currentScore: PropTypes.number,
};

export default AnswerItem;
