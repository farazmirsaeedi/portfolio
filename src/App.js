import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Button } from "@mui/material";

import "./App.css";

//NOTE Create Custom Theme
const theme = createTheme({
  direction: "rtl",
});

//NOTE Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی یونس قربانی</title>
          </Helmet>
          <div className="App">
            <Button variant="contained">کلیک کن</Button>
          </div>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
