import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [search, searchState] = useState("");

  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        backgroundColor: "#0f0f0f",
        borderRadius: 10,
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        name="search-bar"
        id="search"
        className="search-bar"
        placeholder="Search"
        onChange={() => {}}
        autoComplete="off"
        // value=""
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "#f1f1f1",
          background: "#282828",
          borderRadius: "0px 40px 40px 0px",
          width: "4rem",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
