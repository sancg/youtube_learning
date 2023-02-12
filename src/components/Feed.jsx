import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Sidebar, Videos } from "./index";
import { videoDummy } from "../Utils/constants";

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
          backgroundColor: "#0f0f0f",
          height: {
            sx: "auto",
            md: "100vh",
          },
          borderRight: "1px solid #3d3d3d",
          pt: 1,
          pl: { sx: 0, md: 1.5 },
          pr: 2,
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright {current_yr} JSM Media
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          mt: 1,
          ml: 2,
          overFlowY: "auto",
          flex: 2,
        }}
      >
        <Videos videos={videoDummy} />
      </Box>
    </Stack>
  );
};

export default Feed;
