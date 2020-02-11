import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import './bird-category.css';

const BirdCategory = ({ currentQuestion = 0 }) => {
  const categories = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы',
    'Морские птицы',
  ];

  const renderedCategories = categories.map((item, idx) => {
    const claz =
      currentQuestion === idx
        ? 'bird-category__item bird-category__item_active'
        : 'bird-category__item';

    return (
      <li key={idx} className={claz}>
        {item}
      </li>
    );
  });

  return (
    <Container>
      <ul className="bird-category">{renderedCategories}</ul>
    </Container>
  );
};

BirdCategory.propTypes = {
  currentQuestion: PropTypes.number,
};

export default BirdCategory;
