import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <div className="container mx-auto my-4 lg:w-1/2">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
