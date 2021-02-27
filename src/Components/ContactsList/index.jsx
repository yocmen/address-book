import React, { useContext } from 'react';
import useContacts from '../../Hooks/useContacts';
import LoadingMessage from '../LoadingMessage';
import ErrorMessage from '../ErrorMessage';
import NoResultsMessage from '../NoResultsMessage';
import List from './List';
import { GlobalContext } from '../../Context/Provider';

const ContactsList = () => {
  const { status } = useContacts();
  const { contactsState } = useContext(GlobalContext);
  const { contacts, isSearchActive, foundContacts } = contactsState;

  if (status.loading) return <LoadingMessage />;

  if (status.error) return <ErrorMessage />;

  if (status.complete && contacts.length === 0) return <NoResultsMessage />;

  if (isSearchActive && foundContacts.length === 0)
    return <NoResultsMessage customText="No contacts found." />;

  return (
    <div>
      <List contacts={isSearchActive ? foundContacts : contacts} />
    </div>
  );
};

export default ContactsList;
