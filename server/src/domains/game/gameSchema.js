const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = {
  nbPlayers: Number,
  rounds: [{ type: Schema.Types.ObjectId, ref: "Round" }],
  status: String
};

exports.Game = mongoose.model("Game", gameSchema);
