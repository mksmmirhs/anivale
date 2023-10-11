import React from 'react';

const SearchField = ({ searchHandler }) => {
  return (
    <div className="my-8 w-full flex justify-center">
      <form className="flex items-center" onSubmit={searchHandler}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="border border-gray-400 rounded-l py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
        />
        <button className="bg-blue-500 text-white rounded-r px-4 py-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchField;
