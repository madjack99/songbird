import React, { useState } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

const AnswerItem = props => {
  const {
    clickedOption,
    correctAnswer,
    setSelectedAnswer,
    setIsQuestionAnswered,
  } = props;
  const [variant, setVariant] = useState('light');

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
