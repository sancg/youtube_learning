import { AppBar } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from "../Utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
    sm={{ mr: 1, ml: 1 }}
    zIndex={10}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="YtLearning" height={40} />
    </Link>
    {/* <AppBar>tools</AppBar>// */}
    <SearchBar />
  </Stack>
);

export default Navbar;
