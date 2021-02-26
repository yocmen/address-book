import React from 'react';
import { render, screen } from './test-utils';
import ContactsListItem from '../Components/ContactsList/Item';
import generateContacts from './Factories/Contacts';

describe('contact list item', () => {
  it('shows the avatar', () => {
    const contacts = generateContacts(1, 1);
    render(<ContactsListItem contact={contacts[0]} />);

    expect(
      screen.getByRole('img', { name: `${contacts[0].login.username}_avatar` })
    ).toBeInTheDocument();
  });

  it('shows the first name', () => {
    const [contact] = generateContacts(1, 1);

    render(<ContactsListItem contact={contact} />);

    expect(screen.getByText(contact.name.first)).toBeInTheDocument();
  });

  it('shows the last name', () => {
    const [contact] = generateContacts(1, 1);

    render(<ContactsListItem contact={contact} />);

    expect(screen.getByText(contact.name.last)).toBeInTheDocument();
  });

  it('shows the username', () => {
    const [contact] = generateContacts(1, 1);

    render(<ContactsListItem contact={contact} />);

    expect(screen.getByText(contact.login.username)).toBeInTheDocument();
  });

  it('shows the email', () => {
    const [contact] = generateContacts(1, 1);

    render(<ContactsListItem contact={contact} />);

    expect(screen.getByText(contact.email)).toBeInTheDocument();
  });
});
