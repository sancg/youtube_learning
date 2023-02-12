import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import {
  Navbar,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Feed,
} from "./components";

import { DarkTheme } from "./Utils/DarkTheme";
const App = () => {
  console.log(DarkTheme);
  return (
    <ThemeProvider theme={DarkTheme}>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<VideoDetail />} />
            <Route path="/channel/:id" exact element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
