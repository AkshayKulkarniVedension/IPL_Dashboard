import React, { useState, useEffect } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import { useParams } from "react-router-dom";

function MatchPage() {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  async function fetchMatches() {
    const response = await fetch(
      `http://localhost:8080/team/${teamName}/matches?year=${year}`
    );
    const data = await response.json();
    console.log(data);
    setMatches(data);
  }

  useEffect(function () {
    fetchMatches();
  }, []);

  if (matches.length <= 0) {
    return <h1>Team not found</h1>;
  }
  return (
    <div className="matchPage">
      <h1>Match Page</h1>
      {matches.map(function (match) {
        return (
          <MatchDetailCard key={match.id} latestMatch={match}></MatchDetailCard>
        );
      })}
    </div>
  );
}

export default MatchPage;
