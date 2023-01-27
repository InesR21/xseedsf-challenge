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

const getJobs = async () => {
  return await axios.get(
    "https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty"
  );
};

const getJob = async (id: number) => {
  return await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
};

const characterService = {
  getCharacters,
  getCharacter,
  getCharacterHomeworld,
  getJobs,
  getJob,
};

export default characterService;
