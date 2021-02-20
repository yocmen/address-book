import React from "react";
import useUsers from "../Hooks/useUsers";
import Loading from "./loading";
import ErrorMessage from "../Components/errorMessage";
import NoResultsMessage from "./noResultsMessage";
import UsersListItem from "./usersListItem";

const UsersList = () => {
  const { status, users } = useUsers();

  if (status.loading) return <Loading />;

  if (status.complete && status.error) return <ErrorMessage />;

  if (status.complete && users.length === 0) return <NoResultsMessage />;

  return (
    <div>
      <img src="/asdasd.jpg" alt=""/>
      {users.map((user, idx) => {
        return <UsersListItem user={user} key={`user_${idx}`} />;
      })}
    </div>
  );
};

export default UsersList;
