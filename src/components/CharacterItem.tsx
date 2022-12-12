import { Chip, Divider, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Character } from "../types";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
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
    <List
      sx={{ width: "100%", paddingRight: "10px", bgcolor: "background.paper" }}
    >
      <ListItem
        key={character.name + character.birth_year}
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
                label={homeworldName}
              />
            </div>
            <br />
          </div>
          <div>
            <IconButton>
              <FavoriteIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </List>
  );
};

export default CharacterItem;
