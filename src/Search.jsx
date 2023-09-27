import React from "react";

function Search({setSearch}) {
  function handleChange(event){
    setSearch(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Sweet Tooth Tracker : </label>
      <input
        type="text"
        id="search"
        placeholder="Search candy ..."
        onChange={handleChange}
       
      />
      
    </div>
  );
}

export default Search;
