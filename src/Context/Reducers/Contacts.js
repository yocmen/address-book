import { GET_CONTACTS, ADD_CONTACTS } from '../Constants/Contacts';

export const initialState = {
  contacts: [],
  isSearchActive: '',
  foundContacts: [],
};

const contacts = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_CONTACTS: {
      return {
        state,
      };
    }
    case ADD_CONTACTS: {
      return {
        ...state,
        contacts: payload,
      };
    }
    default:
      return state;
  }
};

export default contacts;
