const { createPlayer } = require("./player");
const { joinGame } = require("../game/game");
const { submitPlayerScore } = require("../match/match");

exports.playerRoutes = {
  create: ctx => {
    createPlayer({ name: ctx.request.body.name });
  },
  joinGame: (ctx, playerId, gameId) => {
    joinGame(playerId, gameId);
  },
  submitScore: (ctx, playerId, matchId) => {
    submitPlayerScore(playerId, matchId, ctx.request.body.score);
  }
};
