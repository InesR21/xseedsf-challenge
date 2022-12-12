import axios from "axios";

const getCharacters = async () => {
  return await axios.get("https://swapi.dev/api/people");
};

const getCharacter = async (id: number) => {
  return await axios.get(`https://swapi.dev/api/people/${id}`);
};

const getCharacterHomeworld = async (url: string) => {
  return await axios.get(url);
};

const characterService = { getCharacters, getCharacter, getCharacterHomeworld };

export default characterService;
