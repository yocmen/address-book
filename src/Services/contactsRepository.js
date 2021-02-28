const contactsRepository = {
  fetchContacts: async (filterByCountries = '') => {
    try {
      let url = `${process.env.REACT_APP_USERS_API}/?results=50&inc=picture,name,email,login,location,phone,cell`;

      if (filterByCountries) {
        url = `${url}&nat=${filterByCountries}`;
      }

      const response = await fetch(url);

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

export default contactsRepository;
