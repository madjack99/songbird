import React from 'react';

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import AudioPlayer from 'material-ui-audio-player';

import './question-audio.css';

const QuestionAudio = ({ src }) => {
  const muiTheme = createMuiTheme({});
  return (
    <div className="audio">
      <ThemeProvider theme={muiTheme}>
        <AudioPlayer key={src} src={src} variation="secondary" />
      </ThemeProvider>
    </div>
  );
};

export default QuestionAudio;
