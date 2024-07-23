import React from "react";

function NarutoCard({ character, imageIndex }) {
  return (
    <div key={character.id} className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
      <img
        src={character.images[imageIndex]}
        alt={character.name}
        className="w-full h-auto mb-4 rounded"
      />
      <div className="text-sm mb-4">
        <h3 className="font-semibold">Affiliation:</h3>
        <p>{character.personal.affiliation.slice(-1)[0]}</p>
      </div>
      <div className="text-sm mb-4">
        <h3 className="font-semibold">Clan:</h3>
        <p>{character.personal.clan || "Unknown"}</p>
      </div>
    </div>
  );
}

export default NarutoCard;
