import React from "react";
import { useParams } from "react-router-dom";
const Show = () => {
  const { showId } = useParams();
  console.log(showId);
  return <div>Show {showId}</div>;
};

export default Show;
