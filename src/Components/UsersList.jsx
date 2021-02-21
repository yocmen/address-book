import React from 'react';
import useUsers from '../Hooks/useUsers';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import NoResultsMessage from './NoResultsMessage';
import UsersListItem from './UsersListItem';

const UsersList = () => {
  const { status, users } = useUsers();

  if (status.loading) return <Loading />;

  if (status.complete && status.error) return <ErrorMessage />;

  if (status.complete && users.length === 0) return <NoResultsMessage />;

  return (
    <div>
      <img src="/asdasd.jpg" alt="" />
      {users.map((user) => {
        return (
          <UsersListItem user={user} key={`user_${user.login.username}`} />
        );
      })}
    </div>
  );
};

export default UsersList;
