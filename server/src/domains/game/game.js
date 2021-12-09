const { Game } = require("./gameSchema");
const { createAllMatches, joinMatch } = require("../match/match");
const { addMatchesToRounds, createAllRounds } = require("../round/round");

exports.createGame = async nbPlayers => {
  const nbRounds = Math.ceil(Math.log(nbPlayers) / Math.log(2));
  const nbMatches = nbPlayers - 1;

  const matches = await Promise.all(createAllMatches(nbMatches));
  const rounds = await Promise.all(createAllRounds(nbRounds));
  const roundsWithMatches = await Promise.all(
    addMatchesToRounds(rounds, matches)
  );

  const roundIds = roundsWithMatches.map(round => round._id);

  const game = new Game({
    nbPlayers,
    rounds: roundIds
  });

  await game.save();

  return game;
};

exports.getGameBracket = async gameId => {
  const game = await Game.findById(gameId)
    .populate({ path: "rounds", populate: { path: "matches" } })
    .exec();
  return game;
};

exports.joinGame = async (playerId, gameId) => {
  const game = await Game.findById(gameId)
    .populate({
      path: "rounds",
      model: "Round",
      match: { level: 1 },
      populate: {
        path: "matches",
        model: "Match",
        match: { $or: [{ playerA: null }, { playerB: null }] }
      }
    })
    .exec();

  const matchId = game.rounds[0].matches[0].id;

  await joinMatch(playerId, matchId);
};
