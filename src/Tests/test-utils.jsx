import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import { GlobalProvider } from '../Context/Provider';

const Wrapper = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const render = (ui, ...renderOptions) => {
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export { render };
export * from '@testing-library/react';
// override render method
