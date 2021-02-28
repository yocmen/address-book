export const debounce = (fn, delay) => {
  let timer;

  return (...args) => {
    const context = this;

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const filterContacts = (contacts, searchValue) => {
  if (searchValue.length > 0) {
    const toSearch = searchValue.toLowerCase().trim();

    return contacts.filter((item) => {
      try {
        const fullName = `${item.name.first} ${item.name.last}`;

        return fullName.toLowerCase().indexOf(toSearch) !== -1;
      } catch (error) {
        return [];
      }
    });
  }

  return [];
};

export const getFilteredCountries = (CountriesObject) => {
  const countriesToFilter = Object.keys(CountriesObject);

  if (countriesToFilter.length > 0) {
    const countriesList = countriesToFilter.filter((country) => {
      return CountriesObject[country];
    });

    return countriesList.join(', ');
  }

  return '';
};
