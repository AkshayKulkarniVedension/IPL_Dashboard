import { React, useEffect, useState } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import { useParams } from "react-router-dom";
import "./TeamPage.scss";
import { PieChart } from "react-minimal-pie-chart";

export function TeamPage() {
  const [teams, setTeams] = useState({});

  const { teamName } = useParams();
  async function fetchMatches() {
    const response = await fetch(`http://localhost:8080/team/${teamName}`);
    const data = await response.json();
    console.log(data);
    setTeams(data);
  }

  useEffect(
    function () {
      fetchMatches();
    },
    [teamName]
  );

  if (!teams || !teams.teamName) {
    return <h1>Team not found</h1>;
  }

  const totalWins = teams.totalWins;
  const totalLosses = teams.totalMatches - totalWins;

  return (
    <div className="TeamPage">
      <div className="team-name">
        <h1 className="team-name-text">{teams.teamName}</h1>
      </div>

      <div className="win-vs-loss">
        wins vs loss
        <PieChart
          data={[
            { title: "wins", value: totalWins, color: "rgb(56, 122, 56)" },
            { title: "losses", value: totalLosses, color: "rgb(174, 79, 79)" },
          ]}
        />
      </div>

      <div className="details-card">
        <h3>Latest Matches</h3>
        <MatchDetailCard
          latestMatch={teams.matches && teams.matches[0]}
          teamName={teams.teamName}
        ></MatchDetailCard>
      </div>

      {teams.matches &&
        teams.matches.map(function (team, index) {
          if (index === 0) {
            return;
          }
          return (
            <MatchSmallCard
              key={team.id}
              team={team}
              teamName={teams.teamName}
            ></MatchSmallCard>
          );
        })}

      <div className="more">
        <a href="#">More &#8618;</a>
      </div>
    </div>
  );
}

export default TeamPage;
