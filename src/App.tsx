import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./utils/routes/routes";

function App() {
  const content = useRoutes(routes);
  return (
    <div>
      {content}
    </div>
  );
}

export default App;
