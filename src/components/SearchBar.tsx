import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { AppBar, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "14px",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#B0B0B0",
  backgroundColor: "#1E1E1E",
  "&:hover": {
    backgroundColor: "#1E1E1E",
  },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "1000vw",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface SearchBarProps {
  handleSearchChange: (value: string) => void;
}

const SearchBar = ({ handleSearchChange }: SearchBarProps) => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
      <AppBar
        position="static"
        onChange={(event) =>
          handleSearchChange((event.target as HTMLInputElement).value)
        }
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </AppBar>
    </Box>
  );
};

export default SearchBar;
