import React, { useContext } from 'react';
import useContacts from '../../Hooks/useContacts';
import LoadingMessage from '../LoadingMessage';
import ErrorMessage from '../ErrorMessage';
import NoResultsMessage from '../NoResultsMessage';
import List from './List';
import { GlobalContext } from '../../Context/Provider';
import { getFilteredCountries } from '../../helpers';

const ContactsList = () => {
  const { status } = useContacts();
  const { contactsState } = useContext(GlobalContext);
  const {
    contacts,
    isSearchActive,
    foundContacts,
    countryFilter,
  } = contactsState;

  if (status.loading) return <LoadingMessage />;

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
    </div>
  );
};

export default ContactsList;
