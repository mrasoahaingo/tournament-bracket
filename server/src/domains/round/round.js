const { Round } = require("./roundSchema");

exports.createRound = (_, level) => {
  const round = new Round({ level });
  return round.save();
};

exports.createAllRounds = ndRounds => {
  return Array(ndRounds)
    .fill()
    .map(exports.createRound);
};

exports.addMatchesToRounds = (rounds, matches) => {
  return rounds.map(round => {
    const nbMatches = Math.pow(2, round.level);
    const roundMatches = matches.splice(0, nbMatches);
    const matchIds = roundMatches.map(match => match._id);
    round.matches = matchIds;
    round.level = rounds.length - round.level;
    return round.save();
  });
};
