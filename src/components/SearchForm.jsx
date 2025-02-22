import React, { useState, useEffect } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchOption, setSearchOption] = useState("shows");
  console.log("COMPONENT RERENDER");
  useEffect(() => {
    console.log("SEARCH OPTION CHANGES", searchOption);
    return () => {
      console.log("COMPONENT UNMOUNTS", searchOption);
    };
  });
  const onSearchInputChange = (e) => {
    setSearchStr(e.target.value);
  };
  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === "shows"}
            onChange={onRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === "actors"}
            onChange={onRadioChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
