import React from "react";

const Seasons = ({ seasons }) => {
  // Calculate the total number of episodes
  const totalEpisodes = seasons.reduce(
    (sum, season) => sum + (season.episodeOrder || 0),
    0
  );

  // Create a list of season numbers
  const seasonData = seasons.map((season) => (
    <div key={season.id}>
      <p>Season no.: {season.number}</p>
      <p>Episodes: {season.episodeOrder}</p>
      <div>
        Aired: {season.premiereDate || "N/A"} - {season.endDate || "Ongoing"}
      </div>
    </div>
  ));

  return (
    <div>
      <p>Seasons: {seasons.length}</p>
      <p>Episodes: {totalEpisodes}</p>
      <div>{seasonData}</div>
    </div>
  );
};

export default Seasons;
