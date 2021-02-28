import { useEffect, useReducer, useContext, useState } from 'react';
import contactsRepository from '../Services/contactsRepository';
import { GlobalContext } from '../Context/Provider';
import { ADD_CONTACTS } from '../Context/Constants/Contacts';
import { getFilteredCountries } from '../helpers';

const useContacts = () => {
  const { contactsState, contactsDispatch } = useContext(GlobalContext);
  const { countryFilter } = contactsState;
  const [refetchIndex, setRefetchIndex] = useState(0);

  const TYPE = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
    FETCH_MORE: 'FETCH_MORE',
  };

  const dataFetchReducer = (_, action) => {
    switch (action.type) {
      case TYPE.FETCH_INIT:
        return {
          loading: true,
          complete: false,
          error: false,
        };
      case TYPE.FETCH_SUCCESS:
        return {
          loading: false,
          complete: true,
          error: false,
        };
      case TYPE.FETCH_FAILURE:
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

  const fetchFromRepository = async () => {
    const filteredCountries = getFilteredCountries(countryFilter)
      .replace(/\s/g, '')
      .toLowerCase();

    return contactsRepository.fetchContacts(filteredCountries);
  };

  const refetch = () =>
    setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1);

  useEffect(() => {
    if (status.loading) return false;

    let didCancel = false;

    const fetchContacts = async () => {
      dispatch({ type: TYPE.FETCH_INIT });
      try {
        const contactsData = await fetchFromRepository();

        if (contactsData.error) {
          throw new Error(contactsData.error);
        }

        if (!didCancel) {
          contactsDispatch({ type: ADD_CONTACTS, payload: contactsData });
          dispatch({ type: TYPE.FETCH_SUCCESS });
        }
      } catch (error) {
        // send error to monitoring tool like bugsnag
        dispatch({ type: TYPE.FETCH_FAILURE });
      }
    };

    fetchContacts();

    return () => {
      didCancel = true;
    };
  }, [refetchIndex]);

  return { status, refetch };
};

export default useContacts;
