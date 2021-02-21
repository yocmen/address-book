import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const ErrorMessage = () => {
  return (
    <div
      role="alert"
      className="flex items-center justify center space-x-2 border border-red-300 bg-red-200 px-4 py-2 rounded"
    >
      <FaExclamationCircle className="text-red-700" />
      <span className="text-red-600">
        Oops, error fetching the users, please try again later.
      </span>
    </div>
  );
};

export default ErrorMessage;
