const { Match } = require("./matchSchema");

exports.createMatch = () => {
  const match = new Match({
    playerA: null,
    scoreA: null,
    playerB: null,
    scoreB: null,
    winner: null,
    status: "not_started"
  });
  return match.save();
};

exports.createAllMatches = nbMatches => {
  return Array(nbMatches)
    .fill()
    .map(exports.createMatch);
};

exports.joinMatch = async (playerId, matchId) => {
  const match = await Match.findById(matchId);

  const playerScore = { id: playerId, score: 0 };

  if (!match.playerA) match.playerA = playerScore;
  else match.playerB = playerScore;

  await match.save();
};

exports.submitPlayerScore = async () => {
  // const match = await Match.findById(matchId)
};
