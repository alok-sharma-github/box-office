import React from "react";

const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : "/not-found-image.png"}
              alt={person.name}
              //   style={{ width: "100px", height: "150px", objectFit: "cover" }}
            />
          </div>
          <div>
            <p>
              {person.name} | {character.name} {voice && "| Voiceover"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
