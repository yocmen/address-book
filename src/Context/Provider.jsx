import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import contacts, { initialState } from './Reducers/Contacts';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [contactsState, contactsDispatch] = useReducer(contacts, initialState);

  return (
    <GlobalContext.Provider
      value={{
        contactsState,
        contactsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
