import { Box, ThemeProvider } from "@mui/material";
import { theme } from "../theme";

<<<<<<< HEAD
// const bgImage = require("../assets/bg.png");
const bgImage = require("../assets/texturaAzul.jpg");
=======
const bgImage = require("../assets/bg.png");

>>>>>>> 4da5f967192b25ccf5191b20a23bf4517fb14d3b
const MainLayout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
