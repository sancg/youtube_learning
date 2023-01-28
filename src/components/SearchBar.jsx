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
        borderRadius: 10,
        border: "1px solid #3d3d3d",
        pl: 4,
        boxShadow: "none",
        mr: { sm: 5 },
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <input
        type="text"
        name="search_query"
        id="search"
        className="search_bar"
        placeholder="Search..."
        onChange={() => {}}
        value=""
        style={{
          border: 0,
          borderRadius: "5px",
          padding: "0.5em",
          color: "#FF",
        }}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "red",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
