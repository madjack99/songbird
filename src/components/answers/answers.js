import React from 'react';
import PropTypes from 'prop-types';

import AnswerItem from '../answer-item';

import ListGroup from 'react-bootstrap/ListGroup';

import './answers.css';

const Answers = ({ currentQuestionData, ...restProps }) => {
  const renderListItems = currentQuestionData.map((item, idx) => {
    return (
      <AnswerItem key={idx} clickedOption={idx} {...restProps}>
        {item.name}
      </AnswerItem>
    );
  });
  return <ListGroup className="answers mt-2 p-2">{renderListItems}</ListGroup>;
};

Answers.propTypes = {
  currentQuestionData: PropTypes.array.isRequired,
};

export default Answers;
