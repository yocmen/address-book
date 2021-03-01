import React from 'react';
import PropTypes from 'prop-types';
import { FaPhoneSquare } from 'react-icons/fa';

const ContactCard = ({ contact }) => {
  return (
    <div style={{ width: 300 }} className="flex space-x-3 items-center">
      <div>
        <img
          aria-label={`${contact.name.first}_avatar`}
          alt={`${contact.name.first}_avatar`}
          src={contact.picture.large}
          className="rounded border border-gray-200 shadow-sm w-28 h-28 bg-gray-100 overflow-hidden"
        />
      </div>
      <div className="flex-1">
        <div className="text-xl text-gray-800 font-semibold">
          {contact.name.first} {contact.name.last}
        </div>
        <div className="text-sm text-gray-500 mt-1 mb-2">
          <div>
            {contact.location.street.number} {contact.location.street.name}
          </div>
          <div>
            {contact.location.city}, {contact.location.state}
          </div>
          <div>{contact.location.postcode}</div>
        </div>
        <div className="font-semibold text-gray-700 text-sm flex items-center space-x-2">
          <FaPhoneSquare /> <span>{contact.phone}</span>
        </div>
        <div className="font-semibold text-gray-700 text-sm flex items-center space-x-2">
          <FaPhoneSquare /> <span>{contact.cell}</span>
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    location: PropTypes.shape({
      street: PropTypes.shape({
        number: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      postcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }),
    phone: PropTypes.string.isRequired,
    cell: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactCard;
