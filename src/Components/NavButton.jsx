import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-gray-800 h-12 px-4 bg-gray-300 rounded flex items-center hover:bg-gray-200"
    >
      {children}
    </Link>
  );
};

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavButton;
