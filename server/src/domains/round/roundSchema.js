const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roundSchema = {
  level: Number,
  matches: [{ type: Schema.Types.ObjectId, ref: "Match" }]
};

exports.Round = mongoose.model("Round", roundSchema);
