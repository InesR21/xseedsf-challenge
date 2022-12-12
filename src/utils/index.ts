export const getIdFromUrl = (url: string) => {
  const urlParts = url.split("/");
  const urlString = urlParts[urlParts.length - 2];
  const characterId = parseInt(urlString, 10);
  return characterId;
};
