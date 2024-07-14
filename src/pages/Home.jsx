import React, { useState } from "react";
import { searchForShows } from "./../api/tvmaze";
import { searchForPeople } from "./../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/shows/ShowGrid";
import ActorGrid from "../components/actors/ActorGrid";

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    setApiDataError(null); // Reset error state before new search
    setApiData(null); // Reset apiData state before new search
    try {
      if (searchOption === "shows") {
        const result = await searchForShows(q);
        setApiData(result);
      } else {
        const result = await searchForPeople(q);
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
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
