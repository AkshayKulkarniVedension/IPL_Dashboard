function MatchSmallCard({ team }) {
  return (
    <div className="MatchSmallCard">
      <h1>
        {team.team1} vs {team.team2}
      </h1>
    </div>
  );
}

export default MatchSmallCard;
