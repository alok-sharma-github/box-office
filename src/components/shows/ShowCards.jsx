import React from "react";
// import { Link } from "react-router-dom";

const ShowCards = ({ name, image, id, summary }) => {
  const summaryStripped = summary
    ? summary
        .replace(/<[^>]+>/g, "")
        .split(" ")
        .slice(0, 10)
        .join(" ")
    : "No description";

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}...</p>
      <div>
        <a href={`/show/${id}`} target="blank" rel="noreferrer">
          Read more
        </a>
        <button type="button">Star</button>
      </div>
    </div>
  );
};

export default ShowCards;
