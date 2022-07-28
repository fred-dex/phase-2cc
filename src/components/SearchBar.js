import React from "react";

function SearchBar({ searchPlaneteer, setSearchPlaneteer, image }) {

  return (
    <div className="search">
    <label htmlFor="search">Search Planeteers</label>
      <input 
      type="text" 
      className="search"
      image={image}
      value={searchPlaneteer}
      placeholder='Search Planeteers'
      onChange={(e) => setSearchPlaneteer(e.target.value)} />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
