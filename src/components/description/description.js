import React from 'react';

import QuestionAudio from '../question-audio';

import Figure from 'react-bootstrap/Figure';

const Description = ({ selectedAnswer, currentQuestionData }) => {
  const bird = currentQuestionData[selectedAnswer];
  if (bird) {
    return (
      <div className="description">
        <Figure.Image width={200} height={155} src={bird.image} />
        <QuestionAudio src={bird.audio} />
        <h2>{bird.name}</h2>
        <h3>{bird.species}</h3>
        <p>{bird.description}</p>
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
