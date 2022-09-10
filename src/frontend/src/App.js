import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MatchPage from "./pages/MatchPage";
import { TeamPage } from "./pages/TeamPage";
import Home from "./pages/Home";

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
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
