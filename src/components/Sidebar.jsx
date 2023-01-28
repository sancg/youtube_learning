import React from "react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";

import { categories } from "../Utils/constants";
const Sidebar = () => {
  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%",
        },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <Button sx={{ color: "#fff" }}>
          <span>{category.name}</span>
        </Button>
      ))}
    </Stack>
  );
};
export default Sidebar;
