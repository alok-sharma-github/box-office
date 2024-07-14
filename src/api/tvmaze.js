const BASE_URL = "https://api.tvmaze.com";

const apiGet = async (queryString) => {
  try {
    const response = await fetch(`${BASE_URL}${queryString}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const body = await response.json();
    console.log(body);
    return body;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

export const searchForShows = (query) => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = (query) => apiGet(`/search/people?q=${query}`);
export const getShowById = (showId) => apiGet(`/shows/${showId}`);
