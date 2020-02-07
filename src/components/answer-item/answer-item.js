import React, { useState } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

const AnswerItem = props => {
  const { clickedOption, correctAnswer } = props;
  const [variant, setVariant] = useState('info');

  const handleOptionSelection = () => {
    if (clickedOption !== correctAnswer) {
      setVariant('danger');
    } else {
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
