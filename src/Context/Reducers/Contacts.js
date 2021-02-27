import {
  GET_CONTACTS,
  ADD_CONTACTS,
  SEARCH_CONTACTS,
} from '../Constants/Contacts';
import { filterContacts } from '../../helpers';

export const initialState = {
  contacts: [],
  isSearchActive: false,
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
    case SEARCH_CONTACTS: {
      return {
        ...state,
        isSearchActive: payload.length > 0,
        foundContacts: filterContacts(state.contacts, payload),
      };
    }
    default:
      return state;
  }
};

export default contacts;
