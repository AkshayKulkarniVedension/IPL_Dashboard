import matchers from "@testing-library/jest-dom/matchers";
import { Link } from "react-router-dom";
import "./MatchDetailCard.scss";

function MatchDetailCard({ latestMatch, teamName }) {
  const otherTeam =
    teamName && teamName === latestMatch.team1
      ? latestMatch.team2
      : latestMatch.team1;

  const isMatchWon = teamName === latestMatch.matchWinner;

  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div
      className={
        isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"
      }
    >
      <div>
        <span className="vs">Vs</span>
        <h1>
          <Link to={otherTeamRoute}> {otherTeam}</Link>
        </h1>
        <h3 className="match-date">{latestMatch.date}</h3>
        <h2 className="match-venue">At {latestMatch.venue}</h2>
        <h3 className="match-result">
          {latestMatch.matchWinner} Won by {latestMatch.resultMargin}{" "}
          {latestMatch.result}
        </h3>
      </div>
      <div className="innings">
        <h3>First Inning</h3>
        <p>{latestMatch.team1}</p>
        <h3>Second Inning</h3>
        <p>{latestMatch.team2}</p>
        <h3>Man of the Match</h3>
        <p>{latestMatch.playerOfMatch}</p>
        <h3>Umpires</h3>
        <p>
          {latestMatch.umpire1}, {latestMatch.umpire2}
        </p>
      </div>
    </div>
  );
}

export default MatchDetailCard;
