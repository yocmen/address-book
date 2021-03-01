import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Modal from '../Modal';
import ContactCard from '../ContactCard';

const List = ({ contacts }) => {
  const [modalIsOpen, setModalVisibility] = useState(false);
  const [contactForModal, setContactForModal] = useState({});

  const closeModal = useCallback(() => {
    setModalVisibility(false);
  }, []);

  return (
    <div className="space-y-2 w-full">
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <ContactCard contact={contactForModal} />
      </Modal>
      {contacts.map((contact) => {
        return (
          <Item
            contact={contact}
            key={`contact_${contact.login.username}_${Math.random()}`}
            modalStatusHandler={setModalVisibility}
            contactForModalHandler={setContactForModal}
          />
        );
      })}
    </div>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
