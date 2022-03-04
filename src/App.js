import React, { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ColorModeContext } from "./context/ColorModeContext";
import ProfileGrid from "./components/ProfileGrid";

function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProfileGrid />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
