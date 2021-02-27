import React, { useRef, useState, useEffect, useContext } from 'react';
import { FaTimes, FaSearch } from 'react-icons/fa';
import Button from './Button';
import { SEARCH_CONTACTS } from '../Context/Constants/Contacts';
import { GlobalContext } from '../Context/Provider';

const SearchBar = () => {
  const { contactsDispatch } = useContext(GlobalContext);

  const [disable, setDisable] = useState(true);
  const [query, setQuery] = useState('');
  const searchInput = useRef();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const clearSearchInput = () => {
    setQuery('');
    searchInput.current.focus();
  };

  useEffect(() => {
    if (query) {
      contactsDispatch({ type: SEARCH_CONTACTS, payload: query });
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [query]);

  return (
    <div className="border border-gray-200 p-1 text-center rounded bg-gray-100 w-full">
      <form action="" role="search">
        <div className="flex items-center">
          <label
            htmlFor="search"
            aria-label="Search"
            className="hidden text-sm text-gray-600 md:block md:mr-2"
          >
            Search contact
          </label>
          <div className="flex-1 mr-2 relative">
            <input
              type="text"
              id="search"
              className="w-full border border-gray-300 rounded bg-white px-3 py-2 rounded focus:border-gray-400 focus:outline-none placeholder-gray-300"
              ref={searchInput}
              value={query}
              onChange={handleChange}
              placeholder="e.g. Jhon Doe"
            />
            <div className="absolute right-3 top-3 text-gray-300 md:hidden">
              <FaSearch />
            </div>
          </div>
          <Button
            onClick={clearSearchInput}
            disabled={disable}
            className="w-10 h-10"
            title="Clear search field"
          >
            <FaTimes />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
