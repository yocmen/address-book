const usersRepository = {
  fetchUsers: async () => {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=50&inc=picture,name,email,login,location,phone,cell`
      );

      if (response.ok) {
        const { results } = await response.json();
        return results;
      } else {
        return { error: response.status };
      }
    } catch (error) {
      return { error: error.message };
    }
  },
};

export default usersRepository;
