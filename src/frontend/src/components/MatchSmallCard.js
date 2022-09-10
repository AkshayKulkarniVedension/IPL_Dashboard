import { Link } from "react-router-dom";
import "./MatchSmallCard.scss";

function MatchSmallCard({ team, teamName }) {
  const otherTeam =
    teamName && teamName === team.team1 ? team.team2 : team.team1;

  const isMatchWon = teamName === team.matchWinner;
  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div
      className={
        isMatchWon ? "MatchSmallCard won-card" : "MatchSmallCard lost-card"
      }
    >
      <span className="Vs">Vs</span>
      <h2>
        <Link to={otherTeamRoute}> {otherTeam}</Link>
      </h2>
      <p>
        {team.matchWinner} Won by {team.resultMargin} {team.result}
      </p>
    </div>
  );
}

export default MatchSmallCard;
