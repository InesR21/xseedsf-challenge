import React from "react";
import { useSelector } from "react-redux";
import { Character } from "../types";
import CharacterItem from "../components/CharacterItem";
import SearchBar from "../components/SearchBar";

const Favorites = () => {
  const favourites: Character[] = useSelector(
    (state: any) => state.favourites.favourites
  );

  const getIdFromUrl = (url: string) => {
    const urlParts = url.split("/");
    const urlString = urlParts[urlParts.length - 2];
    const characterId = parseInt(urlString, 10);
    return characterId;
  };

  return (
    <div>
      {favourites.length === 0 && (
        <div
          style={{
            fontSize: "2rem",
            padding: "3rem",
          }}
        >
          <p>No tienes Favoritos agregados</p>
        </div>
      )}

      <>
        <ul>
          <SearchBar />
          {favourites.map((person: Character) => {
            const id = getIdFromUrl(person.url);
            const character: Character = {
              id,
              name: person.name,
              gender: person.gender,
              birth_year: person.birth_year,
              homeworld: person.homeworld,
              url: person.url,
            };
            return <CharacterItem key={id} character={character} />;
          })}
        </ul>
      </>
    </div>
  );
};

export default Favorites;
