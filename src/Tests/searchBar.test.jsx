import React from 'react';
import {
  render,
  renderWithRouter,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from './test-utils';
import SearchBar from '../Components/SearchBar';
import HomePage from '../Pages/Home';
import generateContacts from './Factories/Contacts';
import contactsRepository from '../Services/contactsRepository';

jest.mock('../Services/contactsRepository');

beforeEach(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();

  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
  }));
});

describe('search bar component', () => {
  it('shows the search form on Home page', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByRole('search')).toBeInTheDocument();
  });

  it('must clear the form if the clear button is pressed', () => {
    render(<SearchBar />);

    const searchInput = screen.getByLabelText(/search contact/i);

    fireEvent.change(searchInput, { target: { value: 'Jhon' } });

    expect(searchInput.value).toBe('Jhon');

    const clearButton = screen.getByRole('button', { name: 'clear-search' });

    fireEvent.click(clearButton);

    expect(searchInput.value).toBe('');
  });

  it('must filter the contact list on search input onKeyUp', async () => {
    const contacts = generateContacts(2, 2);
    contactsRepository.fetchContacts.mockResolvedValueOnce(contacts);

    renderWithRouter(<HomePage />);

    await screen.findByText(contacts[0].name.first);

    const searchInput = screen.getByLabelText(/search contact/i);

    // add the name directly to the input
    fireEvent.change(searchInput, {
      target: { value: contacts[0].name.first },
    });

    // simulate the keyUp event to fire the filter (dispatch)
    fireEvent.keyUp(searchInput, { key: 'enter', code: 'enter' });

    await waitForElementToBeRemoved(() =>
      screen.queryByText(contacts[1].name.first)
    );

    expect(screen.getByText(contacts[0].name.first)).toBeInTheDocument();
    expect(screen.queryByText(contacts[1].name.first)).not.toBeInTheDocument();
  });

  it('shows a not found contact message when searching for a non existing name/lastname', async () => {
    const contacts = generateContacts(1, 3);
    contactsRepository.fetchContacts.mockResolvedValueOnce(contacts);

    renderWithRouter(<HomePage />);

    await screen.findByText(contacts[0].name.first);

    const searchInput = screen.getByLabelText(/search contact/i);

    // add the name directly to the input
    fireEvent.change(searchInput, {
      target: { value: 'nonExistingUser' },
    });

    // simulate the keyUp event to fire the filter (dispatch)
    fireEvent.keyUp(searchInput, { key: 'enter', code: 'enter' });

    await waitForElementToBeRemoved(() =>
      screen.queryByText(contacts[0].name.first)
    );

    expect(screen.getByRole('alert')).toHaveTextContent(/No contacts found/i);
  });
});
