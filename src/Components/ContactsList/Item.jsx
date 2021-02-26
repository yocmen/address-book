import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ contact }) => {
  return (
    <div className="border border-gray-200 shadow-sm rounded px-4 py-2 flex items-center space-x-2 w-full">
      <img
        aria-label={`${contact.login.username}_avatar`}
        alt={`${contact.login.username}_avatar`}
        loading="lazy"
        src={contact.picture.thumbnail}
        className="rounded border border-gray-200 shadow-sm w-14 h-14 bg-gray-100 overflow-hidden"
      />
      <div>
        <div className="font-semibold text-gray-800 flex space-x-1">
          <span>{contact.name.first}</span>
          <span>{contact.name.last}</span>
        </div>
        <div className="flex flex-col text-xs text-gray-500 leading-tight">
          <span>{contact.login.username}</span>
          <span>{contact.email}</span>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  contact: PropTypes.shape({
    login: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
    picture: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }),
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
