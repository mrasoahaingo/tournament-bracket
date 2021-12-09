const { Player } = require("./playerSchema");

exports.createPlayer = async ({ name }) => {
  const player = new Player({ name });
  await player.save();
  return player;
};
