function superbowlWin(record) {
    const winningSeason = record.find(season => season.result === "W" && season.team === "Denver Broncos");
    if (winningSeason) {
      return winningSeason.year;
    } else {
      return undefined; 
    }
  }
  const NflSeasons = [
     {year: 2015, team: "Denver Broncos", result: "W" },
    { year: 2014, team: "Green Bay Packers", result: "N/A" },
    { year: 2013, team: "Denver Broncos", result: "W" },
  ];
  const WinningYear = superbowlWin(nflSeasons);
  console.log(winningYear); 