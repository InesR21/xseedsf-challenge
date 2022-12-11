import axios from "axios";

const getCharacters = async () => {
  return await axios.get("https://swapi.dev/api/people");
};

const getCharacter = async (id: number) => {
  return await axios.get(`https://swapi.dev/api/people/${id}`);
};

const characterService = { getCharacters, getCharacter };

export default characterService;
