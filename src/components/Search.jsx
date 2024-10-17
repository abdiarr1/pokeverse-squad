import React, { useState } from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center mb-10 mt-0">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search..."
        className="border p-3 border-black"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
