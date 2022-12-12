import { Chip, Divider, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Character } from "../types";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import characterService from "../api/characters-service";

interface CharacterItemProps {
  character: Character;
}

const CharacterItem = ({ character }: CharacterItemProps) => {
  const { homeworld } = character;
  const [homeworldName, setHomeworldName] = useState("");
  useEffect(() => {
    async function fetchDataHomeworld() {
      if (!homeworld) return;
      const data = await characterService.getCharacterHomeworld(homeworld);
      setHomeworldName(data.data.name);
    }
    fetchDataHomeworld();
  }, [character, homeworld]);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem
        key={character.name + character.birth_year}
        disableGutters
        sx={{ p: 0 }}
        secondaryAction={
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        }
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
              sx={{ borderRadius: "5px", marginTop: "5px" }}
              icon={<LocationOnOutlinedIcon />}
              label={homeworldName}
            />
          </div>
          <br />
        </div>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </List>
  );
};

export default CharacterItem;
