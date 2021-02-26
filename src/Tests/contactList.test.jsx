import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from './test-utils';
import ContactList from '../Components/ContactsList';
import contactsRepository from '../Services/contactsRepository';
import generateContacts from './Factories/Contacts';

jest.mock('../Services/contactsRepository');

describe('contact component', () => {
  it('shows a loading message before fetch', async () => {
    contactsRepository.fetchContacts.mockResolvedValueOnce([]);
    render(<ContactList />);

    expect(screen.getByText(/loading contacts/i)).toBeInTheDocument();

    await waitFor(() => screen.getByRole('alert'));
  });

  it('hides loading message after fetch', async () => {
    contactsRepository.fetchContacts.mockResolvedValueOnce([]);
    render(<ContactList />);

    await waitForElementToBeRemoved(() =>
      screen.getByText(/loading contacts/i)
    );

    expect(screen.queryByText(/loading contacts/i)).not.toBeInTheDocument();
  });

  it('shows an error message if the fetch to the API fails', async () => {
    contactsRepository.fetchContacts.mockResolvedValueOnce({ error: 500 });
    render(<ContactList />);

    await waitFor(() => screen.getByRole('alert'));

    expect(screen.getByRole('alert')).toHaveTextContent(
      /Oops, error fetching the contacts/i
    );
  });

  it("shows no contacts found message if can't find any", async () => {
    contactsRepository.fetchContacts.mockResolvedValueOnce([]);
    render(<ContactList />);

    await waitFor(() => screen.getByRole('alert'));

    expect(screen.getByRole('alert')).toHaveTextContent(/No contacts yet/i);
  });

  it('shows a list of contacts', async () => {
    const contacts = generateContacts(1, 3);
    contactsRepository.fetchContacts.mockResolvedValueOnce(contacts);
    render(<ContactList />);

    await waitForElementToBeRemoved(() =>
      screen.getByText(/loading contacts/i)
    );

    contacts.forEach((user) => {
      expect(screen.getByText(user.name.first)).toBeInTheDocument();
    });
  });
});
