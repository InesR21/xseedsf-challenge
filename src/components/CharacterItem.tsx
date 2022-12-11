import React from "react";

const CharacterItem = (characterItem: any) => {
  const character = characterItem.characterItem;

  console.log(character);
  return (
    <li key={character.name + character.birth_year}>
      <div>
        <div>
          <span>{character.name}</span>
          <br />
          <span>
            {character.gender} | {character.birth_year}
          </span>
          <br />
          <span>{character.homeworld}</span>
          <br />
          <br />
        </div>
      </div>
    </li>
  );
};

export default CharacterItem;
