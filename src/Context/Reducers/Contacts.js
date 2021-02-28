import {
  GET_CONTACTS,
  ADD_CONTACTS,
  SEARCH_CONTACTS,
  SET_COUNTRY_FILTER,
} from '../Constants/Contacts';
import { filterContacts } from '../../helpers';

const localStateCountryFilter = localStorage.getItem('abCountryFilter');

export const initialState = {
  contacts: [],
  isSearchActive: false,
  foundContacts: [],
  countryFilter: localStateCountryFilter
    ? JSON.parse(localStateCountryFilter)
    : {},
};

const contacts = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_CONTACTS: {
      return {
        ...state,
        isSearchActive: false,
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
    case SET_COUNTRY_FILTER: {
      localStorage.setItem('abCountryFilter', JSON.stringify(payload));

      return {
        ...state,
        countryFilter: payload,
      };
    }
    default:
      return state;
  }
};

export default contacts;
