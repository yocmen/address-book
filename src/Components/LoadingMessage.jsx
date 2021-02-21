import React from 'react';
import ripple from '../assets/ripple.svg';

const LoadingMessage = () => {
  return (
    <div role="alert" className="flex items-center justify-center">
      <img src={ripple} alt="" />
      <span className="text-gray-700">Loading users, please wait...</span>
    </div>
  );
};

export default LoadingMessage;
