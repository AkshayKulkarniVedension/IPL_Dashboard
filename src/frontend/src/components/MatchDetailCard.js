import matchers from "@testing-library/jest-dom/matchers";

function MatchDetailCard({ latestMatch }) {
  return (
    <div className="MatchDetailCard">
      <h4>Match Details</h4>
      <h3>
        {latestMatch.team1} Vs {latestMatch.team2}
      </h3>
      <h3>Latest Matches</h3>
    </div>
  );
}

export default MatchDetailCard;
