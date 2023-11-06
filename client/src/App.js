
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import AllRouter from "./AllRouter/AllRouter";

function App() {
  console.log(process.env.REACT_APP_URL_LINK) ;
  return (
    <Box>
      <Navbar/>
      <AllRouter/>
    </Box>
  );
}

export default App;
