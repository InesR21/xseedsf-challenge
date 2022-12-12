import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Character } from "../utils/types";
import CharacterItem from "../components/CharacterItem";
import SearchBar from "../components/SearchBar";
import { getIdFromUrl } from "../utils";

const Favorites = () => {
  const [favouritesFiltered, setFavouritesFiltered] = useState<Character[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const favourites: Character[] = useSelector(
    (state: any) => state.favourites.favourites
  );

  const handleFavouriteSearch = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setFavouritesFiltered(favourites);
    } else {
      const filtered = favourites.filter((favourite) =>
        favourite.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFavouritesFiltered(filtered);
    }
  }, [searchValue, favourites]);

  if (!favourites || favourites.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          fontSize: "1rem",
        }}
      >
        <p>No tienes Favoritos agregados</p>
      </div>
    );
  }
  return (
    <div>
      <ul>
        <span>Search a favourite</span>
        <br />
        <br />
        <SearchBar handleSearchChange={handleFavouriteSearch} />
        {favouritesFiltered?.map((person: Character) => {
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
    </div>
  );
};

export default Favorites;
