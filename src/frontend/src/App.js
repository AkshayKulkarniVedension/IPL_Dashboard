import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MatchPage from "./pages/MatchPage";
import { TeamPage } from "./pages/TeamPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams/:teamName/matches/:year">
            <MatchPage></MatchPage>
          </Route>
          <Route path="/teams/:teamName">
            <TeamPage></TeamPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
