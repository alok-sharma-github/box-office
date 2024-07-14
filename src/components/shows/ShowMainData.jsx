import React from "react";

const ShowMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <div>
      <img src={image ? image.original : "/not-found-image.png"} alt="" />
      <div>
        <h1>{name}</h1>
        <div>{rating.average || "N/A"}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>{genres.join(", ")}</div>
      </div>
    </div>
  );
};

export default ShowMainData;
