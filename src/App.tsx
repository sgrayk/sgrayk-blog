import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./utils/routes/routes";
import { CssBaseline } from "@mui/material";
import ThemeProviderWrapper from "./theme/ThemeProvider";

function App() {
  const content = useRoutes(routes);
  return (
    <ThemeProviderWrapper>
        <CssBaseline />
        {content}
    </ThemeProviderWrapper>
  );
}

export default App;
