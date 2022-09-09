import { Link } from "react-router-dom";

function MatchSmallCard({ team, teamName }) {
  const otherTeam =
    teamName && teamName === team.team1 ? team.team2 : team.team1;

  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className="MatchSmallCard">
      <h3>
        Vs
        <Link to={otherTeamRoute}> {otherTeam}</Link>
      </h3>
      <p>
        {team.matchWinner} Won by {team.resultMargin} {team.result}
      </p>
    </div>
  );
}

export default MatchSmallCard;
