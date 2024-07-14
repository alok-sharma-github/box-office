import React, { useState } from "react";
import { searchForShows } from "./../api/tvmaze";
import { searchForPeople } from "./../api/tvmaze";

const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const onSearchInputChange = (e) => {
    setSearchStr(e.target.value);
  };
  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    setApiDataError(null); // Reset error state before new search
    setApiData(null); // Reset apiData state before new search
    try {
      if (searchOption === "shows") {
        const result = await searchForShows(searchStr);
        setApiData(result);
      } else {
        const result = await searchForPeople(searchStr);
        setApiData(result);
      }
    } catch (err) {
      setApiDataError(err.message);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error: {apiDataError}</div>;
    }
    if (apiData) {
      if (apiData.length === 0) {
        return <div>Not Found</div>;
      }
      // Check if the first item has a 'show' or 'person' property to determine the type
      return apiData[0].show
        ? apiData.map((data) => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map((data) => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
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
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
