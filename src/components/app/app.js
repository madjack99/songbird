import React, { useState } from 'react';

import Header from '../header';
import BirdCategory from '../bird-category';
import Question from '../question';
import Main from '../main';
import NextButton from '../next-button';

import birdsData from '../../services';
import { generateRandomAnswer } from '../../utils';

import './app.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomAnswer());
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  const currentQuestionData = birdsData[currentQuestion];

  return (
    <div className="app">
      <Header />
      <BirdCategory currentQuestion={currentQuestion} />
      <Question
        currentQuestionData={currentQuestionData}
        correctAnswer={correctAnswer}
        isQuestionAnswered={isQuestionAnswered}
      />
      <Main
        currentQuestionData={currentQuestionData}
        correctAnswer={correctAnswer}
        setSelectedAnswer={setSelectedAnswer}
        selectedAnswer={selectedAnswer}
        setIsQuestionAnswered={setIsQuestionAnswered}
        currentQuestion={currentQuestion}
      />
      <NextButton
        isQuestionAnswered={isQuestionAnswered}
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
        setIsQuestionAnswered={setIsQuestionAnswered}
        setCorrectAnswer={setCorrectAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
    </div>
  );
};

export default App;
