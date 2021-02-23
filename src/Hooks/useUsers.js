import { useState, useEffect, useReducer } from 'react';
import usersRepository from '../Services/usersRepository';

const useUsers = () => {
  const dataFetchReducer = (_, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          loading: true,
          complete: false,
          error: false,
        };
      case 'FETCH_SUCCESS':
        return {
          loading: false,
          complete: true,
          error: false,
        };
      case 'FETCH_FAILURE':
        return {
          loading: false,
          complete: false,
          error: true,
        };
      default:
        throw new Error();
    }
  };

  const [status, dispatch] = useReducer(dataFetchReducer, {
    loading: false,
    complete: false,
    error: false,
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    let didCancel = false;

    const getUsers = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const usersData = await usersRepository.fetchUsers();

        if (usersData.error) {
          throw new Error(usersData.error);
        }

        if (!didCancel) {
          setUsers(usersData);
          dispatch({ type: 'FETCH_SUCCESS' });
        }
      } catch (error) {
        // send error to monitoring tool like bugsnag
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };

    getUsers();

    return () => {
      didCancel = true;
    };
  }, []);

  return { status, users };
};

export default useUsers;
