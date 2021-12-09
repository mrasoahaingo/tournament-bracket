const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matchSchema = {
  playerA: {
    id: { type: Schema.Types.ObjectId, ref: "Player" },
    score: Number
  },
  playerB: {
    id: { type: Schema.Types.ObjectId, ref: "Player" },
    score: Number
  },
  scoreB: Number,
  winner: String,
  status: String
};

exports.Match = mongoose.model("Match", matchSchema);
