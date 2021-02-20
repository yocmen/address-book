import { useState, useEffect, useRef, useCallback } from "react";
import usersRepository from "../Services/usersRepository";

const useUsers = () => {
  const isMounted = useRef(false);

  const STATUS = {
    loading: true,
    complete: false,
    error: false,
  };

  const [status, setStatus] = useState(STATUS);

  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const users = await usersRepository.fetchUsers();

    if (users.error) {
      //send error to monitoring tool like bugsnag
      setStatus((s) => {
        return {
          ...s,
          error: true,
        };
      });
    }

    if (isMounted.current) {
      setUsers(users);
      setStatus((s) => {
        return {
          ...s,
          loading: false,
          complete: true,
        };
      });
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;
    getUsers();

    return () => {
      return false;
    };
  }, [getUsers]);

  return { status, users };
};

export default useUsers;
