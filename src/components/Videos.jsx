import React from "react";
import {
  Avatar,
  Box,
  CardContent,
  CardMedia,
  Hidden,
  Typography,
} from "@mui/material";

const Videos = (props) => {
  const hostname = "https://www.youtube.com/";
  const { videos } = props;
  console.log(videos);
  return (
    <Box spacing={2}>
      {videos.map((vid, id) => (
        <div className="card_video_container">
          <CardMedia
            component="img"
            image={vid.demoThumbnail}
            sx={{
              borderRadius: "10px",
            }}
          ></CardMedia>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              p: 0,
            }}
          >
            <Avatar
              alt={vid.demoChannelTitle}
              src={vid.demoProfilePicture}
              sx={{
                mt: "12px",
                mr: 2,
              }}
            />
            <div>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.2rem",
                  margin: "12px 0 4px 0",
                }}
              >
                {vid.demoVideoTitle}
              </Typography>
              <div
                style={{
                  color: "#aaaaaa",
                }}
              >
                {vid.demoChannelTitle}
              </div>
            </div>
          </CardContent>
        </div>
      ))}
    </Box>
  );
};

export default Videos;
