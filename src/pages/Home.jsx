import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchForShows, searchForPeople } from "./../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/shows/ShowGrid";
import ActorGrid from "../components/actors/ActorGrid";

const fetchApiData = async ({ queryKey }) => {
  const [_key, { q, searchOption }] = queryKey;
  if (searchOption === "shows") {
    return await searchForShows(q);
  } else {
    return await searchForPeople(q);
  }
};

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    q: "",
    searchOption: "shows",
  });

  const {
    data: apiData,
    error: apiDataError,
    isLoading,
  } = useQuery({
    queryKey: ["search", searchParams],
    queryFn: fetchApiData,
    enabled: !!searchParams.q, // Only run the query if there is a search query
  });

  const onSearch = ({ q, searchOption }) => {
    setSearchParams({ q, searchOption });
  };

  const renderApiData = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (apiDataError) {
      return <div>Error: {apiDataError.message}</div>;
    }
    if (apiData) {
      if (apiData.length === 0) {
        return <div>Not Found</div>;
      }
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
