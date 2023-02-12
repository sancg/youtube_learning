import { Stack } from "@mui/material";
import { Button } from "@mui/material";

import { categories } from "../Utils/constants";

const selectedCategory = "Home";

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%",
        },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, id) => (
        <button
          className="category-btn"
          key={id}
          style={{
            background: category.name === selectedCategory && "#2e2e2e",
          }}
          sx={{ justifyContent: "flex-start", color: "#fbfbfb" }}
        >
          <span
            style={{
              display: "inline-flex",
              marginRight: "24px",
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};
export default Sidebar;
