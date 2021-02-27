import React from 'react';
import PropTypes from 'prop-types';
import { FaExclamationCircle } from 'react-icons/fa';

const NoResultsMessage = ({ customText }) => {
  return (
    <div
      role="alert"
      className="flex items-center justify center space-x-2 border border-blue-300 bg-blue-200 px-4 py-2 rounded"
    >
      <FaExclamationCircle className="text-blue-700" />
      <span className="text-blue-600">{customText}</span>
    </div>
  );
};

NoResultsMessage.defaultProps = {
  customText: 'No contacts yet, please try again later.',
};

NoResultsMessage.propTypes = {
  customText: PropTypes.string,
};

export default NoResultsMessage;
