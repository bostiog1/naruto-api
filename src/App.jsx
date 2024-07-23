import React, { useState, useEffect } from "react";
import axios from "axios";
import NarutoCard from "./NarutoCard";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const url = `https://dattebayo-api.onrender.com/characters`;

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log("response: ", response.data.characters);
      setData(response.data.characters);
      setError(null);
    } catch (error) {
      console.log("Error:", error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Naruto Wikipedia</h1>
      {error && <p className="text-red-500">Error: {error.message}</p>}

      <div className="text-center mb-8">
        <button
          onClick={toggleImage}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Future
        </button>
      </div>
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((character) => (
            <NarutoCard
              character={character}
              key={character.id}
              imageIndex={imageIndex}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No characters found</h2>
        </div>
      )}
    </>
  );
}
export default App;
