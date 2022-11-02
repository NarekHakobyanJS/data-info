import { ColorModeContext, useMode } from "./theme";
//import { CssBaseLine, TeameProvider } from '@mui/material';
import Topbar from "./scenes/global/Topbar"
import TeameProvider from "@emotion/styled"
import { CssBaseline } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <TeameProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </TeameProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
