import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="border border-gray-200 p-3 text-center rounded bg-gray-100">
      <form action="" role="search">
        <div className="flex items-center space-x-2">
          <label
            htmlFor="search"
            aria-label="Search"
            className="hidden md:block"
          >
            Search by name / lastname
          </label>
          <div className="border border-gray-300 rounded bg-white px-3 py-2 flex-1">
            <input type="text" id="search" className="w-full" />
          </div>
          <button
            type="submit"
            className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
