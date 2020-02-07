import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './question-audio.css';

const QuestionAudio = ({ src }) => {
  return <AudioPlayer autoPlay src={src} />;
};

export default QuestionAudio;
