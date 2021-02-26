import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ contacts }) => {
  return (
    <div className="space-y-2 w-full">
      {contacts.map((contact) => {
        return (
          <Item contact={contact} key={`contact_${contact.login.username}`} />
        );
      })}
    </div>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
