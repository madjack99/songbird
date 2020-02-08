import React, { useState, useEffect } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

const AnswerItem = props => {
  const {
    clickedOption,
    correctAnswer,
    setSelectedAnswer,
    setIsQuestionAnswered,
    currentQuestion,
  } = props;
  const [variant, setVariant] = useState('light');
  console.log('answer item');

  useEffect(() => {
    setVariant('light');
  }, [currentQuestion]);

  const handleOptionSelection = () => {
    setSelectedAnswer(clickedOption);
    if (clickedOption !== correctAnswer) {
      setVariant('danger');
    } else {
      setIsQuestionAnswered(true);
      setVariant('success');
    }
  };

  return (
    <ListGroup.Item variant={variant} onClick={handleOptionSelection}>
      {props.children}
    </ListGroup.Item>
  );
};

export default AnswerItem;
