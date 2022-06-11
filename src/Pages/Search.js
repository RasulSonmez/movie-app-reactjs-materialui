import React from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import "./Search.css";
const Search = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            style={{ width: "100%" }}
          />
          <Button variant="contained" style={{ marginLeft: 10 }}>
            <SearchIcon />
          </Button>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Search;
