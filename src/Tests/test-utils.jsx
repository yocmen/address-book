import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { GlobalProvider } from '../Context/Provider';
// import RoutesManager from '../Routes/manager';

const Wrapper = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const render = (ui, ...renderOptions) => {
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

const renderWithRouter = (ui) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

// re-export everything
export { render, renderWithRouter };
export * from '@testing-library/react';
// override render method
