import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ user }) => {
  return (
    <div>
      <img
        aria-label={`${user.login.username}_avatar`}
        alt={`${user.login.username}_avatar`}
        src={user.picture.thumbnail}
      />
      <span>{user.name.first}</span>
      <span>{user.name.last}</span>
      <span>{user.login.username}</span>
      <span>{user.email}</span>
    </div>
  );
};

UsersListItem.propTypes = {
  user: PropTypes.shape({
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

export default UsersListItem;
