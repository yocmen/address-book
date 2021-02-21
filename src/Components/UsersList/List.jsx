import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ users }) => {
  return (
    <div className="space-y-2 w-full">
      {users.map((user) => {
        return <Item user={user} key={`user_${user.login.username}`} />;
      })}
    </div>
  );
};

List.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
