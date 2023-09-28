import React from "react";

function Search({setSearch}) {
  function handleChange(event){
    setSearch(event.target.value)
  }

  return (
    <div>
      <label className="search" htmlFor="search">Sweet Tooth Tracker : </label>
      <input
        type="text"
        id="search_bar"
        placeholder="Search candy ..."
        onChange={handleChange}
      />
      
    </div>
  );
}

export default Search;
