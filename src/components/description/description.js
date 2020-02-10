import React from 'react';

import QuestionAudio from '../question-audio';

import Figure from 'react-bootstrap/Figure';

import './description.css';

const Description = ({ selectedAnswer, currentQuestionData }) => {
  const bird = currentQuestionData[selectedAnswer];
  if (bird) {
    const { name, species, description } = bird;

    return (
      <div className="description mt-2 p-2 ">
        <Figure.Image rounded width={200} height={155} src={bird.image} />
        <QuestionAudio src={bird.audio} />
        <h2 className="description__name">{name}</h2>
        <h3>{species}</h3>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <div>
      <p>Listen to the audio record</p>
      <p>Choose a bird from the list</p>
    </div>
  );
};

export default Description;
