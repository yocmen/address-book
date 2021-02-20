import React from "react";

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

export default UsersListItem;
