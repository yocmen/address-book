import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, onClick, className, ...rest }) => {
  const btnClass = classNames(
    'bg-gray-300 rounded flex items-center justify-center hover:bg-gray-200 disabled:opacity-50',
    className
  );

  return (
    <button
      type="button"
      className={btnClass}
      onClick={onClick}
      {...{ ...rest }}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: null,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
