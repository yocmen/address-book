import React, { useContext, useEffect, useRef } from 'react';
import useContacts from '../../Hooks/useContacts';
import LoadingMessage from '../LoadingMessage';
import ErrorMessage from '../ErrorMessage';
import NoResultsMessage from '../NoResultsMessage';
import List from './List';
import { GlobalContext } from '../../Context/Provider';
import { getFilteredCountries } from '../../helpers';

const ContactsList = () => {
  const { status, refetch } = useContacts();
  const { contactsState } = useContext(GlobalContext);
  const {
    contacts,
    isSearchActive,
    foundContacts,
    countryFilter,
  } = contactsState;
  const loadingRef = useRef(null);

  const loadMoreContacts = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) refetch();
  };

  useEffect(() => {
    const options = {
      root: null, // Page as root
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(loadMoreContacts, options);

    if (!isSearchActive && !status.loading && contacts.length < 1000) {
      observer.observe(loadingRef.current);
    }

    return () =>
      loadingRef.current !== null && observer.unobserve(loadingRef.current);
  });

  if (status.loading && contacts.length === 0) return <LoadingMessage />;

  if (status.error) return <ErrorMessage />;

  if (status.complete && contacts.length === 0) return <NoResultsMessage />;

  if (isSearchActive && foundContacts.length === 0)
    return <NoResultsMessage customText="No contacts found." />;

  const filteredCountries = getFilteredCountries(countryFilter);

  return (
    <div>
      {filteredCountries && (
        <div className="font-semibold mb-1">
          Contacts filtered by country: [ {filteredCountries} ]
        </div>
      )}
      <List contacts={isSearchActive ? foundContacts : contacts} />
      {!isSearchActive && contacts.length < 1000 && (
        <div className="mt-3" ref={loadingRef}>
          <LoadingMessage />
        </div>
      )}
      {contacts.length >= 1000 && (
        <div className="text-center italic text-gray-500 mt-3">
          End of contacts catalog.
        </div>
      )}
      {isSearchActive && (
        <div className="text-center italic text-gray-500 mt-3">
          Fetch of new contacts paused while searching...
        </div>
      )}
    </div>
  );
};

export default ContactsList;
