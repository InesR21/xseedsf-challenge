import { Chip, Divider, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Character } from "../utils/types";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import characterService from "../api/characters-service";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../features/favourites/favouritesSlice";

interface CharacterItemProps {
  character: Character;
}

const CharacterItem = ({ character }: CharacterItemProps) => {
  const { homeworld } = character;
  const [homeworldName, setHomeworldName] = useState("");
  const dispatch = useDispatch();

  const favourites = useSelector((state: any) => state.favourites.favourites);
  const findFavourite = favourites?.find(
    (favourite: Character) => favourite.id === character.id
  );

  const showFavorite = () => {
    const favourite = findFavourite;
    if (!favourite) return <FavoriteBorderIcon sx={{ fontSize: 20 }} />;
    if (favourite.id === character.id) {
      return <FavoriteIcon sx={{ fontSize: 20 }} />;
    } else {
      return <FavoriteBorderIcon sx={{ fontSize: 20 }} />;
    }
  };
  const handleFavorite = () => {
    if (findFavourite) dispatch(removeFavourite(character));
    else dispatch(addFavourite(character));
  };
  useEffect(() => {
    async function fetchDataHomeworld() {
      if (!homeworld) return;
      const data = await characterService.getCharacterHomeworld(homeworld);
      setHomeworldName(data.data.name);
    }
    fetchDataHomeworld();
  }, [character, homeworld]);

  return (
    <List
      sx={{ width: "100%", paddingRight: "10px", bgcolor: "background.paper" }}
    >
      <ListItem
        key={character.id}
        disableGutters
        sx={{
          p: 0,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flex: "1",
          }}
        >
          <div>
            <span>{character.name}</span>
            <br />
            <span>
              {character.gender} | {character.birth_year}
            </span>
            <br />
            <div>
              <Chip
                sx={{ borderRadius: "6px", marginTop: "5px", padding: "2px" }}
                icon={<PlaceOutlinedIcon />}
                label={homeworldName ? homeworldName : "Unknown"}
              />
            </div>
            <br />
          </div>
          <div>
            <IconButton onClick={handleFavorite}>
              <>{showFavorite()}</>
            </IconButton>
          </div>
        </div>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </List>
  );
};

export default CharacterItem;
