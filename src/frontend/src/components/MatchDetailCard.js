import matchers from "@testing-library/jest-dom/matchers";
import { Link } from "react-router-dom";

function MatchDetailCard({ latestMatch, teamName }) {
  const otherTeam =
    teamName && teamName === latestMatch.team1
      ? latestMatch.team2
      : latestMatch.team1;

  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className="MatchDetailCard">
      <h1>
        Vs <Link to={otherTeamRoute}> {otherTeam}</Link>
      </h1>
      <h3>{latestMatch.date}</h3>
      <h2>At {latestMatch.venue}</h2>
      <h3>
        {latestMatch.matchWinner} Won by {latestMatch.resultMargin}{" "}
        {latestMatch.result}
      </h3>
    </div>
  );
}

export default MatchDetailCard;
