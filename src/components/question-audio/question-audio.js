import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './question-audio.css';

const QuestionAudio = () => {
  return (
    <AudioPlayer
      autoPlay
      src="https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"
      onPlay={e => console.log('onPlay')}
    />
  );
};

export default QuestionAudio;
