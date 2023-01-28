import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Feed = () => {
  const current_yr = new Date().getFullYear();
  const [first, setFirst] = useState("");
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "Column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "100vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar>

        </Sidebar>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright {current_yr} JSM Media
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
