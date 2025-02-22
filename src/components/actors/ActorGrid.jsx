import React from "react";
import ActorCards from "./ActorCards";
const ActorGrid = ({ actors }) => {
  return (
    <div>
      {actors.map((data) => (
        <ActorCards
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          gender={data.person.gender}
          image={
            data.person.image
              ? data.person.image.medium
              : "/not-found-image.png"
          }
        />
      ))}
    </div>
  );
};

export default ActorGrid;
