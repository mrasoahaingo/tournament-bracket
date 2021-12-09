const { createGame, getGameBracket } = require("./game");

exports.gameRoutes = {
  create: ctx => {
    const game = createGame(Number(ctx.request.body.maxPlayers));
    ctx.body = game;
  },
  details: async (ctx, gameId) => {
    const game = await getGameBracket(gameId);
    if (!game) return ctx.throw("game not found", 404);
    ctx.body = game;
  }
};
