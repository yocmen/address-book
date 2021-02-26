import React from 'react';
import ripple from '../Assets/ripple.svg';

const LoadingMessage = () => {
  return (
    <div role="alert" className="flex items-center justify-center">
      <img src={ripple} alt="" />
      <span className="text-gray-700">Loading contacts, please wait...</span>
    </div>
  );
};

export default LoadingMessage;
