const usersRepository = {
  fetchUsers: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_USERS_API}/?results=50&inc=picture,name,email,login,location,phone,cell`
      );

      if (response.ok) {
        const { results } = await response.json();
        return results;
      }

      return { error: response.status };
    } catch (error) {
      return { error: error.message };
    }
  },
};

export default usersRepository;
