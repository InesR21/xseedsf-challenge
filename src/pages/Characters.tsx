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
        {characters.map((person: Character) => {
          const character: Character = {
            name: person.name,
            gender: person.gender,
            birth_year: person.birth_year,
            homeworld: person.homeworld,
          };
          return (
            <CharacterItem
              key={person.name + person.birth_year}
              character={character}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Characters;
