import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from "@mui/icons-material/Search";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieIcon from "@mui/icons-material/Movie";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useNavigate();

  useEffect(() => {
    if (value === 0) {
      history("/");
    } else if (value === 1) {
      history("/movies");
    } else if (value === 2) {
      history("/series");
    } else if (value === 3) {
      history("/search");
    }
  }, [value, history]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: "0",
        backgroundColor: "#2d313a",
        zIndex: 100,
      }}
    >
      <BottomNavigation
        sx={{
          backgroundColor: "#2d313a",
          zIndex: 100,
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Tv Series"
          icon={<LiveTvIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
