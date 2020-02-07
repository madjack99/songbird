import React, { useState } from 'react';

import Header from '../header';
import BirdCategory from '../bird-category';
import Question from '../question';
import Main from '../main';

import birdsData from '../../services';
import { generateRandomAnswer } from '../../utils';

import './app.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomAnswer());
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const currentQuestionData = birdsData[currentQuestion];

  return (
    <div className="app">
      <Header />
      <BirdCategory />
      <Question />
      <Main
        currentQuestionData={currentQuestionData}
        correctAnswer={correctAnswer}
        setSelectedAnswer={setSelectedAnswer}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
};

export default App;
