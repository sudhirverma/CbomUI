import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import routes from "./routes";
import { renderRoutes } from "./routeUtils";
import LandingPages from "./pages/LandingPages";
import theme from "./assets/theme";


const App = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Routes>
        {renderRoutes(routes)}
        <Route path="*" element={<Navigate to="/CBOM" />} />
        <Route path="/CBOM" element={<LandingPages />} />
        <Route path="/BeSLighthouse/Project-Of-Interest/bes_version_history/:CbomId/:CbomName" element={ <BesVersionHistory /> } />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
