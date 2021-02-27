import React, { useRef, useState, useEffect, useContext } from 'react';
import { FaTimes, FaSearch } from 'react-icons/fa';
import Button from './Button';
import { GET_CONTACTS, SEARCH_CONTACTS } from '../Context/Constants/Contacts';
import { GlobalContext } from '../Context/Provider';
import { debounce } from '../helpers';

const SearchBar = () => {
  const { contactsDispatch } = useContext(GlobalContext);
  const debouncedContactsDispatch = debounce(contactsDispatch, 300);

  const [disable, setDisable] = useState(true);
  const [query, setQuery] = useState('');
  const searchInput = useRef();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const clearSearchInput = () => {
    setQuery('');
    contactsDispatch({ type: GET_CONTACTS });
    searchInput.current.focus();
  };

  const searchContact = () => {
    debouncedContactsDispatch({ type: SEARCH_CONTACTS, payload: query });
  };

  useEffect(() => {
    if (query) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [query]);

  return (
    <div className="border border-gray-200 p-1 text-center rounded bg-gray-100 w-full">
      <form action="" role="search" onSubmit={(e) => e.preventDefault()}>
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
              onKeyUp={searchContact}
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
