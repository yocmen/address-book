import { useEffect, useReducer, useContext } from 'react';
import contactsRepository from '../Services/contactsRepository';
import { GlobalContext } from '../Context/Provider';
import { ADD_CONTACTS } from '../Context/Constants/Contacts';
import { getFilteredCountries } from '../helpers';

const useContacts = () => {
  const { contactsState, contactsDispatch } = useContext(GlobalContext);
  const { countryFilter } = contactsState;

  const dataFetchReducer = (_, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          loading: true,
          complete: false,
          error: false,
        };
      case 'FETCH_SUCCESS':
        return {
          loading: false,
          complete: true,
          error: false,
        };
      case 'FETCH_FAILURE':
        return {
          loading: false,
          complete: false,
          error: true,
        };
      default:
        throw new Error();
    }
  };

  const [status, dispatch] = useReducer(dataFetchReducer, {
    loading: false,
    complete: false,
    error: false,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchContacts = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const filteredCountries = getFilteredCountries(countryFilter)
          .replace(/\s/g, '')
          .toLowerCase();

        const contactsData = await contactsRepository.fetchContacts(
          filteredCountries
        );

        if (contactsData.error) {
          throw new Error(contactsData.error);
        }

        if (!didCancel) {
          contactsDispatch({ type: ADD_CONTACTS, payload: contactsData });
          dispatch({ type: 'FETCH_SUCCESS' });
        }
      } catch (error) {
        // send error to monitoring tool like bugsnag
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };

    fetchContacts();

    return () => {
      didCancel = true;
    };
  }, []);

  return { status };
};

export default useContacts;
