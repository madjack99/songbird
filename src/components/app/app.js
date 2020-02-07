import React from 'react';

import Header from '../header';
import BirdCategory from '../bird-category';
import Question from '../question';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <BirdCategory />
      <Question />
    </div>
  );
};

export default App;
