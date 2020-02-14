import React, { useState } from 'react';

import Header from '../header';
import BirdCategory from '../bird-category';
import Question from '../question';
import Main from '../main';
import NextButton from '../next-button';
import SuccessGif from '../success-gif';

import birdsData from '../../services';
import { generateRandomAnswer } from '../../utils';

import Container from 'react-bootstrap/Container';

import './app.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomAnswer());
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [currentScore, setCurrentScore] = useState(5);
  const [totalScore, setTotalScore] = useState(0);

  console.log(`Correct answer for extra scope: ${correctAnswer} (zero based)`);

  const currentQuestionData = birdsData[currentQuestion];

  if (currentQuestion === 6) {
    return (
      <div className="app min-vh-100">
        <Header score={totalScore} />
        <BirdCategory currentQuestion={0} />
        <Container>
          <h3 className="text-light text-center ">
            You won, your score is {totalScore} out of 30.
          </h3>
          {totalScore === 30 && <SuccessGif />}
          <NextButton
            isQuestionAnswered={true}
            setCurrentQuestion={setCurrentQuestion}
            currentQuestion={-1}
            setIsQuestionAnswered={setIsQuestionAnswered}
            setCorrectAnswer={setCorrectAnswer}
            setSelectedAnswer={setSelectedAnswer}
            totalScore={totalScore}
            setTotalScore={setTotalScore}
            setCurrentScore={setCurrentScore}
            currentScore={-totalScore}
          >
            Play again
          </NextButton>
        </Container>
      </div>
    );
  }

  return (
    <div className="app min-vh-100">
      <Header score={totalScore} />
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
        isQuestionAnswered={isQuestionAnswered}
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
      />
      <NextButton
        isQuestionAnswered={isQuestionAnswered}
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
        setIsQuestionAnswered={setIsQuestionAnswered}
        setCorrectAnswer={setCorrectAnswer}
        setSelectedAnswer={setSelectedAnswer}
        totalScore={totalScore}
        setTotalScore={setTotalScore}
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
      >
        Next question
      </NextButton>
    </div>
  );
};

export default App;
