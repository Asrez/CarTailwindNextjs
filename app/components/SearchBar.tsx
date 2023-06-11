"use client";

import React, { useState } from "react";
import { SearchMenufacturer } from "./";

const SearchBar = () => {
  const [manufacutrer, setManufacutrer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenufacturer manufacturer={manufacutrer}  setManufacutrer={setManufacutrer}/>
      </div>
    </form>
  );
};

export default SearchBar;
