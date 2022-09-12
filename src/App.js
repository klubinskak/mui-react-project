import React, { useState } from "react";
import SideBar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, createTheme, CssBaseline, Stack } from "@mui/material";
import Add from "components/Add";
import { ThemeProvider } from "@emotion/react";
import { theme } from "theme";

const App = () => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar mode={mode} setMode={setMode} />
            <Feed />
            <RightBar />
          </Stack>
          <Add />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
