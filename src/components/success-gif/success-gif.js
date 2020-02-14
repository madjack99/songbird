import React from 'react';

import successGif from './success.webp';

const SuccessGif = () => {
  return (
    <div className="success-gif text-center text-light font-weight-bolder">
      <img src={successGif} alt="success" />
      <br />
      <span>Well done!</span>
      <br />
      <span>You have deep knowledge of birds.</span>
    </div>
  );
};

export default SuccessGif;
