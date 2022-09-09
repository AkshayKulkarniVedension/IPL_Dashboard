import { React, useEffect, useState } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";

export function TeamPage() {
  const [teams, setTeams] = useState({});
  async function fetchMatches() {
    const response = await fetch("http://localhost:8080/team/Delhi%20Capitals");
    const data = await response.json();
    console.log(data);
    setTeams(data);
  }

  useEffect(function () {
    fetchMatches();
  }, []);

  return (
    <div className="TeamPage">
      <h1>{teams.teamName}</h1>
      <MatchDetailCard
        latestMatch={teams.matches && teams.matches[0]}
      ></MatchDetailCard>
      <div>
        {teams.matches &&
          teams.matches.map(function (team) {
            return <MatchSmallCard key={team.id} team={team}></MatchSmallCard>;
          })}
      </div>
    </div>
  );
}

export default TeamPage;
