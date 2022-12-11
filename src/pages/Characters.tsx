import React, { useEffect, useState } from "react";
import characterService from "../api/characters-service";
import CharacterItem from "../components/CharacterItem";
import { Character } from "../types";

function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
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
        {characters.map((character: Character) => (
          <CharacterItem characterItem={character} />
        ))}
      </ul>
    </div>
  );
}

export default Characters;
