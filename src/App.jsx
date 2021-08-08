import "./App.scss";
import Menu from "./components/shared/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";

const App = () => (
  <div className="App">
    <div className="main-container">
      <Router>
        <Menu></Menu>
        <AppRouter></AppRouter>
      </Router>
    </div>
  </div>
);

export default App;
