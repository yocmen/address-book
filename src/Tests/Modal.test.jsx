import React from 'react';
import { render, screen } from './test-utils';
import Modal from '../Components/Modal';
import ContactCard from '../Components/ContactCard';
import generateContacts from './Factories/Contacts';

describe('modal component', () => {
  it('shows the contact card when is open', async () => {
    const contacts = generateContacts(1, 1);
    render(
      <Modal modalIsOpen closeModal={() => false}>
        <ContactCard contact={contacts[0]} />
      </Modal>
    );

    expect(screen.getByRole('dialog', { hidden: true })).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(contacts[0].name.first, 'i'))
    ).toBeInTheDocument();
  });

  it('hides the contact card/modal when is closed', async () => {
    const contacts = generateContacts(1, 1);
    render(
      <Modal modalIsOpen={false} closeModal={() => false}>
        <ContactCard contact={contacts[0]} />
      </Modal>
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    expect(
      screen.queryByText(new RegExp(contacts[0].name.first, 'i'))
    ).not.toBeInTheDocument();
  });
});
