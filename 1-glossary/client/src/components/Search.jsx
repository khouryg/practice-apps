import React, {useState} from 'react';

const Search = function({setSearch}) {

  const handleChange = function(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h3>Search:</h3>
      <input placeholder="search word" onChange={handleChange}></input>
    </div>
  )
}

export default Search;