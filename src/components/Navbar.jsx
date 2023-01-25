import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from "../Utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={1}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="YtLearning" height={40} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
