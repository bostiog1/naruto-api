import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const url = `https://dattebayo-api.onrender.com/characters`;
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log("response: ", response.data.characters);
      setData(response.data.characters);
      setError(null)
    } catch (error) {
      console.log("Error:", error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Naruto Wikipedia</h1>
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((character) => (
          <div
            key={character.id}
            className="border p-4 rounded shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
            <img
              src={character.images[0]}
              alt={character.name}
              className="w-full h-auto mb-4 rounded"
            />
            <div className="text-sm mb-4">
              <h3 className="font-semibold">Jutsu:</h3>
              
            </div>
            <div className="text-sm mb-4">
              <h3 className="font-semibold">Affiliation:</h3>
              <p>{character.personal.affiliation.slice(-1)[0]}</p>
            </div>
            <div className="text-sm mb-4">
              <h3 className="font-semibold">Clan:</h3>
              <p>{character.personal.clan || "Unknown"}</p>
            </div>
            {/* <div className="text-sm mb-4"> */}
              {/* <h3 className="font-semibold">Ninja Rank:</h3> */}
              {/* <div className="text-sm mb-4">
                <h3 className="font-semibold">Ninja Rank:</h3>
                <p>
                  {character.rank && character.rank.ninjaRank
                    ? character.rank.ninjaRank.PartII
                    : "Unknown"}
                </p>
              </div> */}
            {/* </div> */}
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
