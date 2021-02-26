import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const NoResultsMessage = () => {
  return (
    <div
      role="alert"
      className="flex items-center justify center space-x-2 border border-blue-300 bg-blue-200 px-4 py-2 rounded"
    >
      <FaExclamationCircle className="text-blue-700" />
      <span className="text-blue-600">
        No contacts yet, please try again later.
      </span>
    </div>
  );
};

export default NoResultsMessage;
