import React from 'react';
import useUsers from '../../Hooks/useUsers';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';
import NoResultsMessage from '../NoResultsMessage';
import List from './List';

const UsersList = () => {
  const { status, users } = useUsers();

  if (status.loading) return <Loading />;

  if (status.complete && status.error) return <ErrorMessage />;

  if (status.complete && users.length === 0) return <NoResultsMessage />;

  return (
    <div>
      <List users={users} />
    </div>
  );
};

export default UsersList;
