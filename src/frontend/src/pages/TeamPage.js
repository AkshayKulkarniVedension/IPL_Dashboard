import { React, useEffect, useState } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import { useParams } from "react-router-dom";

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
  return (
    <div className="TeamPage">
      <h1>{teams.teamName}</h1>
      <MatchDetailCard
        latestMatch={teams.matches && teams.matches[0]}
        teamName={teams.teamName}
      ></MatchDetailCard>
      <div>
        {teams.matches &&
          teams.matches.map(function (team) {
            return (
              <MatchSmallCard
                key={team.id}
                team={team}
                teamName={teams.teamName}
              ></MatchSmallCard>
            );
          })}
      </div>
    </div>
  );
}

export default TeamPage;
