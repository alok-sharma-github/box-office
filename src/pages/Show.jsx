import React from "react";
import { Link, useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";
// import { useNavigate } from "react-router-dom";
const Show = () => {
  const { showId } = useParams();

  const {
    data: showData,
    error: showError,
    isLoading,
  } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowById(showId),
  });

  //   const navigateTo = useNavigate();
  //   const onGoBack = () => {
  //     navigateTo("/");
  //   };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        {/* <button type="button" onClick={onGoBack}>
          Go back
        </button> */}
        <Link to="/">Go back</Link>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return null;
};

export default Show;
