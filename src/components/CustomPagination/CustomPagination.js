import Pagination from "@mui/material/Pagination";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          color="primary"
          hideNextButton
          hidePrevButton
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
