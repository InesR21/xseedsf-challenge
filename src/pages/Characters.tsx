import React, { useEffect, useState } from "react";
import characterService from "../api/characters-service";

function Characters() {
  const [characters, setCharacters] = useState<any[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await characterService.getCharacters();
      setCharacters(data.data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      {characters.length === 0 && <p>Loading...</p>}
      <ul>
        {characters.map((character) => (
          <li key={character.name + character.birth_year}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
