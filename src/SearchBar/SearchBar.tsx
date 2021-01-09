import React from 'react';
import './SearchBar.css';

type SearchBarProps = {
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <div className="searchBarContainer">
      <label htmlFor="query" className="block text-sm font-medium text-gray-700">
        Location
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text" name="query" id="query" placeholder="Search for your current location"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  )
};

export default SearchBar;
