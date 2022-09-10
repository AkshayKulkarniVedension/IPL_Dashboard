import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";
import "./Home.css";
function Home() {
  const history = useHistory();
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState("");
  async function fetchTeams() {
    const response = await fetch(`http://localhost:8080/team/teams`);
    const data = await response.json();
    setTeams(data);
  }

  useEffect(function () {
    fetchTeams();
  }, []);

  const handleOnClick = useCallback(
    (team) => history.push("/teams/" + team),
    [history]
  );
  return (
    <div className="home">
      {teams.map(function (team) {
        if (
          team === "Pune Warriors" ||
          team === "Rising Pune SuperGiant" ||
          team === "Rising Pune Supergiants"
        ) {
          return;
        }
        return (
          <div
            className="singleTeam"
            onClick={() => handleOnClick(team)}
            key={team}
          >
            <h2>{team}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
