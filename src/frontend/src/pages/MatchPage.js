import React, { useState, useEffect } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import { useParams } from "react-router-dom";
import "./MatchPage.css";

function MatchPage() {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();
  const [selectedYear, setSelectedYear] = useState(year);

  async function fetchMatches() {
    const response = await fetch(
      `http://localhost:8080/team/${teamName}/matches?year=${selectedYear}`
    );
    const data = await response.json();
    console.log(data);
    setMatches(data);
  }

  useEffect(
    function () {
      fetchMatches();
    },
    [selectedYear]
  );

  if (matches.length <= 0) {
    return <h1>Team not found</h1>;
  }
  function handleYearSelect(e) {
    setSelectedYear(e.target.value);
  }
  return (
    <div className="matchPage">
      <select
        onChange={handleYearSelect}
        className="year-selector"
        defaultValue={selectedYear}
      >
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
      </select>
      {matches.map(function (match) {
        return (
          <MatchDetailCard
            key={match.id}
            latestMatch={match}
            teamName={teamName}
          ></MatchDetailCard>
        );
      })}
    </div>
  );
}

export default MatchPage;
