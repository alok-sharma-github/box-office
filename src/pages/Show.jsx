import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";

const Show = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (err) {
        setShowError(err.message);
      }
    }
    fetchData();
  }, [showId]);

  if (showError) {
    return <div>We have an error: {showError}</div>;
  }

  if (showData) {
    return (
      <div>
        <h1>{showData.name}</h1>
        <p>{showData.summary}</p>
        {/* Add more show details here */}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default Show;
